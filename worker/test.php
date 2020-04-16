<?php
include 'vars.php';
  //  $host = '10.9.54.34:ncore-fssp';
// $host = '10.9.40.34:ncore-fssp'; 
   $host = '62.109.7.133:fssp';
    $username='SYSDBA';
 // $password='IMzRMsuO';
 // $password='v1rnGo7';
    $password="8aJu3#7Y3j";
    ////echo $vitrina3;
    $charset='WIN1251';
    $dbh = ibase_connect($host, $username, $password, $charset);
    $mysqli = new mysqli("localhost", "fssp", "Exb021205!", "fssp");
    $mysqli->set_charset('utf8');
    $vitrina_id='2';
    $osp_i=1;
    
    if ($mysqli->query("DELETE FROM fssp_mon_vitrinavalue where vitrina_id=".$vitrina_id." and osp_id=".$osp_i) === TRUE) {
     echo "New record delete successfully";
     } else {
     echo "Error: " . $mysqli->error;
     }
    
    //$result = $mysqli->query($sql);
    //$stmt = $vitrina3;
     $stmt = $vitrina4;
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
           $str=$vitr3."(1,".$osp_i.",  '".$spi."' , '". $col1."', '".$col2."', '".$col3."', ".$data_vozb." , ".$data_okon." );  "; 
	       } else  if  ($vitrina_id=='2') {
			   $spi=iconv('windows-1251', 'UTF-8',$onerow[0] );
			   $data_vozb="'".$onerow[2]."'";
			   $col1=$onerow[1];
			   $str=$vitr4."(2,".$osp_i.",  '".$spi."' , '". $col1."', " . $data_vozb. " );  "; 
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
?>
