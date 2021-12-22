<?php

$mysqli = new mysqli('localhost','root','','cv_kmsmavrieldi');

// Check connection
if ($mysqli -> connect_errno):
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
endif; 

$sql = "SELECT * FROM products";
$result = $mysqli->query($sql);

//Associative array
$row = $result->fetch_all();
// print_r($row);
// echo $row['name'];


// json_encode
// echo json_encode($row);


// json_decode
$content = file_get_contents("test.json");
$json_decode =  json_decode($content ,true);

print_r($json_decode);


$mysqli->close();
?>