<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$children = new Children($conn);
// get $_GET data
$error = [];
$returnData = [];

//-----------------function para makapagbasa by ID
if (array_key_exists("childrenid", $_GET)) {
  $children->children_aid = $_GET['childrenid'];
  checkId($children->children_aid);
  $query = checkReadById($children);
  http_response_code(200);
  getQueriedData($query);
}

//------------------para mabasa lahat
if (empty($_GET)) {
  $query = checkReadAll($children);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();