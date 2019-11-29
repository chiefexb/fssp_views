from django.db import models
import datetime
#from . import forms

# Create your models here.


class Osp (models.Model):
    full_name = models.CharField(max_length=1000,null='False', blank='False', verbose_name='название')
    short_name = models.CharField(max_length=1000,null='False', blank='False', verbose_name='название')
    host = models.CharField(max_length=1000, null='False', blank='False', verbose_name='название')
    data_base = models.CharField(max_length=1000, null='False', blank='False', verbose_name='название')
    password = models.CharField(max_length=32,null='False', blank='False')

    def __str__(self):
        return self.full_name


class Vitrina (models.Model):
    #osp = models.ForeignKey('Osp', on_delete=models.CASCADE)
    filter = models.ForeignKey('FsspFilter', on_delete=models.CASCADE)
    date_actual=models.DateTimeField(null='False',default= datetime.datetime(2019, 11, 26, 14, 22, 40, 267301))
    calc_field_name= models.BooleanField (null='False',default=True)
    def __str__(self):
        return self.filter.name


class VitrinaValue (models.Model):
    osp = models.ForeignKey('Osp', on_delete=models.CASCADE)
    vitrina = models.ForeignKey('Vitrina', on_delete=models.CASCADE)
    col1 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col2 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col3 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col4 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col5 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col6 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col7 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col8 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col9 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col10 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col11 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col12 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col13 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col14 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col15 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    def __str__(self):
        return self.osp.full_name+':'+ self.vitrina.__str__()

class VitrinaField (models.Model):
    vitrina = models.ForeignKey('Vitrina', on_delete=models.CASCADE)
    col1 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col2 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col3 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col4 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col5 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col6 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col7 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col8 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col9 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col10 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col11 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col12 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col13 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col14 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col15 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')


class FsspFilterCat (models.Model):
    name = models.CharField(max_length=1000,null='False', blank='False', verbose_name='название')

    def __str__(self):
        return self.name
class FsspFilter (models.Model):
    name = models.CharField(max_length=1000, null='False', blank='False', verbose_name='название')
    sql_text = models.TextField(null='False', blank='False', verbose_name='Тело запроса')
    category = models.ForeignKey('FsspFilterCat', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
