<?php
require('companies.php');
// Enable Error Reporting
$errors = true; # display errors toggle
if($errors === true) {
    ini_set('display_errors', 1);
    error_reporting(E_ALL);
}
// Get browser path
$uri = $_SERVER['REQUEST_URI'];
// Scan dir for available formats in app path
$availableFormats = scandir($appPath);
// Format the formats array
$availableFormats = array_slice($availableFormats, 2);

// Store header.html in variable
$header = file_get_contents('includes/header.html');
// Store footer.html in variable
$footer = file_get_contents('includes/footer.html');
// Store customerNotFound.html in variable
$customerNotFound = file_get_contents('includes/customerNotFound.html');
// Store formatsNotFound.html in variable
$formatsNotFound = file_get_contents('includes/formatsNotFound.html');