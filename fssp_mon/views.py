from django.shortcuts import render
import urllib
import datetime



from django.views.decorators.csrf import csrf_exempt
from django.template.loader import get_template
from django.template import Context
from django.template import Context, Template
from django.http  import HttpResponse,Http404
from django.http import JsonResponse
from django.http import HttpResponse
from django.db import transaction
from .models import *
import fdb
import yaml
import json
# Create your views here.
f=open('/home/chief9/project/fssp_views_settings/inventory.yml')
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
    t = get_template('main_i.html')
    html = t.render(context={'items':p,'date_now':str(datetime.datetime.now() )}, request=None)
    return HttpResponse(html)


def osp(request):

    par=request.GET
    id= int(par.get('vitrina_id',default='1') )
    t = get_template('main.html')
    p=VitrinaValue.objects.filter(vitrina_id=id)
    filter_name='Новая витрина, зайдите позже'
    date_actual=''
    if len(p)>0:
        filter_name=p[0].vitrina.filter
        date_actual=p[0].vitrina.date_actual

    html = t.render(context={'items': p,'filter_name':filter_name,'date_actual': date_actual }, request=None)
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
    i=1
    for row in val:
        vv['col'+str(i)] = str(row[1])
        i=i+1
    for i in range(15):
        if  vv.get('col'+str(i+1) )==None:
            vv['col'+str(i+1)]=None
    return vv

@csrf_exempt
def webhook(request):
    html='not Allow'
    if request.method == "POST":
        par = request.POST



        err_mess = ''
        rez, err_mess = testpar(par)
        if rez:
            v = Vitrina.objects.all()

            for item in v:
                osp=Osp.objects.values()
                obj = item

                setattr(obj, 'date_actual', str(datetime.datetime.now() ))
                obj.save()
                sql_text = item.filter.sql_text
                #flt[0]['sql_text']
                for item2 in osp:
                    try:
                        con = fdb.connect(host=item2['host'], database=item2['data_base'], user='SYSDBA', password=item2['password'], charset='WIN1251')
                    except:
                        pass
                    else:
                        cur=con.cursor()
                        cur.execute(sql_text)
                        r=cur.fetchall()
                        rr=rotate_field(r)
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
