<?php
include 'vars.php';
    $host = '62.109.7.133:fssp';
    $username='SYSDBA';
    $password='8aJu3#7Y3j';
    echo $vitrina3;
    $charset='WIN1251';
    $dbh = ibase_connect($host, $username, $password, $charset);
    $stmt = $vitrina3;
    $sth = ibase_query($dbh,  $stmt);
    $count=0;
    while ($row[$count] = ibase_fetch_object($sth)) {
      $count++;
    //$d=count($row);
    //var_dump ($row) ;
      
    // echo $row->email, "\n";
    }
    echo $count;
    ibase_free_result($sth);
    ibase_close($dbh);
?>
