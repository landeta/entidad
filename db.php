<?php
header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: Origin");
// header("Content-Type: application/json; charset=UTF-8");

header("Access-Control-Allow-Headers: Origin, Content-type, charset=utf-8");
$servername = "mysql.hostinger.com.ar";
$username = "u136510853_admin ";
$password = "+electron66";
$dbname = "u136510853_coame";
$conn = new mysqli($servername, $username, $password, $dbname);
?>
