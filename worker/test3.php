<?php
    $host = '62.109.7.133:fssp';
    $username='SYSDBA';
    $password='8aJu3#7Y3j';
    //echo $vitrina3;
    $charset='WIN1251';
    $dbh = ibase_connect($host, $username, $password, $charset);
    $stmt = "select  IP_EXEC_PRIST_NAME, d.metaobjectname ,d.doc_date from o_ip oip
    join document d on oip.id = d.id and d.docstatusid not in (-1, 1, 5)
      
    where (d.metaobjectname like 'O_IP_ACT_%') or (d.metaobjectname = 'O_IP_RES_REOPEN')";
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
