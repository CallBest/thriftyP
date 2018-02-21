<?php

require_once('../../includes/settings.php');
require_once('../../includes/dbase.php');

function cleanstring($string) {
  $newstring = "";
  $newstring = str_replace("'","''",$string);
  $newstring = str_replace("--","_",$newstring);
  $newstring = strtoupper($newstring);
  $newstring = stripslashes($newstring);
  return $newstring;
}

$userid = $_REQUEST['userid'];
$user = $_REQUEST['user'];
$refererpage = $_REQUEST['refererpage'];

$db = new dbconnection();
$db->dbconnect();

$datafields = array (
  'lastname',
  'firstname',
	'phone',
	'address',
	'addresscity',
	'addresscounty',
	'addressstate',
  'addresszipcode',
  'email',
  'referralcode'
);

$setfields = "";
foreach ($datafields as $key => $value) {
  if (!($value=='email')) {
    $curfield = cleanstring($_POST["$value"]);
    $$value = $curfield;
  } else {
    $curfield = $_POST["$value"];
    $$value = $curfield;
  }
  $setfields .= "$value='$curfield',";
}

//add to masterfile
$db->query = "insert into " . TABLE_CLIENTS . "
  (firstname,lastname,phone,address,addresscity,addresscounty,addressstate,addresszipcode,email,userid,disposition,tagdate)
  values ('$firstname','$lastname','$phone','$address','$addresscity','$addresscounty','$addressstate','$addresszipcode','$email',$userid,'New Customer',now())";
$db->execute();
$leadid = $db->last_id();

header("Location: $refererpage?show=search&leadid=$leadid");

?>