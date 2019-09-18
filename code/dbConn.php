<?php
// Require config file
require_once('config.php');

// Create new mysqli connection
$objConnection = new mysqli($host, $user, $password, $database);

// Test database connection
if($objConnection->connect_error){
    die('A connection to the database could not be established ' . $objConnection->connect_errno . ' ' . $objConnection->connect_error);
}
// Set proper charset
$objConnection->set_charset('utf8');