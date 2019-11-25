import requests
import json
import yaml
import os
f=open('/home/chief9/project/fssp_views_settings/inventory.yml')
db_config=yaml.load(f)
f.close()
r=requests.post('http://localhost/webhook', data={'secret': db_config['secret'],'method':'update' }  )
print (str(r.text) )
f = open('./1.html','w')
f.write(str(r.text) )
f.close()

