<?php
include 'vars.php';
    $host = '62.109.7.133:fssp';
    $username='SYSDBA';
    $password='8aJu3#7Y3j';
    //echo $vitrina3;
    $charset='WIN1251';
    $dbh = ibase_connect($host, $username, $password, $charset);
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
  $col1=$onerow[1];

 // $str=$str."' ,'".iconv('windows-1251', 'UTF-8',  $value)."', '";
    //}
    //echo $str;
    }
    //while ($row[$count] = ibase_fetch_object($sth)) {
    //  $count++;
    //$d=count($row);
    //var_dump ($row) ;
      
    // echo $row->email, "\n";
   // }
    //echo $count;
    ibase_free_result($sth);
    ibase_close($dbh);
?>
