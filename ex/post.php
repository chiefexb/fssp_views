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


//$postData = file_get_contents('php://input');
//$data = json_decode($postData, true);
$hashp=$row[0]['hash_password'];
//$salt="";
//$in  = crypt($data['login'] . $salt, $data['password'] . $salt);
//$p = password_hash($data['password'], PASSWORD_DEFAULT);
//$base   = crypt('alex' . $salt, 'pass' . $salt);
//var_dump($hashp);
//var_dump( $in);
//var_dump( $p);
$pass_ver=password_verify( $data['password'] ,$hashp) ;
//var_dump( $base . $salt);

var_dump($pass_ver);
//var_dump(hash_equals($expected, $incorrect));

?>

