<?php

class OrderController
{
    private $conn = null;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function insert()
    {
        $CustomerID = $_POST['CustomerID'];
        $CartArray = json_decode($_POST['CartArray'], true);
        $CartID = -1;
        for ($i = 0; $i < count($CartArray); ++$i) {
            $ProductID = $CartArray[$i]["ProductID"];
            $Amount = $CartArray[$i]["Amount"];
            $VariationID = $CartArray[$i]["VariationID"];
            $query = "INSERT INTO `cart`(`CartID`, `ProductID`, `Amount`, `CustomerID`, `VariationID`) VALUES ('$CartID','$ProductID','$Amount','$CustomerID','$VariationID')";
            if ($CartID == -1) {
                $query = "INSERT INTO `cart`(`ProductID`, `Amount`, `CustomerID`, `VariationID`) VALUES ('$ProductID','$Amount','$CustomerID','$VariationID')";
            }
            mysqli_query($this->conn, $query);
            if ($CartID == -1) {
                $CartID = mysqli_insert_id($this->conn);
            }
        }

        $query = "INSERT INTO `orders`(`orderStatus`, `CartID`) VALUES ('NOT DELIVERED','$CartID')";
        mysqli_query($this->conn, $query);
        return mysqli_insert_id($this->conn);
    }

    public function getAll()
    {
        $query = "SELECT users.Name, customer.DeliveryAddress, orders.OrderID, orders.orderStatus FROM `orders` " .
            "LEFT JOIN (SELECT DISTINCT(CartID), CustomerID FROM cart) AS cartParse ON orders.CartID = cartParse.CartID " .
            "LEFT JOIN customer ON customer.CustomerID = cartParse.CustomerID " .
            "LEFT JOIN users ON customer.UserID = users.UserID";
        $result = mysqli_query($this->conn, $query);
        $response = array();
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                array_push($response, $row);
            }
        }
        return $response;
    }
}
