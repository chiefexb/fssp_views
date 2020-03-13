import os
from django.db.models import Count
from django.views.decorators.csrf import csrf_exempt
from django.template.loader import get_template
from django.http import JsonResponse
from django.http import HttpResponse
from .models import *
from .tasks import *
import fdb
import yaml
import json
import logging
import sys
from lxml import etree

logging.basicConfig(format=u'%(levelname)-8s [%(asctime)s] %(message)s', level=logging.DEBUG, filename='/home/fssp.log')

# Create your views here.
bd = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
f = open(os.path.join(bd, '../fssp_views_settings/inventory.yml'))

# f2=open (os.path.join (bd,'../fssp.log'), 'w')
db_config = yaml.load(f)
f.close()





def index(request):
    p = Vitrina.objects.all()
    # a = p.values()

    t = get_template('front/build/index.html')
    html = t.render(context={'bd': bd, 'items': p, 'date_now': str(datetime.datetime.now())}, request=None)
    return HttpResponse(html)


def swagger_file(request):
    response = HttpResponse(content_type='text/yaml')
    response['Content-Disposition'] = 'attachment; filename="swagger.yaml"'

    t = get_template('swagger/build/swagger.yaml')
    html = t.render(context={}, request=None)
    c = {}
    response.write(t.render(c))
    return response


def swagger(request):
    p = Vitrina.objects.all()
    # a = p.values()

    t = get_template('swagger/build/index.html')
    html = t.render(context={'bd': bd, 'items': p, 'date_now': str(datetime.datetime.now())}, request=None)
    return HttpResponse(html)


# calc_view.apply_async((1,1))
def api2(request, method=None, method2=None):
    logging.info('method:' + str(request.method))
    logging.info('dir:' + str(dir(request)))
    logging.info('body:' + str(request.body))
    logging.info('COOKIES:' + str(request.COOKIES))
    logging.info('META:' + str(request.META))

    logging.info(str(request.GET))
    logging.info(str(request.POST))

    if request.method == 'POST' and method == 'vitrina' and method2 == 'calc':
        # calc_view(1,1)
        for o in Osp.objects.all():
            calc_view.apply_async((1, o.id))
        # calc_view.apply_async((1,2))

    if request.method == 'POST' and method == 'filter' and method2 == 'category_add':
        j = json.loads(request.body)
        p = FsspFilterCat(name=j['name'])

        p.save()
        # csrf_token = django.middleware.csrf.get_token()
        logging.info(str(j))
        return JsonResponse({'rez': j})

    if method == 'filter' and method2 == 'category':
        p = FsspFilterCat.objects.all()
        l = []
        for item in p.values():
            l.append(item)
        j = {'rez': l}

    if method == 'filter' and method2 == 'get':
        bd = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        ld = os.listdir(os.path.join(bd, 'filters'))
        l = []
        for item in ld:
            dd = {}
            f = open(os.path.join(bd, 'filters', item))
            xml = etree.parse(f)
            f.close()
            root = xml.getroot()
            for k, v in root.attrib.items:
                dd[k] = v
            dd['file_name'] = item
            l.append(dd)
        j = {'rez': l}

    if method == 'vitrina' and method2 == 'field':
        id = request.GET.get('vitrina_id', 1)
        p = VitrinaField.objects.filter(vitrina_id=id)
        l = []
        for item in p.values():
            l.append(item)
        j = {'rez': l}

    if method == 'vitrina' and method2 == 'counter':
        id = request.GET.get('vitrina_id', 1)
        p = VitrinaCounter.objects.filter(vitrina_id=id)
        l = []
        for item in p.values():
            l.append(item)
        j = {'rez': l}
    return JsonResponse(j)


def api(request, method=None):
    # method=callback_kwargs.get('method','')
    if method == 'vitrina':
        id = request.GET.get('vitrina_id', 1)
        spi_id = request.GET.get('spi_id', '0')
        counter_id = request.GET.get('counter_id', 1)
        # p=VitrinaValue.objects.filter(vitrina_id=id)
        # sql = 'select spi from fssp_mon_vitrinavalue where osp_id=1 and vitrina_id=1 group by spi'
        # spi_list=VitrinaValue.objects.raw(sql)

        l = []

        # result = VitrinaValue.objects.values('spi').order_by('spi').annotate(count=Count('spi'))

        p = VitrinaCounter.objects.filter(id=counter_id)
        j = p[0].exp
        dd = json.loads(j)
        p2 = VitrinaValue.objects.filter(vitrina_id=id).filter(**dd)
        logging.info('ERR ' + str(spi_id) + str(spi_id == '1') + str(type(spi_id)))

        if spi_id == '1':
            # r=p2.values('spi').order_by('spi').annotate(count=Count('spi'))
            r = p2.values('spi', 'osp_id').order_by('osp_id', 'spi').annotate(count=Count('spi'))
        else:
            r = p2.values('osp').order_by('osp').annotate(count=Count('osp'))
        # c=p2.count()
        #  l.append({'osp':'Урупский РОСП','col1':item['count'],'col2':item['spi'] } )
        logging.info(str(r))
        for item in r:

            if spi_id == '0':
                # osp='1'
                osp = Osp.objects.filter(id=item['osp'])[0].full_name
                l.append({'osp': osp, 'col1': item['count']})
            else:
                # osp='1'
                osp = Osp.objects.filter(id=item['osp_id'])[0].full_name
                l.append({'osp': osp, 'col1': item['count'], 'col2': item['spi']})
        j = {'rez': l}
    return JsonResponse(j)




