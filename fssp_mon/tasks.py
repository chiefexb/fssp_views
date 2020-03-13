# Create your tasks here
from __future__ import absolute_import, unicode_literals
from .models import *
import fdb
import logging

from celery import shared_task

# from demoapp.models import Widget
logging.basicConfig(format=u'%(levelname)-8s [%(asctime)s] %(message)s', level=logging.DEBUG, filename='/home/task.log')


@shared_task
def calc_view(vitrina_id, osp_id):
    v = Vitrina.objects.filter(id=vitrina_id)
    osp = Osp.objects.filter(id=osp_id)
    item2 = osp[0]
    vmap = VitrinaFieldMap.objects.filter(id=vitrina_id).values()[0]
    vmap.pop('id')
    vmap.pop('vitrina_id')
    # sql = 'select col1,count(*) from fssp_mon_vitrinavalue group_by col1'
    sql_text = v[0].filter.sql_text
    con = fdb.connect(host=item2.host, database=item2.data_base, user='SYSDBA', password=item2.password,
                      charset='WIN1251', port=3050)
    cur = con.cursor()
    cur.execute(sql_text)
    r = cur.fetchall()
    VitrinaValue.objects.filter(vitrina_id=vitrina_id, osp_id=osp_id).delete()
    # obj=VitrinaValue.objects.all().delete()

    for row in r:
        new_values = {}
        i = 0
        for col in row:
            i = i + 1
            new_values[vmap['col' + str(i)]] = col
        new_values['osp_id'] = osp_id
        new_values['vitrina_id'] = vitrina_id
        obj = VitrinaValue(**new_values)
        obj.save()
    con.close()

    return str(vmap)
    # calc field
