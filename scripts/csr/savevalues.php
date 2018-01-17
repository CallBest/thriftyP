<?php

require_once('../../includes/settings.php');
require_once('../../includes/dbase.php');

function cleanstring($string) {
  $newstring = "";
  $newstring = str_replace("'","''",$string);
  $newstring = str_replace("--","_",$newstring);
  //$newstring = preg_replace("/'/", "\&#39;", $newstring);
  $newstring = strtoupper($newstring);
  $newstring = stripslashes($newstring);
  return $newstring;
}

$refererpage = $_REQUEST['refererpage'];
if ($refererpage=='{@refererpage}') {
  $refererpage = '../../agent.php?show=fl';
}

header("Location: $refererpage");

?>