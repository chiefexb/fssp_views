<?php
$host = '62.109.7.133:fssp';
    $username='SYSDBA';
    $password='8aJu3#7Y3j';
    $dbh = ibase_connect($host, $username, $password);
    $stmt = $vitrina1;
    $sth = ibase_query($dbh, $stmt);
    $row = ibase_fetch_assoc($sth);
    var_dump($row);
?>
