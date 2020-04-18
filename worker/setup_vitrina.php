<?php
include 'vars.php';
include 'config.php';
//Проверяем есть ли район в таблице
var_dump( $vitrina);
//var_dump( $mysql_db[0]["host"]);

 $mysqli = new mysqli($mysql_db[0]["host"], $mysql_db[0]["username"], $mysql_db[0]["password"], $mysql_db[0]["db"]) ;
 $mysqli->set_charset('utf8');
 
 





$sql="INSERT INTO fssp_mon_vitrina (filter_id,vitrina_id,name,date_actual,calc_field_name) VALUE  (";

for($i = 0; $i < count($vitrina); ++$i) {
   $result = $mysqli->query("select * from fssp_mon_vitrina where vitrina_id=". $vitrina[$i]['vitrina_id']  );
   if (!$result) {
    echo "Could not successfully run query ($sql) from DB: "; // . mysql_error();
    exit;
     }
    $row=$result -> fetch_all(MYSQLI_ASSOC);
    if (count($row)< 1 ) {
		echo "vitrina not found";
		$sql2= $sql. "1, ". $vitrina[$i]['vitrina_id']. ", '".  $osp[$i]['name'] ."','2020-01-01',1 );"  ;
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
