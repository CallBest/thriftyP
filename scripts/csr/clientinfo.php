<?php
  require_once("includes/settings.php");
  require_once("includes/dbase.php");
  
  isset($_REQUEST['leadid']) ? $leadid = $_REQUEST['leadid'] : $leadid = 0;
  
  $db = new dbconnection();
  $db->dbconnect();
  
  $db->query = "
    select * from " . TABLE_CLIENTS . " a
    inner join " . TABLE_CLIENTINFO . " b on (a.leadid=b.leadid)
    where a.leadid=$leadid and a.userid=$userid
    ";
  $db->execute();
  if  ($db->rowcount()==1) {
    $row = $db->fetchrow(0);
    $body->add_keys($row);
    include('dispositions.php');

  }
?>