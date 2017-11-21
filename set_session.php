<?php

include "../conf/zend_smarty_conf.php";


$_SESSION['admin_id'] = $_POST["admin_id"];
$_SESSION['status'] = $_POST['status'];
$_SESSION['emailaddr'] = $_POST["email"];


global $db;

$admin_details = $db->fetchRow(
    $db->select()
    ->from("admin", array("admin_id", "admin_fname", "admin_lname", "admin_email"))
    ->where("admin_id = ?", $_POST["admin_id"])
);


echo json_encode(array("succes" => true, "admin_details" => $admin_details));



