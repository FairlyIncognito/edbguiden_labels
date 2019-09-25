<?php
require('code/config.php');

// Check if company IP is stored in the companies array
if(!isset($companies[$companyIp])) {
    echo $header;
    echo $customerNotFound;
    echo $footer;
    die('401');
}

if($_SERVER['REQUEST_URI'] === '/') {
    // If there is no available formats, return error and die
    if(count($availableFormats) === 0) {
        echo $header;
        echo $formatsNotFound;
        echo $footer;
        die('No formats available');
        
    }
    // If there is only one available format, redirect to it
    elseif(count($availableFormats) === 1) {
        header("Location: /format/" . $availableFormats['0'] . '/');
    } else {
        // If there are multiple formats, show each available format
        echo $header;

        // Remove everything that is not a directory in the array
        foreach($availableFormats as $value) {
            if (is_dir($appPath . $value) === false) {
                continue;
            }

            echo "<a href='format/" . $value . "'>";
            echo $value;
            echo "</a>";    
        }

        echo $footer;
    }
    die();
}

if(preg_match_all('/\/format\/(.+?)($|\/(.+)|\/)/', $uri, $regex)) {
    $selectedFormat = $regex[1][0];

    if(!in_array($selectedFormat, $availableFormats)) {
        echo $header;
        http_response_code(404);
        echo $footer;
        die('404 Not found');
        
    }

    if(!empty($regex[3][0])) {
        $file = $appPath . $selectedFormat . $regex[2][0];

        if(file_exists($file)) {
           serveFile($file);
        } else {
            echo $header;
            http_response_code(404);
            echo $footer;
            die('404 File not found');
            
        }
    }

    $getFormat = @file_get_contents($appPath . $selectedFormat . '/index.html');
    if($getFormat === FALSE) {
        echo $header;
        echo $formatsNotFound;
        echo $footer;
        die();
    } else {
        echo $getFormat;
        die(); 
    };
}

if(file_exists(trim($uri, '/'))) {
    serveFile(trim($uri, '/'));
} else {
    die(trim($uri, '/'));
}

echo $header;
http_response_code(404);
echo $footer;
die('404 File not found');