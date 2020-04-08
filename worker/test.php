<?php
include 'vars.php';
    $host = '62.109.7.133:fssp';
    $username='SYSDBA';
    $password='8aJu3#7Y3j';
    echo $vitrina2;
    $dbh = ibase_connect($host, $username, $password);
    $stmt = $vitrina3;
    $sth = ibase_query($dbh,  $stmt);
    $row = ibase_fetch_assoc( $sth );
    $d=count($row);
    var_dump($d);
?>
