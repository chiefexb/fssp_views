<?php
$worker= new GearmanWorker();
$worker->addServer();
$worker->addFunction("reverse", "my_reverse_function");
while ($worker->work());

function vitrina_calc($job)
{
    
    j = $job->workload() ;
    //json_decode($job->workload() );                                         |
    //$osp=$obj->{'osp'};
    //$vitrina_id=$obj->{'osp'};
    
    /*$host = '62.109.7.133:fssp';
    $username='SYSDBA';
    $password='8aJu3#7Y3j';
    $dbh = ibase_connect($host, $username, $password);
    $stmt = 'SELECT COUNT(*) FROM DOC_IP_DOC';
    $sth = ibase_query($dbh, $stmt);
    $row = ibase_fetch_assoc($sth);
    var_dump($row);

   ibase_free_result($sth);
   ibase_close($dbh);/? */
  return strrev(j) ;
   //($job->workload());
}

?>

