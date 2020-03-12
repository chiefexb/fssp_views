from django.shortcuts import render
import urllib
import datetime
import os
import json
from django.db import transaction
import time
from django.db.models import Count



from django.views.decorators.csrf import csrf_exempt
from django.template.loader import get_template
from django.template import Context
from django.template import Context, Template
from django.http  import HttpResponse,Http404
from django.http import JsonResponse
from django.http import HttpResponse
from django.db import transaction
from .models import *
from .tasks import *
import fdb
import yaml
import json
import logging
import sys


logging.basicConfig(format = u'%(levelname)-8s [%(asctime)s] %(message)s', level = logging.DEBUG, filename = '/home/fssp.log')

from lxml import etree
# Create your views here.
bd=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
f=open (os.path.join (bd,'../fssp_views_settings/inventory.yml'))
#f2=open (os.path.join (bd,'../fssp.log'), 'w')
db_config=yaml.load(f)
f.close()
def osp_list (request):
    p = Osp.objects
    a = p.values()
    t = get_template('osp.html')
    html = t.render(context={'items':a}, request=None)
    return HttpResponse(html)
def index (request):
    p = Vitrina.objects.all()
    #a = p.values()
    
    t = get_template('front/build/index.html')
    html = t.render(context={'bd':bd,'items':p,'date_now':str(datetime.datetime.now() )}, request=None)
    return HttpResponse(html)

def swagger_file (request):
    response = HttpResponse(content_type='text/yaml')
    response['Content-Disposition'] = 'attachment; filename="swagger.yaml"'
    
    t = get_template('swagger/build/swagger.yaml' )
    html = t.render(context={}, request=None)
    c = {}
    response.write(t.render(c))
    return response    
def swagger (request):
    p = Vitrina.objects.all()
    #a = p.values()
    
    t = get_template('swagger/build/index.html' )
    html = t.render(context={'bd':bd,'items':p,'date_now':str(datetime.datetime.now() )}, request=None)
    return HttpResponse(html)
    
  #calc_view.apply_async((1,1))
def api2(request,method=None,method2=None):
    logging.info('method:'+str(request.method))
    logging.info('dir:'+str(dir(request )  ))
    logging.info ('body:'+ str (request.body) )
    logging.info ('COOKIES:'+ str (request.COOKIES) )
    logging.info ('META:'+ str (request.META) )
    
    
    logging.info(str(request.GET))
    logging.info(str(request.POST))
    if request.method=='POST' and method=='vitrina' and method2=='calc':
        #calc_view(1,1)
        calc_view.apply_async((1,1))
    if request.method=='POST' and method=='filter' and method2=='category_add':
        j=json.loads(request.body)
        p=FsspFilterCat (name=j['name'])
       
        p.save()
        #csrf_token = django.middleware.csrf.get_token()
        logging.info(str(j))
        return JsonResponse({'rez':  j})
    if method=='filter' and method2=='category':
        p=FsspFilterCat.objects.all()
        l=[]
        for item in  p.values ():
            l.append(item) 
        j=  {'rez':l}  
    if method=='filter' and method2=='get':
        bd=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        ld= os.listdir(os.path.join (bd,'filters')  ) 
        l=[]
        for item in ld:
            dd={}
            f=open (os.path.join (bd,'filters',item  ))
            xml=etree.parse(f)
            f.close()
            root=xml.getroot()
            for k,v in root.attrib.items:
                dd[k]=v
            dd['file_name']=item
            l.append(dd)
        j=  {'rez':l} 
    if method=='vitrina' and method2=='field':
        id=request.GET.get('vitrina_id',1)
        p=VitrinaField.objects.filter(vitrina_id=id)
        l=[]
        for item in  p.values ():
            l.append(item) 
        j=  {'rez':l}  
        
    
    if method=='vitrina' and method2=='counter':
        id=request.GET.get('vitrina_id',1)
        p=VitrinaCounter.objects.filter(vitrina_id=id)
        l=[]
        for item in  p.values ():
            l.append(item) 
        j=  {'rez':l}  
    return JsonResponse(j)
def api(request,method=None):
    
    #method=callback_kwargs.get('method','')
    if method=='vitrina':
        id=request.GET.get('vitrina_id',1)
        spi_id=request.GET.get('spi_id','0')
        counter_id=request.GET.get('counter_id',1)
        #p=VitrinaValue.objects.filter(vitrina_id=id)
        sql='select spi from fssp_mon_vitrinavalue where osp_id=1 and vitrina_id=1 group by spi'
        #spi_list=VitrinaValue.objects.raw(sql)
        l=[]
        #result = VitrinaValue.objects.values('spi').order_by('spi').annotate(count=Count('spi'))
        p=VitrinaCounter.objects.filter(id=counter_id)
        j=p[0].exp
        dd=json.loads(j)
        p2=VitrinaValue.objects.filter(vitrina_id=id ).filter(**dd)
        logging.info('ERR '+str(spi_id) +str(spi_id=='1')+str( type (spi_id) ))
        if (spi_id=='1'):
            r=p2.values('spi').order_by('spi').annotate(count=Count('spi'))
        else:
            r=p2.values('osp').order_by('osp').annotate(count=Count('osp'))
        #c=p2.count()
      #  l.append({'osp':'Урупский РОСП','col1':item['count'],'col2':item['spi'] } ) 
        logging.info(str(r))
        for item in  r :
            
            if (spi_id=='0'):
                #osp='1'
                osp=Osp.objects.filter(id=item['osp'])[0].full_name
                l.append({'osp':osp,'col1':item['count']} ) 
            else:
                osp='1'
                #osp=Osp.objects.filter(id=item['osp'])[0].full_name
                l.append({'osp': osp,'col1':item['count'],'col2':item['spi'] } )
        j=  {'rez':l}  
    return JsonResponse(j)
    
 
