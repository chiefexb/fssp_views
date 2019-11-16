from django.db import models

# Create your models here.

class Fssp_filter_cat (models.Model):
    name = models.CharField(max_length=1000,null='False', blank='False', verbose_name='название')

class Fssp_filter (models.Model):
    name = models.CharField(max_length=1000, null='False', blank='False', verbose_name='название')
    sql_text = models.TextField(null='False', blank='False', verbose_name='Тело запроса')
    category = models.ForeignKey('fssp_filter_cat', on_delete=models.CASCADE)

