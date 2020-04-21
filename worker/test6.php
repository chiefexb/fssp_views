<?php
include 'vars.php';
include 'config.php';
  $jj = file_get_contents("/var/www/portal/osp_1.json"); 
  $json_a = json_decode($jj, true);
  var_dump($json_a)  ;
// mon_file_name 
//col3 cpu_info
//cpu_core col27
 // "mem_total": col28
//  "root_size_available": col 25
//  "root_size_available": "126286888960",
//  "rdb_size_available": "27380080640", 26
 // "rdb_size_total": "82957524992"
$root_size_procent =$json_a["rdb_size_available"]/$json_a["rdb_size_total"];
$root_size_procent =$json_a["rdb_size_available"]/$json_a["rdb_size_total"];


//var_dump( $mysql_db[0]["host"]);

 $mysqli = new mysqli($mysql_db[0]["host"], $mysql_db[0]["username"], $mysql_db[0]["password"], $mysql_db[0]["db"]) ;
 $mysqli->set_charset('utf8');
 

$vitr6=" INSERT INTO fssp_mon_vitrinavalue (vitrina_id, osp_id, col23, data_vozb) VALUES ";






$sql="INSERT INTO fssp_mon_vitrina_value (filter_id,vitrina_id,name,date_actual,calc_field_name,custom_fields) VALUE  (";



  
		$sql2= $sql. "1, ". $vitrina[$i]['vitrina_id']. ", '".  $vitrina[$i]['name'] ."','2020-01-01',1,1 );"  ;
	//	$rez=$mysqli->query($sql2) ; 
		
	if (!$rez) {
	  echo  $sql2 ."\n";
       echo "Could not successfully run query ". $sql2. "-"  . mysql_error()  ;
    exit ;  } 	 else {
		var_dump ($row);
		}
    


?>

