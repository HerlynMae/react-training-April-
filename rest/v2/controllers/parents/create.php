<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$parents = new Parents($conn);
// get should not be present
if (array_key_exists("parentsid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data

//-----------checkIndex = para macheck kung may naka input na data
$parents->parents_is_active = 1;
$parents->parents_name = checkIndex($data, "parents_name");
$parents->parents_email = checkIndex($data, "parents_email");
$parents->parents_address = checkIndex($data, "parents_address");
$parents->parents_created = date("Y-m-d H:i:s");
$parents->parents_datetime = date("Y-m-d H:i:s");
// string value convert to lower case
// $column_name = strtolower(str_replace(" ", "_", $data["act_name"]));
// check name
// isNameExist($act, $act->act_name);
// create
$query = checkCreate($parents);
// add column
// checkAddColumn($act, $column_name);
// update column value after adding
// checkUpdateColumnValue($act, $column_name);
returnSuccess($parents, "parents", $query);
