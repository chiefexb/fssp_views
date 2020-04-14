<?php
//database = fssp
//user = fssp
//password = Exb021205!
//default-character-set = utf8
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
//$mysqli = new mysqli("localhost", "fssp", "Exb021205!", "fssp");

/* проверяем соединение */
//if (mysqli_connect_errno()) {
//    printf("Connect failed: %s\n", mysqli_connect_error());
//    exit();
//}
$spi_id='0';
$vitrina_id='1';
$date1='';
$data2='';

if(isset($_GET["spi_id"]))  {
    if(!empty($_GET["spi_id"])) {
		$spi_id=$_GET["spi_id"];
	};
};

if(isset($_GET["vitrina_id"]))  {
    if(!empty($_GET["vitrina_id"])) {
		$vitrina_id=$_GET["vitrina_id"];
	};
};



//and data_vozb>='" . date1 ."' and  data_vozb<='" . date2 ."'
if ($vitrina_id=='1') {
$row = [
    "id" => 1,
    "col1" => "Наименование ОСП",
    "col2" => "ФИО судебного пристава",
    "col3" => "Наименование ОСП",
    "col4" => "ФИО судебного пристава",
    "col5" =>  "47 1 1",
    "col6" =>  "47 1 2",
    "col7" =>  "47 1 8",
    "col8" =>  "47 1 9",
    "col9" =>  "46 1 1",
    "col10" =>  "46 1 3",
    "col11" =>  "46 1 4",
    "col12" =>  "43 1 1",
    "col13" =>  "103 1 1",
    "col14" =>  "31 1 2",
 

   
    
];

}

} else if ($vitrina_id=='2') {

$}


//$mysqli->set_charset('utf8');
//$result = $mysqli->query($sql);


//if (!$result) {
//    echo "Could not successfully run query ($sql) from DB: " . mysql_error();
//    exit;
}


//$result->data_seek(0);
//$row=$result -> fetch_all(MYSQLI_ASSOC);

//for($i = 0; $i < count($row); ++$i) {
//    $row[$i]['id'] = $i+1;
//};



//$mysqli->set_charset('utf8');
//$result = $mysqli->query($sql);
	

// End of vitina if


echo json_encode($row);

//while ($row = $result->fetch_assoc()) {
//    echo " id = " . $row['full_name'] . $row['spi'] . "\n";
//echo json_encode($arr);
//}

$result->free();
};

?>

