<?php
include 'vars.php';
include 'config.php';
$osp_id=1; 

  $jj = file_get_contents("/var/www/portal/osp_1.json"); 
  $json_a = json_decode($jj, true);
  var_dump($json_a)  ;
// mon_file_name 

$cpu_info=$json_a["cpu_info"]; 
$cpu_core=$json_a["cpu_core"]; 

$mem_total=$json_a["rdb_size_available"];

$root_size_procent =$json_a["rdb_size_available"]/$json_a["rdb_size_total"];
$rdb_size_procent =$json_a["rdb_size_available"]/$json_a["rdb_size_total"];


//var_dump( $mysql_db[0]["host"]);

 $mysqli = new mysqli($mysql_db[0]["host"], $mysql_db[0]["username"], $mysql_db[0]["password"], $mysql_db[0]["db"]) ;
 $mysqli->set_charset('utf8');
 






  
  $sql2="select id from fssp_mon_osp where osp_id=".$osp_id;
  $sql3="select id from fssp_mon_vitrina where vitrina_id=5;
  
    
    if ($mysqli->query("DELETE FROM fssp_mon_vitrinavalue where vitrina_id=(".$sql3.") and osp_id=(".$sql2.")" ) === TRUE) {
     echo "New record delete successfully\n";
    } else {
    echo "Error: " . $mysqli->error;
     }
 

     $vitr6=" INSERT INTO fssp_mon_vitrinavalue (vitrina_id, osp_id, col23,col28,col29,col25,col26 data_vozb) VALUES ";
      $col23= $cpu_core;
      $col28 =$cpu_core;
      $col29=$mem_total;
      $col25=$root_size_procent;
      $col26=$rdb_size_procent
     
     $str=$vitr6 . "((".$sql3."),(".$sql2."),  ". $cpu_info.", " . $data_vozb. " );  "; 
	       
		
		$rez=$mysqli->query( $str) ; 
		
	if (!$rez) {
	  echo  $str ."\n";
       echo "Could not successfully run query ". $str. "-"  . mysql_error()  ;
    exit ;  } 	 else {
		var_dump ($row);
		}
    


?>

