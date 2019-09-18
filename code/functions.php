<?php
require_once('config.php');
require_once('dbConn.php');

// Check if we are in a local environment
function is_localhost() {
		
    // Set the array for testing
    $localhost = array('127.0.0.1', '::1');

    // Check if the server is in the array
    if(in_array( $_SERVER['REMOTE_ADDR'], $localhost)) {
        return true;
    } else {
        return false;
    }
}


// Get customer information depending on IP
function getCustomerFromIp($conn, $ip) {
    $sql = "
            SELECT 
            customers.customerId,
            customers.customerName,
            customers.customerIp
            
            FROM 
            customers
            
            WHERE
            customerIp = '$ip'
            ";
    if($result = $conn->query($sql)) {
        return $result;
    } else {
        return FALSE;
    }
}

// Get customer information depending on ID
function getCustomerFromId($conn, $id) {
    $sql = "
            SELECT 
            customers.customerId,
            customers.customerName,
            customers.customerIp
            
            FROM 
            customers
            
            WHERE
            customerId = '$id'
            ";
    if($result = $conn->query($sql)) {
        return $result;
    } else {
        return FALSE;
    }
}


// Customer function
function serveLabels($objConnection, $testing) {
    if($testing === true) {
        
        // Visitor IP for testing purposes
        $visitor = "100.100.100.100";
        $result = getCustomerFromIp($objConnection, $visitor);
        while($row = $result->fetch_object()) {
            return $row->customerId;
        }


    } else {
        // Actual visitor IP
        $visitor = $_SERVER['REMOTE_ADDR'];
        
        $result = getCustomerFromIp($objConnection, $visitor);
        while($row = $result->fetch_object()) {
            return $row->customerId;
        }
        
    };
}