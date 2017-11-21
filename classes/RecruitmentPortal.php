<?php
require_once dirname(__FILE__) . "/../../lib/Portal.php";

/**
 * ManagePayment Advise Page
 *
 * @author Allanaire Tapion
 *
 */
class RecruitmentPortal extends Portal
{

    public function render()
    {

        $smarty = $this->smarty;

        $smarty->assign("ADMIN_ID", $_SESSION["admin_id"]);
        $smarty->assign("BASE_API_URL", $this->getAPIURL());
        if (TEST) {
            $smarty->assign("WS_URL", "ws://test.api.remotestaff.com.au");
        } else if (STAGING) {
            $smarty->assign("WS_URL", "ws://staging.api.remotestaff.com.au");
        } else {
            $smarty->assign("WS_URL", "wss://api.remotestaff.com.au");
        }
        if (isset($_GET["slim_url"]) && TEST) {
            $smarty->assign("BASE_SLIM_URL", $_GET["slim_url"]);
        } else {
            $smarty->assign("BASE_SLIM_URL", $this->getSlimURL());

        }

        $this->setAdmin();

        $smarty->display("index.tpl");


    }

    protected function checkAuth()
    {

//        if(!isset($_SESSION['agent_no'])){
//            if (!isset($_SESSION["admin_id"])){
//                header("location:/portal/seo_v2/#/seo/login");
//            }
//        }else{
//            $_SESSION['status'] = "BusinessDeveloper";
//        }
//        if (!isset($_SESSION["agent_no"])){
//            if($_SESSION['status'] <> "HR" && $_SESSION['status'] <> "FULL-CONTROL"){
//                echo "This page is for HR usage only.";
//                exit;
//            }
//        }

    }

    protected function setAdmin()
    {
        if(isset($_SESSION["admin_id"]) || isset($_SESSION["agent_no"])){
            $db = $this->db;
            if ($_SESSION["status"]=="BusinessDeveloper"){
                $admin_id  = $_SESSION["agent_no"];
                $admin = $db->fetchRow($db->select()->from("agent", array("fname AS admin_fname", "lname AS admin_lname", "agent_no AS admin_id", "status"))->where("agent_no = ?", $admin_id));
                $this->smarty->assign("admin", $admin);

            }else{
                $admin_id  = $_SESSION["admin_id"];
                $admin = $db->fetchRow(
                    $db->select()
                        ->from("admin", array(
                                "admin_fname",
                                "admin_lname",
                                "admin_id",
                                "status",
                                "userid")
                        )
                        ->joinLeft("personal", "personal.userid = admin.userid", array(
                            "image"
                        ))
                        ->where("admin_id = ?", $admin_id));
                $this->smarty->assign("admin", $admin);

            }
        }

    }
}
