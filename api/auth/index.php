<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$mysqli = new mysqli("localhost", "fssp", "Exb021205!", "fssp");

/* проверяем соединение */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}


$sql =  "select * from fssp_mon_user  where login='" .$data['login'] . "' ";

$mysqli->set_charset('utf8');
$result = $mysqli->query($sql);



if (!$result) {
    echo "Could not successfully run query ($sql) from DB: " . mysql_error();
    exit;
}


$result->data_seek(0);
$row=$result -> fetch_all(MYSQLI_ASSOC);

//for($i = 0; $i < count($row); ++$i) {
//    $row[$i]['id'] = $i+1;
//};


if count ($result)>0 {
   $hashp=$row[0]['hash_password']; 
   $pass_ver=password_verify( $data['password'] ,$hashp) ;
   $ar= array (
      array("auth"=>"yes","token" => "$hashp") 
   ); 
   } else {
       array("auth"=>"no","error" => "user not found") 
   };


//var_dump( $base . $salt);

//var_dump($pass_ver);
//var_dump(hash_equals($expected, $incorrect));

echo json_encode($arr);

?>

