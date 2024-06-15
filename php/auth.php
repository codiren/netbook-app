<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {return;}
header('Content-Type: application/json');
$conn = new mysqli("", "",
    "", "");

if ($_POST['auth'] == "login") {
    $name = $_POST['name'];
    $pass = $_POST['pass'];
    $stmt = $conn->prepare("SELECT * FROM users WHERE name = ? AND pass = ?");
    $stmt->bind_param("ss", $name, $pass);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows === 1) {
        $data = $result->fetch_assoc();
        $_SESSION['name'] = $name;
        $_SESSION['user_id'] = $data['user_id'];
        echo json_encode(array("status" => "y"));
    } else {
        echo json_encode(array("status" => "n"));
    }
    $stmt->close();
} elseif ($_POST['auth'] == "check") {
    if (isset($_SESSION['user_id'])) {
        echo json_encode(array("status" => "y"));
    }else{
        echo json_encode(array("status" => "n"));
    }
} elseif ($_POST['auth'] == "logout") {
    if (isset($_SESSION['user_id'])) {
        session_unset();
    }
} elseif ($_POST['auth'] == "register") {
    $name = $_POST['name'];
    $pass = $_POST['pass'];
    $stmt = $conn->prepare("INSERT INTO users (name, pass) VALUES (?, ?)");
    $stmt->bind_param("ss", $name, $pass);
    if ($stmt->execute() === TRUE) {
        echo json_encode(array("status" => "Success"));
    } else {
        echo json_encode(array("status" => "Failed to register"));
    }
    $stmt->close();
}
$conn->close();