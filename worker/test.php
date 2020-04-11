<?php
include 'vars.php';
    $host = '62.109.7.133:fssp';
    $username='SYSDBA';
    $password='8aJu3#7Y3j';
    //echo $vitrina3;
    $charset='WIN1251';
    $dbh = ibase_connect($host, $username, $password, $charset);
    $mysqli = new mysqli("localhost", "fssp", "Exb021205!", "fssp");
    $mysqli->set_charset('utf8');
    
    if ($mysqli->query("DELETE FROM fssp_mon_vitrinavalue;") === TRUE) {
    echo "New record delete successfully";
    } else {
    echo "Error: " . $mysqli->error;
    }
    
    //$result = $mysqli->query($sql);
    $stmt = $vitrina3;
    $sth = ibase_query($dbh,  $stmt);
    $count=0;
    while ($onerow = ibase_fetch_row( $sth)) {
		 //$str=vitr3+"'";
        //foreach($onerow as $key => $value) {
           $spi=iconv('windows-1251', 'UTF-8',$onerow[0] );  
           $col1=$onerow[1];
           $col2=$onerow[2];
           $col3=$onerow[3];
           $data_vozb=$onerow[4];
           $data_okon="'".$onerow[5]."'";
          // $str="";
           
            if ( is_null ($onerow[5]) ) {
				 $data_okon="NULL" 
				  
			}
			//echo $data_okon;
           $str=$vitr3."(1,1,  '".$spi."' , '". $col1."', '".$col2."', '".$col3."', '".$data_vozb."' , ".$data_okon." );  "; 
           if ($mysqli->query($str) === TRUE) {
               //echo "New insert  successfully";
           } else {
			     $count++;
             echo "Error: ". $str . "-".$onerow[5]."--" . $mysqli->error;
              die();
            }
           
            //var_dump($r);

 // $str=$str."' ,'".iconv('windows-1251', 'UTF-8',  $value)."', '";
    //}
    //echo $str;
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
