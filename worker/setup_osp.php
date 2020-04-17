<?php
include 'config.php';
//Проверяем есть ли район в таблице
//var_dump( $osp);
var_dump( $mysql_db[0]["host"]);

 $mysqli = new mysqli($mysql_db[0]["host"], $mysql_db[0]["username"], $mysql_db[0]["password"], $mysql_db[0]["db"]) ;
 $mysqli->set_charset('utf8');

 if ($mysqli->query("select * from fssp_mon_osp")) {
     echo "New record delete successfully";
     } else {
     echo "Error: " . $mysqli->error;
     }

?>
