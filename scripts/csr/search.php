<?php
  $lastname = str_replace(' ','%',$_REQUEST['lastname']);
  $email = str_replace(' ','%',$_REQUEST['email']);
  $phone = str_replace(' ','%',$_REQUEST['phone']);
  $address = str_replace(' ','%',$_REQUEST['address']);
  $city = str_replace(' ','%',$_REQUEST['city']);
  $state = str_replace(' ','%',$_REQUEST['state']);
  $county = str_replace(' ','%',$_REQUEST['county']);
  $zipcode = str_replace(' ','%',$_REQUEST['zipcode']);

  require_once('includes/settings.php');
  require_once('includes/dbase.php');
  
  $db = new dbconnection();
  $db->dbconnect();
  
//pagination variables start  
  if (isset($_REQUEST['start'])) {
    $start = $_REQUEST['start'];
    if (!(is_numeric($start))) {
      $start = 0;
    }
  } else {
    $start = 0;
  }
  if ($start < 0) {
    $start = 0;
  }
  $end = $start + 10;
//set sorting order
  if (isset($_REQUEST['sort'])) {
    $sort = $_REQUEST['sort'];
  } else {
    $sort = 'lastname';
  }
//actual query
  $db->query = "
    select * from " . TABLE_CLIENTS . " a 
    inner join " . TABLE_DISPO . " b on (a.disposition=b.disposition)
    inner join " . TABLE_USERS . " c on (a.userid=c.userid)
    where (
      (lastname like '%$lastname%')
      or (email like '%$email%')
      or (phone like '%$phone%')
      or (address1 like '%$address%')
      or (addresscity like '%$city%')
      or (addressstate like '%$state%')
      or (addresscounty like '%$county%')
      or (addresszipcode like '%$zipcode%')
    )
    order by $sort limit $start, $end";
  $db->execute();
  $gridvalues = array();
  $rowcount = $db->rowcount();
  for ($x = 0; $x < $rowcount; $x++) {
    $row = $db->fetchrow($x);
    $gridvalues[$x] = $row;
  }
 
  $body->template_loop('gridvalues',$gridvalues);
  $body->add_key('prev',$start-10);
  $body->add_key('next',$start+10);
?>

