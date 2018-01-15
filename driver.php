<?php

require_once("includes/cookie.php");
require_once("includes/template.php");

$body = new Template();
$cookie = new CookieInfo("TP_driver");

// check existing credentials before proceeding with tha application
// redirect to login if no valid credentials found 
if ($cookie->check()) {
  $cookie->getcookies();
  $userid = $cookie->array['userid'];
  $body->add_key('userid',$userid);
	$body->add_key('firstname',$cookie->array['firstname']);
	$body->add_key('lastname',$cookie->array['lastname']);
//} else {
//  header('Location: index.php');
}

// set the header menu
$body->set_template("templates/driver/header.html");
echo $body->create();

// set the main content
$page = isset($_REQUEST['show']) ? strtolower(str_replace("'","",$_REQUEST['show'])) : 'dashboard';
switch($page){
  case 'search':
  $body->set_template("templates/driver/clientinfo.html");
    break;
  default:
    $body->set_template("templates/driver/main.html");
}
echo $body->create();

// set the footer, if any.
$body->set_template("templates/driver/footer.html");
echo $body->create();