def osp(request):

    par=request.GET
    id= int(par.get('vitrina_id',default='1') )
    t = get_template('index.html')
    p=VitrinaValue.objects.filter(vitrina_id=id)
    p2 = VitrinaField.objects.filter(vitrina_id=id)
    if len (p2)>0:
        p2=p2[0]

    filter_name='Новая витрина, зайдите позже'
    date_actual=''
    if len(p)>0:
        filter_name=p[0].vitrina.name
        date_actual=p[0].vitrina.date_actual
    #html=f=open (os.path.join (bd,'/front/bild/index.html'))
    html = t.render(context={'cols':p2, 'items': p,'filter_name':filter_name,'date_actual': date_actual }, request=None)
    return HttpResponse(html)


def testpar(j):
    par = ['secret', 'method']
    rez = True
    err_mess = ''
    for k in par:
        if k in j.keys():
            pass
        else:
            rez=False
            err_mess=err_mess+k+' not found;'
    if rez :
        if j['secret']==db_config['secret']:
            pass
        else:
            rez=False
            err_mess=err_mess+  'Hash not valid;'
    return rez,err_mess
def rotate_field (val):
    vv={}
    vv2={}
    i=1
    for row in val:
        vv['col'+str(i)] = str(row[1])
        vv2['col' + str(i)] = str(row[0])
        i=i+1
    for i in range(15):
        if  vv.get('col'+str(i+1) )==None:
            vv['col'+str(i+1)]=None
        if vv2.get('col' + str(i + 1)) == None:
            vv2['col' + str(i + 1)] = None

    return vv,vv2

@csrf_exempt    

@csrf_exempt
def webhook(request):
    html='not Allow'
    if request.method == "POST":
        par = request.POST



        err_mess = ''
        rez, err_mess = testpar(par)
        if rez:
            #v=[]
            #v.append(  Vitrina.objects.get(id=4))
            v=Vitrina.objects.all()
            for item in v:
                osp=Osp.objects.values()
                obj = item
                sql_text = item.filter.sql_text
                if item.calc_field_name:
                    item2=osp[0]
                    try:
                        con = fdb.connect(host=item2['host'], database=item2['data_base'], user='SYSDBA', password=item2['password'], charset='WIN1251')
                    except:
                        pass
                    else:
                        cur = con.cursor()
                        cur.execute(sql_text)
                        r = cur.fetchall()
                        rr,vv2 = rotate_field(r)
                        con.close()
                        try:
                            obj2=VitrinaField.objects.get(vitrina_id=item.id)
                            for key,value in vv2.items():
                                setattr(obj2,key,value)
                            obj2.save()
                        except:
                            new_values=vv2
                            new_values['vitrina_id'] = item.id
                            obj2=VitrinaField(**new_values)
                            obj2.save()

                setattr(obj, 'date_actual', str(datetime.datetime.now() ))
                obj.save()

                #flt[0]['sql_text']

                for item2 in osp:
                    try:
                        con = fdb.connect(host=item2['host'], database=item2['data_base'], user='SYSDBA', password=item2['password'], charset='WIN1251')
                    except:
                        pass
                    else:
                        cur=con.cursor()
                        if not item.custom_fields:
                            cur.execute(sql_text)
                            r=cur.fetchall()
                            rr,rr2=rotate_field(r)


                        elif item.custom_fields:
                            rr={}

                            custf =VitrinaCustom.objects.filter(vitrina_id=item.id)

                            for item3 in custf:
                                sql_text=item3.filter.sql_text
                                cur.execute(sql_text)
                                r = cur.fetchall()
                                if len (r)>0:
                                   rr[item3.col_number]=r[0][0]
                                else:
                                    rr[item3.col_number] = None
                                for i in range(15):
                                    if rr.get('col' + str(i + 1)) == None:
                                        rr['col' + str(i + 1)] = None

                        con.close()

                        try:
                            obj=VitrinaValue.objects.get(osp_id=item2['id'],vitrina_id=item.id)
                            for key,value in rr.items():
                                setattr(obj,key,value)
                            obj.save()
                        except:
                            new_values=rr
                            new_values['osp_id']=item2['id']
                            new_values['vitrina_id'] = item.id
                            obj=VitrinaValue(**new_values)
                            obj.save()

    mes=''
        #mes = request.body.decode('UTF8')
        #j = json.loads(mes)

    html = str(rez)+';'+ mes
    return  HttpResponse(html)




    #html =str(r)

    #html=str(a['sql_text'])
    #t = get_template('main.html')
    #html = t.render(context={'col_names':col_names, 'vals':vals,'filter_name':filter_name,'category': category}, request=None)
    #t.render(context={}, request=None)
    #return HttpResponse(html)
