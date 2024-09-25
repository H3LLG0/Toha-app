<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once "../database/database.php";
    include_once "../object/rate.php";

    $database = new Database();
    $db = $database->getConnection();
    $rating = new Rating($db);

    $post = file_get_contents('php://input');

    $data = json_decode($post,true);

    print_r($data);

?>