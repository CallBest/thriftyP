<?php

require_once("includes/cookie.php");
require_once("includes/template.php");

$body = new Template();
$body->set_template("templates/login.html");
$body->add_key('errmsg','');
echo $body->create();


if (file_exists('DELETEME.txt')) {
  include('DELETEME.txt');
}
?>
