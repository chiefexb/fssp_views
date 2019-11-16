"""
WSGI config for fssp_v project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
import os
import os
import sys
import site
path2 = '/home/chief9/project/fssp_views'
path3 = '/home/chief9/project/fssp_views/fssp_v'
path4 = '/home/chief9/project/fssp_views/venv/lib/python3.6/site-packages'
sys.path.append(path2)
sys.path.append(path3)
sys.path.append(path4)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'fssp_v.settings')

application = get_wsgi_application()
