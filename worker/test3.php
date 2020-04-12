<?php
    $host = '62.109.7.133:fssp';
    $username='SYSDBA';
    $password='8aJu3#7Y3j';
    //echo $vitrina3;
    $charset='WIN1251';
    $dbh = ibase_connect($host, $username, $password, $charset);
    $stmt ="select (select full_name from fssp_mon_osp where id=vv.osp_id) as osp,'-' as col1, count(osp_id) as col2, SUM(CASE WHEN (col2='47' and col3='1' and col4='1' ) THEN 1 ELSE 0 END ) as col3, SUM(CASE WHEN (col2='47' and col3='1' and col4='2') THEN 1 ELSE 0 END ) as col4, SUM(CASE WHEN (col2='47' and col3='1' and col4='8') THEN 1 ELSE 0 END ) as col5, SUM(CASE WHEN (col2='47' and col3='1' and col4='9') THEN 1 ELSE 0 END ) as col6, SUM(CASE WHEN (col2='46' and col3='1' and col4='1') THEN 1 ELSE 0 END ) as col7, SUM(CASE WHEN (col2='46' and col3='1' and col4='3') THEN 1 ELSE 0 END ) as col8, SUM(CASE WHEN (col2='46' and col3='1' and col4='6') THEN 1 ELSE 0 END ) as col9, SUM(CASE WHEN (col2='43' and col3='1' and col4='1') THEN 1 ELSE 0 END ) as col10, SUM(CASE WHEN (col2='103' and col3='1' and col4='1') THEN 1 ELSE 0 END ) as col11, SUM(CASE WHEN (col2='31' and col3='1' and col4='2') THEN 1 ELSE 0 END ) as col12 from fssp_mon_vitrinavalue vv where vitrina_id=1 and data_vozb>='2018-01-01' and data_vozb<='2018-12-31' group by osp order by osp ";
//    $stmt = "select  IP_EXEC_PRIST_NAME, d.metaobjectname ,d.doc_date from o_ip oip
  //  join document d on oip.id = d.id and d.docstatusid not in (-1, 1, 5)
      
    //where (d.metaobjectname like 'O_IP_ACT_%') or (d.metaobjectname = 'O_IP_RES_REOPEN')";
    $sth = ibase_query($dbh,  $stmt);
    $onerow = ibase_fetch_row( $sth);
    //$row = ibase_fetch_assoc($sth);
    $count=0;
    while ($count<3) {
     $spi=iconv('windows-1251', 'UTF-8',$onerow[$count] );
     
     $count++;  
    echo $count .": ".($spi)."\n";
    }
    //var_dump ($row); 
    ibase_free_result($sth);
    ibase_close($dbh);
?>
