
<?php
$result = array (
array("osp"=>"osp1","col1" => "spi"),
array("osp"=>"osp3","col1" => "spi3")
);

for($i = 0; $i < count($result); ++$i) {
    $result[$i]['id'] = $i+1;
}

//$res= array("id"=>"1")+$result;
//$array1 = array("col1" => "spi2");

//$result =  $array2;

print_r($result);
?>

