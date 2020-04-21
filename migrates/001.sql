alter table fssp_mon_osp add osp_id integer not null;
alter table fssp_mon_vitrinavalue add col23 DECIMAL(15,2);
alter table fssp_mon_vitrinavalue add col24 DECIMAL(15,2);
alter table fssp_mon_vitrinavalue add col25 FLOAT;
alter table fssp_mon_vitrinavalue add col26 FLOAT;
alter table fssp_mon_vitrinavalue add col27 FLOAT;
alter table fssp_mon_vitrinavalue add col28 integer;
alter table fssp_mon_vitrinavalue add col29 integer;



alter table fssp_mon_vitrina add vitrina_id integer not null;
drop table fssp_mon_vitrinafield;
drop table fssp_mon_vitrinafieldmap;
drop table fssp_mon_vitrinacounter;
