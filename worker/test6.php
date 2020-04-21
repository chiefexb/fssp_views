<?php
include 'vars.php';
include 'config.php';
  $jj = file_get_contents("/var/www/portal/osp_1.json"); 
  $json_a = json_decode($jj, true);
  var_dump($json_a)  
// mon_file_name 


//Проверяем есть ли район в таблице
var_dump( $json_a);
//var_dump( $mysql_db[0]["host"]);

 $mysqli = new mysqli($mysql_db[0]["host"], $mysql_db[0]["username"], $mysql_db[0]["password"], $mysql_db[0]["db"]) ;
 $mysqli->set_charset('utf8');
 

$vitr6=" INSERT INTO fssp_mon_vitrinavalue (vitrina_id, osp_id, col23, data_vozb) VALUES ";






$sql="INSERT INTO fssp_mon_vitrina_value (filter_id,vitrina_id,name,date_actual,calc_field_name,custom_fields) VALUE  (";


   $result = $mysqli->query("select * from fssp_mon_vitrina where vitrina_id=". $vitrina[$i]['vitrina_id']  );
   if (!$result) {
    echo "Could not successfully run query ($sql) from DB: "; // . mysql_error();
    exit;
     }
  
		$sql2= $sql. "1, ". $vitrina[$i]['vitrina_id']. ", '".  $vitrina[$i]['name'] ."','2020-01-01',1,1 );"  ;
	//	$rez=$mysqli->query($sql2) ; 
		
	if (!$rez) {
	  echo  $sql2 ."\n";
       echo "Could not successfully run query ". $sql2. "-"  . mysql_error()  ;
    exit } 	 else {
		var_dump ($row);
		}
    
   
};

?>

