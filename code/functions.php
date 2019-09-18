<?php
require_once('config.php');

function serveFile($file) {
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
}