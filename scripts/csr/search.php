<?php
  $lastname = str_replace(' ','%',$_REQUEST['searchlastname']);
  $email = str_replace(' ','%',$_REQUEST['searchemail']);
  $phone = str_replace(' ','%',$_REQUEST['searchphone']);
  $address = str_replace(' ','%',$_REQUEST['searchaddress']);
  $city = str_replace(' ','%',$_REQUEST['searchcity']);
  $state = str_replace(' ','%',$_REQUEST['searchstate']);
  $county = str_replace(' ','%',$_REQUEST['searchcounty']);
  $zipcode = str_replace(' ','%',$_REQUEST['searchzipcode']);

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
      and (email like '%$email%')
      and (phone like '%$phone%')
      and (address like '%$address%')
      and (addresscity like '%$city%')
      and (addressstate like '%$state%')
      and (addresscounty like '%$county%')
      and (addresszipcode like '%$zipcode%')
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

