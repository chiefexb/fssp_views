<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $postData = file_get_contents('php://input');
  $data = json_decode($postData, true);
  
  //$query = ibase_prepare($dbh, "UPDATE FOO SET BAR = ? WHERE BAZ = ?");


    //ibase_execute($query, $bar, $baz);
  $client= new GearmanClient();
  $client->addServer();
  $job_handle = $client->doBackground("vitrina_calc", $data);
  $result = array("job_handler"=>$job_handle );
  echo json_encode($result);
  //print  $job_handle;
  //print  $client->jobStatus($job_handle)[0];
  //echo json_encode($row);
  //while ($client->jobStatus($job_handle)[0]);
}

?>

