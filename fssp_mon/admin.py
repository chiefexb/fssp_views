from django.contrib import admin
from .forms import *



# Register your models here.

from .models import *


class OspAdmin(admin.ModelAdmin):
    form = OspForm

admin.site.register(Vitrina)
admin.site.register(VitrinaField)
admin.site.register(VitrinaValue)
admin.site.register(Osp, OspAdmin)
admin.site.register(FsspFilterCat)
admin.site.register(FsspFilter)
admin.site.register(VitrinaCustom)
admin.site.register(VitrinaFieldMap)



