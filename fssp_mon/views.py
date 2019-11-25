from django.shortcuts import render
import urllib
from django.views.decorators.csrf import csrf_exempt
from django.template.loader import get_template
from django.template import Context
from django.template import Context, Template
from django.http  import HttpResponse,Http404
from django.http import JsonResponse
from django.http import HttpResponse
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
    p = Fssp_filter.objects
    a = p.values()
    t = get_template('main_i.html')
    html = t.render(context={'items':a}, request=None)
    return HttpResponse(html)
def osp_update (request):
    par=request.GET
    id= int(par.get('filter_id',default='1') )
    #t = get_template('main_i.html')
    #p=Fssp_filter.objects.all()
    #p = Fssp_filter.objects.all()
    #p2 = Fssp_filter_cat.objects.all()
    #a = p.values()[id-1]
    #sql=a['sql_text']
    #category_id=a['category_id']
    #category= p2.values()[category_id-1]['name']
    # p = Task.objects
    # a = p.values_list()
    # p2 = Task.objects.all()
    #filter_name=a['name']
    #con = fdb.connect(host='localhost', database='fssp', user='SYSDBA', password='123456', charset='WIN1251')
    #cur=con.cursor()
    #cur.execute(sql)
    #r=cur.fetchall()
    #con.close()
    #col_names = []
    #vals=[]
    #for col_name, val in r:
    #        col_names.append(col_name)
    #        vals.append(val)


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

@csrf_exempt
def webhook(request):
    html='not Allow'
    if request.method == "POST":
        par = request.POST
        #mes=str(par.keys())
        #f = open('/home/chief9/project/1.log', 'w')
        #f.write(str(request.body))
        #f.write(str(request.keys() ) )

        #f.close()

        #j = json.loads(mes)
        err_mess = ''
        rez, err_mess = testpar(par)
        if rez:
            v = Vitrina.objects.values()
            item = v[0]
            flt=(FsspFilter.objects.filter(id=item['id'])).values()
            osp=Osp.objects.values()
            item2=osp[0]
            sql_text = flt[0]['sql_text']

            con = fdb.connect(host=item2['host'], database=item2['data_base'], user='SYSDBA', password=item2['password'], charset='WIN1251')
            cur=con.cursor()
            cur.execute(sql_text)
            r=cur.fetchall()
            con.close()
            #p2 = Task.objects.all()

            mes=str(r )
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
