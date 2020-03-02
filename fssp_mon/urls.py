from django.conf.urls import url,include
from django.urls import  path,re_path

from fssp_mon.models import VitrinaValue, VitrinaField
from rest_framework import routers, serializers, viewsets
from . import views
from fssp_mon.views import  *

class VitrinaValueSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = VitrinaValue
        fields = ['vitrina','col1', 'col2', 'col3', 'col4']

# ViewSets define the view behavior.
class VitrinaValueViewSet(viewsets.ModelViewSet):
    queryset = VitrinaValue.objects.all()
    serializer_class = VitrinaValueSerializer
    vitrina_id = self.kwargs['vitrina_id']
        return VitrinaValue.objects.filter(vitrina_id=vitrina_id)
    
class VitrinaFieldSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = VitrinaField
        fields = ['col1', 'col2', 'col3', 'col4']

# ViewSets define the view behavior.
class VitrinaFieldViewSet(viewsets.ModelViewSet):
    queryset = VitrinaField.objects.all()
    serializer_class = VitrinaFieldSerializer    

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'vitrinavalue', VitrinaValueViewSet)
router.register(r'vitrinafield', VitrinaFieldViewSet)
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = [
    url(r'^api', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path("", views.index, name='index'),
    path("osp", views.osp, name='osp'),
    path("webhook", views.webhook, name='webhook'),
    path("osp2", views.osp_list, name='osp_list'),
    

   
]




