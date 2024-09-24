<?php
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

        include_once "../database/database.php";
        include_once "../object/rate.php";
    
        $database = new Database();
        $db = $database->getConnection();
        $user = new Rating($db);

        $result = $user->read();

        echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>