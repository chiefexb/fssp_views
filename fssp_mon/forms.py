#from django import forms
from django.forms import ModelForm, PasswordInput,CharField
from .models import *


class OspForm(ModelForm):
    full_name = CharField()
    short_name = CharField()
    host =   CharField()
    data_base =CharField()
    password = CharField(widget=PasswordInput)

    class Meta:
        model = Osp
        fields = ()