<?php
require_once('code/functions.php');

$companyIp = $_SERVER['REMOTE_ADDR'];
$uri = $_SERVER['REQUEST_URI'];

// if(is_localhost() === false) { 
//     $companyIp = '1234';
// }

$companies = [
    $companyIp => 'mjpb',
    '100.100.100.100' => 'mjpb',
];

if(!isset($companies[$companyIp])) {
    die('401');
}

$appPath = 'apps/' . $companies[$companyIp] . '/';

$availableFormats = scandir($appPath);

$availableFormats = array_slice($availableFormats, 2);

if($_SERVER['REQUEST_URI'] === '/') {
    if(count($availableFormats) === 0) {
        die('No formats available');
    }
    elseif(count($availableFormats) === 1) {
        header("Location: /format/" . $availableFormats['0'] . '/');
    } else {
        var_dump($availableFormats);
    }
    die();
}

if(preg_match_all('/\/format\/(.+?)($|\/(.+)|\/)/', $uri, $regex)) {
    $selectedFormat = $regex[1][0];
    // echo "<pre>";
    // var_dump($regex);
    // echo "</pre>";

    if(!in_array($selectedFormat, $availableFormats)) {
        die('404 Not found');
    }

    if(!empty($regex[3][0])) {
        $file = $appPath . $selectedFormat . $regex[2][0];

        if(file_exists($file)) {
            $ext = pathinfo($file, PATHINFO_EXTENSION);
            if($ext === 'js') {
                header("Content-Type: application/javascript");
            }
            elseif($ext === 'css') {
                header("Content-Type: text/css");
            } else {
                header("Content-Type: " . mime_content_type($file));
            }
            
            header("Content-Length: " . filesize($file));
            
            echo file_get_contents($file);
            die();

        } else {
            http_response_code(404);
            die('404 File not found');
        }
    }

    echo file_get_contents($appPath . $selectedFormat . '/index.html');
    die();
}

http_response_code(404);
die('404 File not found');