<?php
$client= new GearmanClient();
$client->addServer();
$job_handle = $client->doBackground("reverse", "Hello World!");
print  $job_handle;
do {
  print  $client->jobStatus($job_handle)[0];
}
//while ($client->jobStatus($job_handle)[0]);
?>

