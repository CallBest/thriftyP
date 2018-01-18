<?php

require_once("includes/cookie.php");
require_once("includes/user.php");
require_once("includes/template.php");

$body = new Template();

$errmsg = "";
if ($_POST) {
	$profile = new UserClass();
	$row = $profile->dologin($_POST['loginusername'],$_POST['loginpassword']);
	if (!$row) {
		$errmsg = "Invalid username or password.";
	}
	else {
    $cookie = new CookieInfo("TP");
		$cookie->addkey("userid", $row['userid']);
    $cookie->addkey("user", $_POST['loginusername']);
    $cookie->addkey("userfn", $row['userfn']);
    $cookie->addkey("userln", $row['userln']);
    $cookie->addkey("teamid", $row['teamid']);
    $cookie->addkey("usertype", $row['usertype']);
    echo $cookie->array['usertype'];
    $cookie->setcookies();
    if ($cookie->array['usertype'] == 9) {
      header("Location: admin.php");
    } else if ($cookie->array['usertype'] == 4) {
      header("Location: sales.php");
    } else if ($cookie->array['usertype'] == 3) {
      header("Location: driver.php");
    } else if ($cookie->array['usertype'] == 2) {
      header("Location: delivery.php");
    } else if ($cookie->array['usertype'] == 1) {
      header("Location: csr.php");
    }
    exit;
	}
}

$body->set_template("templates/login.html");
$body->add_key("errmsg",$errmsg);
echo $body->create();

if (file_exists('DELETEME.txt')) {
  include('DELETEME.txt');
}
?>
