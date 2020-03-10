# Create your tasks here
from __future__ import absolute_import, unicode_literals

from celery import shared_task
from demoapp.models import Widget


@shared_task
def add(x, y):
    return x + y
