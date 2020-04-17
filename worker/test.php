<?php
//
include 'vars.php';
include 'config.php';

if (count($argv ) <2) {
echo "Usage: \n php test.php osp_id vitrina_id \n";
} else { 
	var_dump($argv);
    $osp_i=$argv[1]-1;
     $vitrina_id=$argv[2]-1;
     echo "osp id".$osp_i."\n";
   
    $host = $osp [ $osp_i ] ["host"];
    echo "Имя" . $osp [ $osp_i ] ["name"]."\n" ;
    $username='SYSDBA';
    $password=$osp [ $osp_i ] ["password"];;
    ////echo $vitrina3;
    $charset='WIN1251';
    $dbh = ibase_connect($host, $username, $password, $charset);
    
    $mysqli = new mysqli($mysql_db[0]["host"], $mysql_db[0]["username"], $mysql_db[0]["password"], $mysql_db[0]["db"]) ;
    $mysqli->set_charset('utf8');
    $osp_id=$osp_i+1;
    $sql2="select id from fssp_mon_osp where osp_id=".$osp_id;
    
    if ($mysqli->query("DELETE FROM fssp_mon_vitrinavalue where vitrina_id=".$vitrina_id." and osp_id=(".$sql2.")" ) === TRUE) {
     echo "New record delete successfully\n";
     } else {
     echo "Error: " . $mysqli->error;
     }
    
    //$result = $mysqli->query($sql);
    //$stmt = $vitrina3;
    
    $stmt = $vitrina[$vitrina_id]["rdb_script"];
    echo $vitrina[$vitrina_id]["name"] ."\n" ;
    echo "RDB ". $stmt . "\n";
    echo "VIRINA ID ".$vitrina_id."\n";
    
    $sth = ibase_query($dbh,  $stmt);
    $count=0;
   
  
    while ($onerow = ibase_fetch_row( $sth)) {

		  if  ($vitrina_id==0) {
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
			
           $str = $vitrina[$vitrina_id]["insert_script"].  "(1,(".$sql2."),  '".$spi."' , '". $col1."', '".$col2."', '".$col3."', ".$data_vozb." , ".$data_okon." );  "; 
	       } else  if  ($vitrina_id==1) {
			   $spi=iconv('windows-1251', 'UTF-8',$onerow[0] );
			   $data_vozb="'".$onerow[2]."'";
			   $col1=$onerow[1];
			   $str=$vitrina[$vitrina_id]["insert_script"] . "(2,(".$sql2."),  '".$spi."' , '". $col1."', " . $data_vozb. " );  "; 
	      } else  if  ($vitrina_id==2) {
			   $spi=iconv('windows-1251', 'UTF-8',$onerow[0] );
			   $data_vozb="'".$onerow[0]."'";
			   $col1=$onerow[1];
			   $str=$vitrina[$vitrina_id]["insert_script"] . "(3,(".$sql2."),  '".$spi."' , '". $col1."', " . $data_vozb. " );  "; 
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
