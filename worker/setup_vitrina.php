<?php
include 'var.php';
include 'config.php';
//Проверяем есть ли район в таблице
var_dump( $osp);
//var_dump( $mysql_db[0]["host"]);

 $mysqli = new mysqli($mysql_db[0]["host"], $mysql_db[0]["username"], $mysql_db[0]["password"], $mysql_db[0]["db"]) ;
 $mysqli->set_charset('utf8');
 
 





$sql="INSERT INTO fssp_mon_vitrina (vitrina_id,full_name,short_name) VALUE  (";

for($i = 0; $i < count($osp); ++$i) {
   $result = $mysqli->query("select * from fssp_mon_osp where osp_id=". $osp[$i]['osp_id']  );
   if (!$result) {
    echo "Could not successfully run query ($sql) from DB: "; // . mysql_error();
    exit;
     }
    $row=$result -> fetch_all(MYSQLI_ASSOC);
    if (count($row)< 1 ) {
		echo "osp not found";
		$sql2= $sql.  $osp[$i]['osp_id']. ", '".  $osp[$i]['name'] ."', '".  $osp[$i]['short_name'] ."');"  ;
		$rez=$mysqli->query($sql2) ; 
	if (!$rez) {
	  echo  $sql2 ."\n";
       echo "Could not successfully run query ". $sql2. "-"  . mysql_error()  ;
    exit; }
	} else {
		var_dump ($row);
		}
    
   
};

?>
