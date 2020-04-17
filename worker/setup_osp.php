<?php
include 'config.php';
//Проверяем есть ли район в таблице
//var_dump( $osp);
var_dump( $mysql_db[0]["host"]);

 $mysqli = new mysqli($mysql_db[0]["host"], $mysql_db[0]["username"], $mysql_db[0]["password"], $mysql_db[0]["db"]) ;
 $mysqli->set_charset('utf8');
 
 







for($i = 0; $i < count($osp); ++$i) {
   $result = $mysqli->query("select * from fssp_mon_osp where osp_id=". $osp[$i]['osp_id']  );
   if (!$result) {
    echo "Could not successfully run query ($sql) from DB: "; // . mysql_error();
    exit;
     }
    $row=$result -> fetch_all(MYSQLI_ASSOC);
    if (count($row)=0 ) {
		echo "osp not found";
	} 
    
   
};

?>
