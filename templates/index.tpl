<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Page title set in pageTitle directive -->
    <title page-title></title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Font awesome -->
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">

    <!-- Main Inspinia CSS files -->
    <link href="css/animate.css" rel="stylesheet">
    <link id="loadBefore" href="css/style.css" rel="stylesheet">
    <link href="css/timesheet.css" rel="stylesheet">



</head>

<!-- ControllerAs syntax -->
<!-- Main controller with serveral data used in Inspinia theme on diferent view -->

{literal}
<body ng-controller="MainCtrl as main" class="{{$state.current.data.specialClass}} mini-navbar mini-bar" landing-scrollspy id="page-top">
{/literal}
<link href="css/new-invoice.css" rel="stylesheet">
<input type="hidden" name="BASE_API_URL" id="BASE_API_URL" value="{$BASE_API_URL}"/>
<input type="hidden" name="BASE_SLIM_URL" id="BASE_SLIM_URL" value="{$BASE_SLIM_URL}"/>
<input type="hidden" name="NJS_API_URL" id="NJS_API_URL" value="{$NJS_API_URL}"/>
<input type="hidden" name="ADMIN_ID" id="ADMIN_ID" value="{$ADMIN_ID}"/>
<input type="hidden" name="ADMIN_USERID" id="ADMIN_USERID" value="{$admin.userid}"/>
<input type="hidden" name="ADMIN_IMAGE" id="ADMIN_IMAGE" value="{$admin.image}"/>
<input type="hidden" name="DEFAULT_PAGE" id="DEFAULT_PAGE" value="{$DEFAULT_PAGE}"/>
<input type="hidden" name="WS_URL" id="WS_URL" value="{$WS_URL}"/>
<input type="hidden" name="ADMIN_NAME" id="ADMIN_NAME" value="{$admin.admin_fname} {$admin.admin_lname}"/>
<!-- Main view  -->
<div ui-view></div>

<!--Autobahn -->
<script src="//autobahn.s3.amazonaws.com/js/autobahn.min.js"></script>

<script type="text/javascript" src="js/dropzone.js"></script>
<!-- Main Angular scripts-->
<script src="js/require/require.min.js" data-main="js/bootstrap.js"></script>

</body>
</html>
