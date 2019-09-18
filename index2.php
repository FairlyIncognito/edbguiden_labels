<?php
// Require config, database connection and functions files
require_once('code/config.php');
require_once('code/dbConn.php');
require_once('code/functions.php');

$trimmedPath = trim($_SERVER["REQUEST_URI"], 'apps/');
print_r($trimmedPath);

if(file_exists($trimmedPath)) {
    header("Content-Type: " . mime_content_type($trimmedPath) . " charset=UTF-8");
    header("Content-Length: " . filesize($trimmedPath));

    echo file_get_contents($trimmedPath);
    die();

};



/** 
 * TODO: Set testing to false 
 */
// first param: database connection
// second param: testing environment toggle
$visitor = serveLabels($objConnection, true);



// Check if visitor is localhost
/** 
 * TODO: Set statement back to check if true 
 */
if(is_localhost() === false) { 
    
// Include header
include('includes/header.php');
    include('includes/localhostDetected.php');
    // Include footer
include('includes/footer.php');
}


// Check if database returns true for the visitor ip
elseif(mysqli_num_rows($result = getCustomerFromId($objConnection, $visitor))) {        
    // Fetch customer name from id stored in database
    $id = $result->fetch_object();
    $customerName = $id->customerName;

    // Redirect to customer folder
    $path = "apps/" . $customerName;
    echo file_get_contents($path . '/index.html');

    
} else {
    
// Include header
include('includes/header.php');
    include('includes/customerNotFound.php');
    // Include footer
include('includes/footer.php');
};

