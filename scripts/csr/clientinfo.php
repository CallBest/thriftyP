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
    if ($row['haspricecap']==1) {
      $row['haspricecap'] = 'checked';
    }
    if ($row['haslockin']==1) {
      $row['haslockin'] = 'checked';
    }
    if ($row['hasprebuyannualfee']==1) {
      $row['hasprebuyannualfee'] = 'checked';
    }
    if ($row['onbudgetprogram']==1) {
      $row['onbudgetprogram'] = 'checked';
    }
    if ($row['twelvemonthtankprogram']==1) {
      $row['twelvemonthtankprogram'] = 'checked';
    }
    $body->add_keys($row);

    // include last 5 remarks from history
    $db->query = "select userfn, userln, remarks, tagdate
      from ".TABLE_HISTORY." a inner join ".TABLE_USERS." b on (a.userid=b.userid)
      where leadid=$leadid order by tagdate desc limit 5";
    $db->execute();
    $previousnotes = '';
    for ($i=0; $i < $db->rowcount(); $i++) {
      $row = $db->fetchrow($i);
      $userfullname = trim(str_replace('  ',' ',$row['userfn'] . ' ' . $row['userln']));
      $remarks = $row['remarks'];
      $tagdate = $row['tagdate'];
      if ($remarks != '') {
        $previousnotes .= "$tagdate - ($userfullname): $remarks<br>";
      }
    }
    $body->add_key('previousnotes',$previousnotes);

    // existing unfulfilled orders
    $db->query = "select * from ".TABLE_ORDERS." where leadid=$leadid and delivered=0";
    $db->execute();
    $orders = '';
    for ($i=0; $i < $db->rowcount(); $i++) {
      $row = $db->fetchrow($i);
      $orders .= "<a href='scripts/csr/orderdetails.php?orderid=".$row['orderid']."' target='_blank'>(".$row['orderdate'].") ".$row['ordertype']."</a><br/>";
    }
    $body->add_key('orders',$orders);

    include('dispositions.php');
  }
?>