
import fdb
hostname='127.0.0.1'
database= 'mvv'
#'fssp'
username='SYSDBA'
password= 'masterkey'#'x9L#P2w&Xd'
port='3057'
concodepage='WIN1251'
con = fdb.connect (host=hostname, database=database, user=username, password=password,charset=concodepage)
cur=con.cursor()
