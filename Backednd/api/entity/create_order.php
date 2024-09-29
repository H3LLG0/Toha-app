<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once "../database/database.php";
    include_once "../object/Order.php";

    $database = new Database();
    $db = $database->getConnection();
    $order = new Order($db);

    $order->name = $_POST['name'];
    $order->surname = $_POST['surname'];
    $order->pathronumic = $_POST['pathronumic'];
    $order->phone = $_POST['phone'];
    $order->email = $_POST['email'];


    if ($order-> create()) {
        http_response_code(201);
        echo json_encode(array("message" => "заказ создан, с вами свяжется оператор для обсуждений деталей заказа"), JSON_UNESCAPED_UNICODE);
    }
    else {
        http_response_code(503);

        echo json_encode(array("message" => "Невозможно создать заказ."), JSON_UNESCAPED_UNICODE);
    }


?>