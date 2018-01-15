<?php

require_once("includes/cookie.php");
require_once("includes/template.php");

$body = new Template();
$cookie = new CookieInfo("TP");

if ($cookie->check()) {
	$cookie->getcookies();
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

$body->set_template("templates/login.html");
$body->add_key('errmsg','');
echo $body->create();

?>
