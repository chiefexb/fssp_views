<?php
$hashed_password = crypt('topsecret', '$2a$07$usesomesillystringforsalt$');

if (hash_equals($hashed_password, crypt('topsecret', $hashed_password))) {
   echo "Password verified!";
}
?>
