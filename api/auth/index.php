<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
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


if (count ($row)>0 ) {
   $hashp=$row[0]['hash_password']; 
   $token =password_hash($login, PASSWORD_DEFAULT);
   $pass_ver=password_verify( $data['password'] ,$hashp) ;
   $ar=   array("auth"=>"yes","token" => $token)  ;
     
   } else {
       $ar= array("auth"=>"no","error" => "user not found") ;
   };


//var_dump($ar);

//var_dump($pass_ver);
//var_dump(hash_equals($expected, $incorrect));

echo json_encode($ar);
} else {
	header("HTTP/1.0 404 Not Found");
};
?>

