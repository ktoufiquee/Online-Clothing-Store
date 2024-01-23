<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$status = session_status();
if ($status == PHP_SESSION_NONE) {
    session_start();
}

require "./utils/database.php";
require "./controller/ProductController.php";
require "./controller/CategoryController.php";
require "./controller/VariationController.php";
require "./controller/UserController.php";
require "./controller/MediaController.php";
require "./controller/ReviewController.php";
require "./controller/TargetAudienceController.php";
require "./controller/OrderController.php";

$db = new database();
$conn = $db->getConnection();

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);
$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($uri[1] == 'Product') {
    $productController = new ProductController($conn);
    if ($requestMethod == 'POST') {
        echo json_encode($productController->insertSingle());
    } else if ($requestMethod == 'GET') {
        if (!isset($uri[2])) {
            echo json_encode($productController->getAll());
        } else {
            echo json_encode($productController->getSingle($uri[2]));
        }
    }
} else if ($uri[1] == 'Category') {
    $categoryController = new CategoryController($conn);
    if ($requestMethod == 'GET') {
        if (count($uri) > 2) {
            if ($uri[2] == 'Product') {
                echo json_encode($categoryController->getProducts($uri[3]));
            } else {
                echo json_encode($categoryController->getSingle($uri[2]));
            }
        } else {
            echo json_encode($categoryController->getAll());
        }
    } else if ($requestMethod == 'POST') {
        echo json_encode($categoryController->insertSingle());
    }
} else if ($uri[1] == 'Variation') {
    $variationController = new VariationController($conn);
    if ($requestMethod == 'GET') {
        echo json_encode($variationController->getAll($uri[2]));
    } else {
        echo json_encode($variationController->insertAll($uri[2]));
    }
} else if ($uri[1] == 'User') {
    $userController = new UserController($conn);
    if ($requestMethod == 'POST') {
        if (count($uri) > 3 && $uri[2] == 'Login' && $uri[3] == 'Customer') {
            echo json_encode($userController->LoginCustomer());
        } else if (count($uri) > 3 && $uri[2] == 'Login' && $uri[3] == 'Admin') {
            echo json_encode($userController->LoginAdmin());
        } else if (count($uri) > 2 && $uri[2] == 'Customer') {
            echo json_encode($userController->insertCustomer());
        }
    }
    if ($requestMethod == 'GET') { {
            if ($uri[2] == 'Customer') {
                echo json_encode($userController->getCustomers());
            } else if ($uri[2] == 'Employee') {
                echo json_encode($userController->getEmployees());
            }
        }
    }
} else if ($uri[1] == 'Media') {
    $mediaController = new MediaController($conn);
    if ($requestMethod == 'POST') {
        echo json_encode($mediaController->insertAll());
    } else if ($requestMethod == 'GET') {
        echo json_encode($mediaController->getAll($uri[2]));
    }
} else if ($uri[1] == 'Review') {
    $reviewController = new ReviewController($conn);
    if ($requestMethod == 'POST') {
        echo json_encode($reviewController->insert());
    } else if ($requestMethod == 'GET') {
        echo json_encode($reviewController->getAll($uri[2]));
    }
} else if ($uri[1] == 'TargetAudience') {
    $targetAudienceController = new TargetAudienceController($conn);
    if ($requestMethod == 'GET') {
        if (count($uri) > 2) {
            echo json_encode($targetAudienceController->getSingle($uri[2]));
        } else {
            echo json_encode($targetAudienceController->getAll());
        }
    } else if ($requestMethod == 'POST') {
        echo json_encode($targetAudienceController->insertSingle());
    }
} else if ($uri[1] == 'Order') {
    $orderController = new OrderController($conn);
    if ($requestMethod == 'POST') {
        echo json_encode($orderController->insert());
    }
    else if($requestMethod == 'GET') {
        echo json_encode($orderController->getAll());
    }
}


$db->closeConnection();
