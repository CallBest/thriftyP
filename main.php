<?php

require_once('includes/template.php');
$body = new Template();

$body->set_template('templates/clientinfo.html');
echo $body->create();

?>