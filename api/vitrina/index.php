<?php
//database = fssp
//user = fssp
//password = Exb021205!
//default-character-set = utf8
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
$mysqli = new mysqli("localhost", "fssp", "Exb021205!", "fssp");

/* проверяем соединение */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
$spi_id='0';
$vitrina_id='1';

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

if(isset($_GET["date1"]))  {
    if(!empty($_GET["date1"])) {
		$date1=$_GET["date1"];
	};
};

if(isset($_GET["date2"]))  {
    if(!empty($_GET["date2"])) {
		$date2=$_GET["date2"];
	};
};

//and data_vozb>='" . date1 ."' and  data_vozb<='" . date2 ."'
if ($vitrina_id=='1') {

$sql_count="
SUM(CASE WHEN (col2='47' and col3='1' and col4='1' ) THEN 1 ELSE 0 END ) as col3,
SUM(CASE WHEN (col2='47' and col3='1' and col4='2') THEN 1 ELSE 0 END ) as col4,
SUM(CASE WHEN (col2='47' and col3='1' and col4='8') THEN 1 ELSE 0 END ) as col5,
SUM(CASE WHEN (col2='47' and col3='1' and col4='9') THEN 1 ELSE 0 END ) as col6,

SUM(CASE WHEN (col2='46' and col3='1' and col4='1') THEN 1 ELSE 0 END ) as col7,
SUM(CASE WHEN (col2='46' and col3='1' and col4='3') THEN 1 ELSE 0 END ) as col8,
SUM(CASE WHEN (col2='46' and col3='1' and col4='6') THEN 1 ELSE 0 END ) as col9,
SUM(CASE WHEN (col2='43' and col3='1' and col4='1') THEN 1 ELSE 0 END ) as col10,

SUM(CASE WHEN (col2='103' and col3='1' and col4='1') THEN 1 ELSE 0 END ) as col11,
SUM(CASE WHEN (col2='31' and col3='1' and col4='2') THEN 1 ELSE 0 END ) as col12
";
//$spi_id= array_search($, $array, strict_parameter)
// r = p2.values('osp').order_by('osp').annotate(count=Count('osp'))
if ($spi_id=='0') {
$sql="select  (select full_name from fssp_mon_osp where id=vv.osp_id) as osp,'-' as col1, count(osp_id) as col2,

" .$sql_count ."

         from fssp_mon_vitrinavalue vv           where vitrina_id=1 and data_vozb>='" . $date1 ."' and  data_vozb<='" . $date2 ."' group by  osp order by osp";
	 } else {
$sql =  "select  (select full_name from fssp_mon_osp where id=vv.osp_id) as osp,spi as col1 , count(spi) as col2 , 
  " .$sql_count ."     from fssp_mon_vitrinavalue vv           where vitrina_id=1 and data_vozb>='" . $date1 ."' and  data_vozb<='" . $date2 ."'group by vv.spi, osp order by osp";
};
$mysqli->set_charset('utf8');
$result = $mysqli->query($sql);


if (!$result) {
    echo "Could not successfully run query ($sql) from DB: " . mysql_error();
    exit;
}


$result->data_seek(0);
$row=$result -> fetch_all(MYSQLI_ASSOC);

for($i = 0; $i < count($row); ++$i) {
    $row[$i]['id'] = $i+1;
};
} elseif ($vitrina_id=='2') {
	
};
// End of vitina if


echo json_encode($row);

//while ($row = $result->fetch_assoc()) {
//    echo " id = " . $row['full_name'] . $row['spi'] . "\n";
//echo json_encode($arr);
//}

$result->free();
};

?>

