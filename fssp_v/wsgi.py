"""
WSGI config for fssp_v project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os
import yaml

from django.core.wsgi import get_wsgi_application
import os
import os
import sys
import site
bd=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
f=open (os.path.join (bd,'../fssp_views_settings/inventory.yml'))
db_config=yaml.load(f)
f.close()
path2 = bd
path3 = os.path.join(bd, 'fssp_v')
path4 = db_config['class_path']

sys.path.append(path2)
sys.path.append(path3)
sys.path.append(path4)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'fssp_v.settings')

application = get_wsgi_application()
