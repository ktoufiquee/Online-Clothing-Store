<?php

require "./utils/cors.php";
require "./utils/database.php";
require "./controller/ProductController";

enable_cors();

$db = new database();
$conn = $db->getConnection();

$productController = new ProductController($conn);
echo $productController->getAll();

$db->closeConnection();


