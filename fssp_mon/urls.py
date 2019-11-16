from django.conf.urls import url,include
from django.urls import  path,re_path

from . import views
from fssp_mon.views import  *
urlpatterns = [
    path("", views.index, name='index'),
    path("osp", views.osp, name='osp'),

   
]




