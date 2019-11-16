# Generated by Django 2.2.7 on 2019-11-15 15:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Fssp_filter_cat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank='False', max_length=1000, null='False', verbose_name='название')),
            ],
        ),
        migrations.CreateModel(
            name='Fssp_filter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank='False', max_length=1000, null='False', verbose_name='название')),
                ('sql_text', models.TextField(blank='False', null='False', verbose_name='Тело запроса')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fssp_mon.Fssp_filter_cat')),
            ],
        ),
    ]
