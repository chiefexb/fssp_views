# Create your tasks here
from __future__ import absolute_import, unicode_literals
from .models import *
import fdb
import logging

from celery import shared_task
#from demoapp.models import Widget
logging.basicConfig(format = u'%(levelname)-8s [%(asctime)s] %(message)s', level = logging.DEBUG, filename = '/home/task.log')


@shared_task
def add(x, y):
    return x + y
    
@shared_task
def calc_view(vitrina_id,osp_id):
     v=Vitrina.objects.filter(id=vitrina_id)
     osp=Osp.objects.filter(id=osp_id)
     item2=osp[0]
     sql_text = v[0].filter.sql_text
     con = fdb.connect(host=item2.host, database=item2.data_base], user='SYSDBA', password=item2.password, charset='WIN1251',port=3050)
     cur=con.cursor()
     cur.execute(sql_text)
     r=cur.fetchone()
     return   str(r)             
    #calc field
    
    
    
        
