<?php
//
include 'vars.php';
include 'config.php';

if (count($argv ) <2) {
echo "Usage: \n php test.php osp_id vitrina_id";
} else { 
	var_dump($argv);
    $osp_i=$argv[1]-1;
     $vitrina_id=$argv[2]-1;
     echo "osp id".$osp_i;
   
    $host = $osp [ $osp_i ] ["host"];
    echo "Имя" . $osp [ $osp_i ] ["name"] ;
    $username='SYSDBA';
    $password=$osp [ $osp_i ] ["password"];;
    ////echo $vitrina3;
    $charset='WIN1251';
    $dbh = ibase_connect($host, $username, $password, $charset);
    
    $mysqli = new mysqli($mysql_db[0]["host"], $mysql_db[0]["username"], $mysql_db[0]["password"], $mysql_db[0]["db"]) ;
    $mysqli->set_charset('utf8');
   
  
    
    if ($mysqli->query("DELETE FROM fssp_mon_vitrinavalue where vitrina_id=".$vitrina_id." and osp_id=".$osp_i) === TRUE) {
     echo "New record delete successfully";
     } else {
     echo "Error: " . $mysqli->error;
     }
    
    //$result = $mysqli->query($sql);
    //$stmt = $vitrina3;
    
    $stmt = $vitrina[$osp_i]["rdb_script"];
    echo $vitrina[$osp_i]["name"] ;
    echo "RDB ". $stmt;
    $sth = ibase_query($dbh,  $stmt);
    $count=0;
    
    while ($onerow = ibase_fetch_row( $sth)) {

		  if  ($vitrina_id=='1') {
           $spi=iconv('windows-1251', 'UTF-8',$onerow[0] );  
           $col1=$onerow[1];
           $col2=$onerow[2];
           $col3=$onerow[3];
           $data_vozb="'".$onerow[4]."'";
           $data_okon="'".$onerow[5]."'";
        
           
            if ( is_null ($onerow[5]) ) {
				 $data_okon="NULL" ;
				  
			} else   if ( strlen ($onerow[5]) <1) {
				 $data_okon="NULL" ;
				  
			}
			  if ( is_null ($onerow[4]) ) {
				 $data_vozb="NULL" ;
				  
			} else   if ( strlen ($onerow[4]) <1) {
				 $data_vozb="NULL" ;
				  
			}
			//echo $data_okon;
           $str=$vitrina[$osp_i]["insert_script"]."(1,".$osp_i.",  '".$spi."' , '". $col1."', '".$col2."', '".$col3."', ".$data_vozb." , ".$data_okon." );  "; 
	       } else  if  ($vitrina_id=='2') {
			   $spi=iconv('windows-1251', 'UTF-8',$onerow[0] );
			   $data_vozb="'".$onerow[2]."'";
			   $col1=$onerow[1];
			   $str=$vitrina[$osp_i]["insert_script"]."(2,".$osp_i.",  '".$spi."' , '". $col1."', " . $data_vozb. " );  "; 
	      }
	       
	       
	       
           if ($mysqli->query($str) === TRUE) {
              // echo "New insert  successfully".$count;
           } else {
			     $count++;
             echo "Error: ". $str ."--" . $mysqli->error;
              //die();
            }
           
	   

    }
    
    $mysqli->close();
    //while ($row[$count] = ibase_fetch_object($sth)) {
    //  $count++;
    //$d=count($row);
    //var_dump ($row) ;
      
    // echo $row->email, "\n";
   // }
    echo $count;
    ibase_free_result($sth);
    ibase_close($dbh);
}
?>
