<?php
  $jj = file_get_contents("/var/www/portal/osp_1.json");
  $json_a = json_decode($jj, true);
  var_dump($json_a)  
?>
