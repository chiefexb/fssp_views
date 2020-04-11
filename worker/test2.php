<?php
$mysqli = new mysqli("localhost", "fssp", "Exb021205!", "fssp");
$date1='';
$date2='';

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
$sql="select  (select full_name from fssp_mon_osp where id=vv.osp_id) as osp,'-' as col1, count(osp_id) as col2, " .$sql_count ."     from fssp_mon_vitrinavalue vv           where vitrina_id=1 and data_vozb>='" .$date1 ."' and  data_vozb<='" . $date2 ."' group by  osp order by osp";

$mysqli->set_charset('utf8');
$result = $mysqli->query($sql);

$result->data_seek(0);
$row=$result -> fetch_all(MYSQLI_ASSOC);

echo json_encode($row);


$result->free();


?>
