from django.conf.urls import url,include
from django.urls import  path,re_path

from . import views
from fssp_mon.views import  *
urlpatterns = [
    path("", views.index, name='index'),
    path("osp", views.osp, name='osp'),
    path("webhook", views.webhook, name='webhook'),
    path("osp2", views.osp_list, name='osp_list'),

   
]




