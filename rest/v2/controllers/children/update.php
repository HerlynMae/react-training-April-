<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$children = new Children($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("childrenid", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $children->children_aid = $_GET['childrenid'];
  $children->children_name = checkIndex($data, "children_name");
  $children->children_email = checkIndex($data, "children_email");
  $children->children_address = checkIndex($data, "children_address");
  $children->settings_created = date("Y-m-d H:i:s");
  $children->settings_datetime = date("Y-m-d H:i:s");
  checkId($children->children_aid);
  // update
  //----makukuha na ng database dahil sa query
  $query = checkUpdate($children);
  returnSuccess($children, "children", $query);
}

// return 404 error if endpoint not available
checkEndpoint();