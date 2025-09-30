<?php
    header("content-type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-type");

    $host = "localhost";
    $db = "employee_db";
    $user = "root";
    $pass = "";
    $dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

    try{
        $pdo = new PDO($dsn, $user, $pass);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $e){
        echo json_encode(["error" => $e-> getMessage()]);
        exit();
    }

    if($_SERVER["REQUEST_METHOD"] === "OPTIONS"){
        exit(0);
    }

    $requestMethod = $_SERVER["REQUEST_METHOD"];
    switch($requestMethod){
        case 'GET':
            try{
                $stmt = $pdo->query("SELECT empID, empname, DepartID, PosID FROM employees ORDER BY empID ASC");
                $employees = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($employees);
            }catch(PDOException $e){
                http_response_code(500);
                echo json_encode(["error" => $e->getMessage()]);
            }
            
            break;
        
        default:
            http_response_code(405);
            echo json_encode(['message'=>'Method not allowed']);
            break;
    }
?>