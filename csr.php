<?php

require_once("includes/cookie.php");
require_once("includes/template.php");

$body = new Template();
$cookie = new CookieInfo("TP");

// check existing credentials before proceeding with tha application
// redirect to login if no valid credentials found 
if ($cookie->check()) {
  $cookie->getcookies();
  $userid = $cookie->array['userid'];
  $body->add_key('userid',$userid);
  $body->add_key('user',$cookie->array['user']);
	$body->add_key('userfn',$cookie->array['userfn']);
	$body->add_key('userln',$cookie->array['userln']);
//} else {
//  header('Location: index.php');
}

// set the header menu
$body->set_template("templates/csr/header.html");
echo $body->create();

// set the main content
if (isset($_SERVER['HTTP_REFERER'])) {
  $body->add_key('refererpage',$_SERVER['HTTP_REFERER']);
} else {
  $body->add_key('refererpage','http://'.$_SERVER['HTTP_HOST'].$_SERVER['SCRIPT_NAME']);
}
$page = isset($_REQUEST['show']) ? strtolower(str_replace("'","",$_REQUEST['show'])) : 'dashboard';
$body->add_key('mainpage',$_SERVER['SCRIPT_NAME']);
$body->add_key('workingfolder',$page);
switch($page){
  case 'search':
    $body->set_template("templates/csr/search.html");
    if (isset($_REQUEST['leadid'])){
      $body->set_template("templates/csr/clientinfo.html");
      include('scripts/csr/clientinfo.php');
    } else if ($_POST) {
      echo $body->create();
      $body->set_template("templates/csr/searchresults.html");
      include('scripts/csr/search.php');
    }
    break;
  case 'new_customer':
    $body->set_template("templates/csr/newcustomer.html");
    break;
  default:
    $body->set_template("templates/csr/search.html");
}
echo $body->create();

// set the footer, if any.
$body->set_template("templates/csr/footer.html");
echo $body->create();