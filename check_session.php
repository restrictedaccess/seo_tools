<?php
/**
 * Created by PhpStorm.
 * User: IT
 * Date: 10/4/2016
 * Time: 5:21 PM
 */
include "../conf/zend_smarty_conf.php";

$result = [];
$result["success"] = false;

if (isset($_SESSION["admin_id"])) {
    $result["success"] = true;


}
echo json_encode($result);
exit;