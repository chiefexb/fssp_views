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
    name = models.CharField(max_length=1000, null='False', default='vitrina',blank='False', verbose_name='название')

    #osp = models.ForeignKey('Osp', on_delete=models.CASCADE)
    filter = models.ForeignKey('FsspFilter', on_delete=models.CASCADE)
    date_actual= models.DateTimeField(null='False',default= datetime.datetime(2019, 11, 26, 14, 22, 40, 267301))
    calc_field_name= models.BooleanField (null='False',default=True)
    custom_fields = models.BooleanField(null='False', default=False)
    def __str__(self):
        return str(self.id)+':' +self.name +': '+self.filter.name


class VitrinaValue (models.Model):
    osp = models.ForeignKey('Osp', on_delete=models.CASCADE)
    vitrina = models.ForeignKey('Vitrina', on_delete=models.CASCADE)
    
    col1 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col1')
    col2 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col2')
    col3 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col3')
    col4 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col4')
    col5 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col5')
    col6 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col6')
    col7 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col7')
    col8 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col8')
    col9 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col9')
    col10 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col10')
    col11 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col11')
    col12 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col12')
    col13 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col13')
    col14 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col14')
    col15 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col15')
    col16 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col16')
    col17 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col17')
    col18 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col18')
    col19 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col19')
    col20 = models.CharField(max_length=1000, null='True', blank='True', verbose_name='Col20')
    col21 = models.DateTimeField(null='True')
    col22 = models.DateTimeField(null='True')
    spi = models.CharField(max_length=1000, null='True', blank='True')
    data_vozb = models.DateTimeField(null='True')
    data_okonch = models.DateTimeField(null='True')
    
    #property
    #def vitrina_id (self):
    #   return str(self.vitrina.id)

    def __str__(self):
        return self.osp.full_name+':'+ self.vitrina.__str__()


class VitrinaField (models.Model):
    vitrina = models.ForeignKey('Vitrina', on_delete=models.CASCADE)
    col1 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col1')
    col2 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col2')
    col3 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col3')
    col4 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col4')
    col5 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col5')
    col6 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col6')
    col7 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col7')
    col8 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col8')
    col9 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col9')
    col10 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col10')
    col11 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col11')
    col12 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col12')
    col13 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col13')
    col14 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col14')
    col15 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col15')
    col16 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col16')
    col17 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col17')
    col18 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col18')
    col19 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col19')
    col20 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col20')
    col21 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col21')
    col22 = models.CharField(max_length=200, null='True', blank='True', verbose_name='Col22')
    
    
    def __str__(self):
        return 'Fields '+self.vitrina.__str__()
        
class VitrinaFieldMap (models.Model):
    vitrina = models.ForeignKey('Vitrina', on_delete=models.CASCADE)
    COL_NUMBER_CHOICES=[
        ('none','none'),
        ('data_vozb','data_vozb'),
        ('data_okonch', 'data_okonch'),
        ('spi','spi')
        ('col1','col1'),
        ('col2', 'col2'),
        ('col3', 'col3'),
        ('col4', 'col4'),
        ('col5', 'col5'),
        ('col6', 'col6'),
        ('col7', 'col7'),
        ('col8', 'col8'),
        ('col9', 'col9'),
        ('col10', 'col10'),
        ('col11', 'col11'),
        ('col12', 'col12'),
        ('col13', 'col13'),
        ('col14', 'col14'),
        ('col15', 'col15'),
        ('col16', 'col16'),
        ('col17', 'col17'),
        ('col18', 'col18'),
        ('col19', 'col19'),
        ('col20', 'col20'),
        ('col21', 'col21'),
        ('col22', 'col22')
        ]
    col1=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col2=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col3=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col4=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col5=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col6=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    
    col7=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col8=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col9=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col10=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col11=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col12=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    
    col13=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col14=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col15=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col16=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col17=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col18=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col19=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col20=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col21=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    col22=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='none'
    )
    def __str__(self):
        return 'FieldsMap '+self.vitrina.__str__()



class VitrinaCustom (models.Model):
    COL_NUMBER_CHOICES=[
        ('col1','col1'),
        ('col2', 'col2'),
        ('col3', 'col3'),
        ('col4', 'col4'),
        ('col5', 'col5'),
        ('col6', 'col6'),
        ('col7', 'col7'),
        ('col8', 'col8'),
        ('col9', 'col9'),
        ('col10', 'col10'),
        ('col11', 'col11'),
        ('col12', 'col12'),
        ('col13', 'col13'),
        ('col14', 'col14'),
        ('col15', 'col15'),
        ('col16', 'col16'),
        ('col17', 'col17'),
        ('col18', 'col18'),
        ('col19', 'col19'),
        ('col20', 'col20'),
        ('col21', 'col21'),
        ('col22', 'col22')
        ]
    col_number=models.CharField(
        max_length=10,
        choices=COL_NUMBER_CHOICES,
        default='col1'
    )
    vitrina = models.ForeignKey('Vitrina', on_delete=models.CASCADE)
    filter  = models.ForeignKey('FsspFilter', on_delete=models.CASCADE)
    width = models.IntegerField(null='True')
class FsspFilterCat (models.Model):
    name = models.CharField(max_length=1000,null='False', blank='False', verbose_name='название')

    def __str__(self):
        return self.name
class FsspFilter (models.Model):
    name = models.CharField(max_length=1000, null='False', blank='False', verbose_name='название')
    sql_text = models.TextField(null='False', blank='False', verbose_name='Тело запроса')
    category = models.ForeignKey('FsspFilterCat', on_delete=models.CASCADE)

    def __str__(self):
        return self.category.name+':'+ self.name
