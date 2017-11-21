<?php
include "../conf/zend_smarty_conf.php";
require_once "classes/RecruitmentPortal.php";
$page = new RecruitmentPortal($db);
$page->render();
