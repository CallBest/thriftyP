<?php
  require_once("includes/settings.php");
  require_once("includes/dbase.php");
  
  isset($_REQUEST['leadid']) ? $leadid = $_REQUEST['leadid'] : $leadid = 0;
  
  $db = new dbconnection();
  $db->dbconnect();
  
  $db->query = "
    select * from " . TABLE_CLIENTS . "
    where leadid=$leadid
    ";
  $db->execute();
  if  ($db->rowcount()==1) {
    $row = $db->fetchrow(0);
    if (strlen($row['cardnumber']) >= 15) {
      $row['cardnumber'] = 'XXXX-XXXX-XXXX-'.substr($row['cardnumber'],-4,4);
    }
    if ($row['markdrivewaydifficult']==1) {
      $row['markdrivewaydifficult'] = 'checked';
    }
    if ($row['marknoservice']==1) {
      $row['marknoservice'] = 'checked';
    }
    if ($row['problemcustomer']==1) {
      $row['problemcustomer'] = 'checked';
    }
    $body->add_keys($row);
    include('dispositions.php');
  }
?>