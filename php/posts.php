<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {return;}
header('Content-Type: application/json');
if (isset($_SESSION['user_id']) === false)echo json_encode(array("status" => "n"));
$conn = new mysqli("", "",
    "", "");
if($_POST['posts'] == "read"){
    $stmt = $conn->prepare("
    SELECT users.name AS creator, posts.content, posts.created_at 
    FROM posts 
    INNER JOIN users ON posts.user_id = users.user_id ORDER BY posts.created_at DESC LIMIT 10
");
    $stmt->execute();
    $result = $stmt->get_result();

    $rows = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($rows);
}elseif($_POST['posts'] == "create"){
    $stmt = $conn->prepare("INSERT INTO posts (user_id, content) VALUES (?, ?)");
    $stmt->bind_param("is", $_SESSION['user_id'], $_POST['content']);
    if ($stmt->execute() === TRUE) {
        echo json_encode(array("status" => "Success"));
    } else {
        echo json_encode(array("status" => "Failed to create"));
    }
}



$conn->close();