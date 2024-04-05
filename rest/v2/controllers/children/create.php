<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$children = new Children($conn);
// get should not be present
if (array_key_exists("childrenid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data

//-----------checkIndex = para macheck kung may naka input na data
$children->children_is_active = 1;
$children->children_name = checkIndex($data, "children_name");
$children->children_email = checkIndex($data, "children_email");
$children->children_address = checkIndex($data, "children_address");
$children->children_created = date("Y-m-d H:i:s");
$children->children_datetime = date("Y-m-d H:i:s");
// string value convert to lower case
// $column_name = strtolower(str_replace(" ", "_", $data["act_name"]));
// check name
// isNameExist($act, $act->act_name);
// create
$query = checkCreate($children);
// add column
// checkAddColumn($act, $column_name);
// update column value after adding
// checkUpdateColumnValue($act, $column_name);
returnSuccess($children, "children", $query);
