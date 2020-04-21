<?php
include 'vars.php';
include 'config.php';

for($i = 0; $i < count($osp); ++$i) {
$osp_id=$i+1;

  $jj = file_get_contents($osp[$osp_id-1]["mon_file_name"]); 
  $json_a = json_decode($jj, true);
  var_dump($json_a)  ;
// mon_file_name 

$cpu_info=$json_a["cpu"]; 
$cpu_core=$json_a["cpu_core"]; 

$mem_total=$json_a["mem_total"];

$root_size_procent =$json_a["root_size_available"]/ $json_a["root_size_total"];
$rdb_size_procent =$json_a["rdb_size_available"]/ $json_a["rdb_size_total"];
  var_dump($root_size_procent)  ;
  var_dump($rdb_size_procent )  ;


//var_dump( $mysql_db[0]["host"]);

 $mysqli = new mysqli($mysql_db[0]["host"], $mysql_db[0]["username"], $mysql_db[0]["password"], $mysql_db[0]["db"]) ;
 $mysqli->set_charset('utf8');
 






  
  $sql2="select id from fssp_mon_osp where osp_id=".$osp_id;
  $sql3="select id from fssp_mon_vitrina where vitrina_id=5";
  
    
    if ($mysqli->query("DELETE FROM fssp_mon_vitrinavalue where vitrina_id=(". $sql3. ") and osp_id=(" . $sql2.")" ) === TRUE) {
     echo "New record delete successfully\n";
    } else {
    echo "Error: " . $mysqli->error;
     }
 

     $vitr6=" INSERT INTO fssp_mon_vitrinavalue (vitrina_id, osp_id, col3,col28,col29,col25,col26, data_vozb) VALUES ";
      $col3= $cpu_info;
      $col28 =$cpu_core;
      $col29=$mem_total ;
      $col25=$root_size_procent*100;
      $col26=$rdb_size_procent*100;
      $data_vozb= date("Y-m-d h:i:s", strtotime("now") );
      //'2020-01-01';
     
     $str=$vitr6 . "((".$sql3."),(".$sql2."),  '". $col3."', " . $col28. ", " . $col29. ", ". $col25. ", ". $col26. ", '" .    $data_vozb. "' );  "; 
	       
		
		$rez=$mysqli->query( $str) ; 
		
	if (!$rez) {
	  echo  $str ."\n";
       echo "Could not successfully run query ". $str. "-"  . mysql_error()  ;
    exit ;  } 	 else {
		
		}
    
}

?>

