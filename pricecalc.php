<?php

require_once('includes/template.php');
$body = new Template();

$body->set_template('templates/pricecalc.html');
echo $body->create();

?>