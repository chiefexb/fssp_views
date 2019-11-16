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
# Create your views here.
#f=open('/home/chief9/project/fssp_views_settings/inventory.yml')
#db_config=yaml.load(f)
#f.close()
def index (request):
    p = Fssp_filter.objects
    a = p.values()
    t = get_template('main_i.html')
    html = t.render(context={'items':a}, request=None)
    return HttpResponse(html)
def osp (request):
    par=request.GET
    id= int(par.get('filter_id',default='1') )
    #t = get_template('main_i.html')
    #p=Fssp_filter.objects.all()
    p = Fssp_filter.objects.all()
    p2 = Fssp_filter_cat.objects.all()
    a = p.values()[id-1]
    sql=a['sql_text']
    category_id=a['category_id']
    category= p2.values()[category_id-1]['name']
    # p = Task.objects
    # a = p.values_list()
    # p2 = Task.objects.all()
    filter_name=a['name']
    con = fdb.connect(host='localhost', database='fssp', user='SYSDBA', password='123456', charset='WIN1251')
    cur=con.cursor()
    cur.execute(sql)
    r=cur.fetchall()
    con.close()
    col_names = []
    vals=[]
    for col_name, val in r:
            col_names.append(col_name)
            vals.append(val)







    #html =str(r)

    #html=str(a['sql_text'])
    t = get_template('main.html')
    html = t.render(context={'col_names':col_names, 'vals':vals,'filter_name':filter_name,'category': category}, request=None)
    #t.render(context={}, request=None)
    return HttpResponse(html)
