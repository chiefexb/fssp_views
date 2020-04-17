<?php
include '../../fssp_settings/config.php';
//Проверяем есть ли район в таблице

 $mysqli = new mysqli(mysql_db[0]=>host, mysql_db[0]=>user, mysql_db[0]=>password, mysql_db[0]=>db);
  $mysqli->set_charset('utf8');
  if ($mysqli->query("select * from fssp_mon_osp") {
     echo "New record delete successfully";
     } else {
     echo "Error: " . $mysqli->error;
     }

?>
