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

    $rating->name = $_POST['name'];
    $rating->surname = $_POST['surname'];
    $rating->rate_mark = $_POST['rating'];
    $rating->rate_text = $_POST['rate-text'];


    if ($rating-> create()) {
        http_response_code(201);
        echo json_encode(array("message" => "отзыв оставлен"), JSON_UNESCAPED_UNICODE);
    }
    else {
        http_response_code(503);

        echo json_encode(array("message" => "Невозможно отправить отзыв."), JSON_UNESCAPED_UNICODE);
    }


?>