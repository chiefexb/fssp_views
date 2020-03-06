#!/usr/bin/python3
import requests
import json
import yaml
import os
import time
import sys


bd=sys.argv[2]
f=open (os.path.join( bd,'../fssp_views_settings/inventory.yml'))
db_config=yaml.load(f)
f.close()
pid = os.getpid() 
print (pid)
pid_path=sys.argv[1]
f=open(pid_path, 'w')
f.write(str(pid) )
f.close()

while True:
    
    r=requests.post('http://localhost/worker', data={'secret': db_config['secret'],'method':'update' }  )
    #r=requests.post('http://localhost/webhook', data={'secret': db_config['secret'],'method':'update' }  )
    print (str(r.text) )
    print ("Start : %s" % time.ctime())
    time.sleep( 60 )
    print ("End : %s" % time.ctime() )
    f = open('./1.html','w')
    f.write(str(r.text) )
    f.close()

