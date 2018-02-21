<?php
ini_set( "display_errors", false );
date_default_timezone_set( "America/New_York" );

define('DBSERV','localhost');
define('DBUSER','propanemaster');
define('DBPASS','propanemaster125!');
define('DBNAME','thriftypropane');
define('TABLE_USERS','thriftypropane.users');
define('TABLE_TEAMS','thriftypropane.teams');
define('TABLE_USERLOGS','thriftypropane.userlogs');
define('TABLE_DISPO','thriftypropane.dispositions');
define('TABLE_CLIENTS','thriftypropane.masterfile');
define('TABLE_CLIENTINFO','thriftypropane.clientinfo');
define('TABLE_HISTORY','thriftypropane.clienthistory');
define('TABLE_ORDERS','thriftypropane.orders');
define('TABLE_DELIVERIES','thriftypropane.deliveries');
?>
