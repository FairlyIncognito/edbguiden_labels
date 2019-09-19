<?php
// Store remote IP in variable
$companyIp = $_SERVER['REMOTE_ADDR'];

// Check if localhost
if(is_localhost() === TRUE) { 
    $companies = [
        $companyIp => 'mjpb',
    ];
} else {
    // Array of available companies
    $companies = [
        '100.100.100.100' => 'mjpb',
    ];
}

// Set app path
$appPath = 'apps/' . $companies[$companyIp] . '/';