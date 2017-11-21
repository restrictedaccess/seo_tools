<?php
include './conf/zend_smarty_conf.php';
include 'conf.php';
$userid=$_SESSION['userid'];
$is_v2 = false;
$is_admin = false;
if(isset($_SESSION["is_v2"]) || isset($_SESSION["admin_id"])){
	$is_v2 = true;
}

if(isset($_SESSION["admin_id"])){
	$is_admin = true;
}



$agent_no=$_SESSION['agent_no'];
$admin_id = $_SESSION['admin_id'];
$client_id = $_SESSION['client_id'];
$manager_id = $_SESSION['manager_id'];
$userid="";
$agent_no="";
$admin_id ="";
$client_id="";
$manager_id="";
$_SESSION['userid']="";
$_SESSION['agent_no']="";
$_SESSION['admin_id']="";
$_SESSION['client_id']="";
$_SESSION['manager_id']="";
session_destroy();
$_SESSION = array();


header("location:/portal/seo_v2/#/admin/login");
if($is_v2){
	if($is_admin){
	} else{
		//header("location:/portal/v2/secure/logout");
	}
	
} else{
	//header("location:/portal/");
}

?>