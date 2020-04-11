<?php
$vitr4=" INSERT INTO fssp_mon_vitrinavalue (vitrina_id, osp_id,spi, col1, data_vozb, data_okon) VALUES ";

$vitrina4="select  IP_EXEC_PRIST_NAME,  d.metaobjectname, d.doc_date from o_ip oip
    join document d on oip.id = d.id and d.docstatusid not in (-1, 1, 5)
        where (d.metaobjectname like 'O_IP_ACT_%') or (d.metaobjectname = 'O_IP_RES_REOPEN') ";

$vitr3=" INSERT INTO fssp_mon_vitrinavalue (vitrina_id, osp_id,spi, col2,col3,col4,data_vozb,data_okon) VALUES ";


$vitrina3="select
 DOC_IP.IP_EXEC_PRIST_NAME,
 doc_ip.article, 
 doc_ip.point ,
 doc_ip.subpoint ,
 doc_ip.ip_risedate ,
 doc_ip.ip_date_finish
 from doc_ip join doc_ip_doc on doc_ip_doc.id=doc_ip.id           join document on document.id=doc_ip.id";

$vitrina2="select 

doc_ip.article s,
 doc_ip.point p,
 doc_ip.subpoint pp,
 count(*) k
from doc_ip join doc_ip_doc on doc_ip_doc.id=doc_ip.id
            join document on document.id=doc_ip.id

 group by 1,2,3";
$vitrina1="select 
		*
		from
		(
		select 'all_v' as inf, count(DOC_IP.IP_EXEC_PRIST_NAME) as f_col
		from doc_ip join doc_ip_doc on doc_ip_doc.id=doc_ip.id
					join document on document.id=doc_ip.id
		where doc_ip.ip_risedate>=current_date 
		union all
		select 'all' as inf, count(DOC_IP.IP_EXEC_PRIST_NAME) as f_col
		from doc_ip join doc_ip_doc on doc_ip_doc.id=doc_ip.id
					join document on document.id=doc_ip.id
		where doc_ip.ip_date_finish>=current_date
		union all
		select '47_1_1' as inf,count(DOC_IP.IP_EXEC_PRIST_NAME) as f_col
		from doc_ip join doc_ip_doc on doc_ip_doc.id=doc_ip.id
					join document on document.id=doc_ip.id
		where doc_ip.ip_date_finish>=current_date and doc_ip.article='47' and doc_ip.point='1' and doc_ip.subpoint='1'
		union all
		select '47_1_2', count(DOC_IP.IP_EXEC_PRIST_NAME) as f_col
		from doc_ip join doc_ip_doc on doc_ip_doc.id=doc_ip.id
					join document on document.id=doc_ip.id
		where doc_ip.ip_date_finish>=current_date and doc_ip.article='47' and doc_ip.point='1' and doc_ip.subpoint='2'
		union all
		select '47_1_8',count(DOC_IP.IP_EXEC_PRIST_NAME) as f_col
		from doc_ip join doc_ip_doc on doc_ip_doc.id=doc_ip.id
					join document on document.id=doc_ip.id
		where doc_ip.ip_date_finish>=current_date and doc_ip.article='47' and doc_ip.point='1' and doc_ip.subpoint='8'
		union all
		select '47_1_9',count(DOC_IP.IP_EXEC_PRIST_NAME) as f_col
		from doc_ip join doc_ip_doc on doc_ip_doc.id=doc_ip.id
					join document on document.id=doc_ip.id
		where doc_ip.ip_date_finish>=current_date and doc_ip.article='47' and doc_ip.point='1' and doc_ip.subpoint='9'
		union all
		select '46_1_1',count(DOC_IP.IP_EXEC_PRIST_NAME) as f_col
		from doc_ip join doc_ip_doc on doc_ip_doc.id=doc_ip.id
					join document on document.id=doc_ip.id
		where doc_ip.ip_date_finish>=current_date and doc_ip.article='46' and doc_ip.point='1' and doc_ip.subpoint='1'
		union all
		select '46_1_3',count(DOC_IP.IP_EXEC_PRIST_NAME) as f_col
		from doc_ip join doc_ip_doc on doc_ip_doc.id=doc_ip.id
					join document on document.id=doc_ip.id
		where doc_ip.ip_date_finish>=current_date and doc_ip.article='46' and doc_ip.point='1' and doc_ip.subpoint='3'
		union all
		select '46_1_4',count(DOC_IP.IP_EXEC_PRIST_NAME) as f_col
		from doc_ip join doc_ip_doc on doc_ip_doc.id=doc_ip.id
					join document on document.id=doc_ip.id
		where doc_ip.ip_date_finish>=current_date and doc_ip.article='46' and doc_ip.point='1' and doc_ip.subpoint='4'
		union all
		select '43_1_1',count(DOC_IP.IP_EXEC_PRIST_NAME) as f_col
		from doc_ip join doc_ip_doc on doc_ip_doc.id=doc_ip.id
					join document on document.id=doc_ip.id
		where doc_ip.ip_date_finish>=current_date and doc_ip.article='43' and doc_ip.point='1' and doc_ip.subpoint='1'
		union all
		select '103_1_1',count(DOC_IP.IP_EXEC_PRIST_NAME) as f_col
		from doc_ip join doc_ip_doc on doc_ip_doc.id=doc_ip.id
					join document on document.id=doc_ip.id
		where doc_ip.ip_date_finish>=current_date and doc_ip.article='103' and doc_ip.point='1' and doc_ip.subpoint='1'
		union all
		select '31_1_2',count(DOC_IP.IP_EXEC_PRIST_NAME) as f_col
		from doc_ip join doc_ip_doc on doc_ip_doc.id=doc_ip.id
					join document on document.id=doc_ip.id  
		where doc_ip.ip_date_finish>=current_date and doc_ip.article='31' and doc_ip.point='1' and doc_ip.subpoint='2'
";
//echo $vitrina1;
?>
