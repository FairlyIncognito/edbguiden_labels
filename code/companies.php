<?php
// Store remote IP in variable
$companyIp = $_SERVER['REMOTE_ADDR'];

// Array of available companies
$companies = [
    $companyIp => 'mjpb',
    '100.100.100.100' => 'mjpb',
];

// Set app path
$appPath = 'apps/' . $companies[$companyIp] . '/';