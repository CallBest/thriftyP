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

$userid = $_REQUEST['userid'];
$user = $_REQUEST['user'];
$disposition = $_REQUEST['disposition'];
$remarks = $_REQUEST['remarks'];
$refererpage = $_REQUEST['refererpage'];

$db = new dbconnection();
$db->dbconnect();

$datafields = array (
  'lastname',
  'firstname',
	'phone',
	'address1',
	'addresscity',
	'addresscounty',
	'addressstate',
	'addresszipcode'
);

$setfields = "";
foreach ($datafields as $key => $value) {
  if (!(($value=='email') || ($value=='companyemail'))) {
    $curfield = cleanstring($_POST["$value"]);
    $$value = $curfield;
  } else {
    $curfield = $_POST["$value"];
    $$value = $curfield;
  }
  $setfields .= "$value='$curfield',";
}

//<temporary>
if ($phone<>'') {
  $db->query = "select * from " . TABLE_CLIENTS . " where phone='$phone'";
  $db->execute();
  if ($db->rowcount()==0) {
    $db->query = "insert into " . TABLE_CLIENTS . " (firstname,lastname,phone,userid) values ('$firstname','$lastname','$phone',$userid)";
    $db->execute();
    $db->query = "select * from " . TABLE_CLIENTS . " where phone='$phone'";
    $db->execute();
    $row = $db->fetchrow(0);
    $leadid = $row['leadid'];
    $db->query = "insert into " . TABLE_CLIENTINFO . " (leadid) values ($leadid)";
    $db->execute();  
  } else {
    $row = $db->fetchrow(0);
    $leadid = $row['leadid'];
  }
} else {
  header("Location: $refererpage");
}
//</temporary>


//masterfile
$db->query = "
  update " . TABLE_CLIENTS . "
  set
    $setfields
    userid=$userid,disposition='$disposition',tagdate=now(),remarks=concat(now(),'- ($user): $remarks \n',remarks)
  where leadid=$leadid
  ";
$db->execute();

//callhistory
$db->query = "
  insert into " . TABLE_HISTORY . " (leadid,remarks,disposition,userid,tagdate)
    values (
      $leadid,
      '$remarks',
      '$disposition',
      '$userid',
      now()
    )";
$db->execute();

header("Location: $refererpage");

?>