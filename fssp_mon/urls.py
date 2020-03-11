from django.conf.urls import url,include
from django.urls import  path,re_path

from fssp_mon.models import VitrinaValue, VitrinaField
from rest_framework import routers, serializers, viewsets
from . import views
from fssp_mon.views import  *

urlpatterns = [
   
    path("", views.index, name='index'),
    path("osp", views.osp, name='osp'),
    path("api/<method>", views.api, name='api'),
      path("api/<method>/<method2>", views.api2, name='api2'),
     
    path("api/", views.swagger, name='api2'),
     path("swagger.yaml", views.swagger_file, name='swagger.yaml'),
    
    path("webhook", views.webhook, name='webhook'),
    
    path("osp2", views.osp_list, name='osp_list'),
    

   
]




