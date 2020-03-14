<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);
$salt="A9k25Jb5@iQjNodbrzhfcd$Pp1$7Nc%U4";
$in  = crypt($data['login'] . $salt, $data['password'] . $salt);
$base   = crypt('admin' . $salt, 'Exb021025!' . $salt);
$token =
var_dump( $in);
var_dump( $base); 
//var_dump( $base . $salt);


var_dump(hash_equals($in, $base));
//var_dump(hash_equals($expected, $incorrect));

?>

