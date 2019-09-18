<?php
// Database information variables
$host = 'localhost';
$database = 'labels';
$user = 'labels';
$password = 'GNRjwzxBFzqzn0fu';



// URI to array
$uri = explode("/", $_SERVER['REQUEST_URI']);

foreach ($uri as $key => $value) {
    unset($uri[$key]);
    if ($value == '') {
        break;
    }
}
$uri = array_values($uri);



// Root variable
$root = $_SERVER['REQUEST_URI'];
// trim trailing forward slash
$root = rtrim($root, '/');


// Enable Error Reporting
$errors = true; # display errors toggle
if($errors === true) {
    ini_set('display_errors', 1);
    error_reporting(E_ALL);
}