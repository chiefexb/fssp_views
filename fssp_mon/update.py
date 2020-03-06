import requests
import json
import yaml
import os
import time


bd=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
f=open(os.path.join( bd,'../fssp_views_settings/inventory.yml'))
db_config=yaml.load(f)
f.close()
while true:
    r=requests.post('http://localhost/worker', data={'secret': db_config['secret'],'method':'update' }  )
    #r=requests.post('http://localhost/webhook', data={'secret': db_config['secret'],'method':'update' }  )
    print (str(r.text) )
    print ("Start : %s" % time.ctime())
    time.sleep( 60 )
    print ("End : %s" % time.ctime() )
    f = open('./1.html','w')
    f.write(str(r.text) )
    f.close()

