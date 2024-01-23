<?php

class CategoryController
{
    private $conn = null;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function getAll()
    {
        $query = "SELECT * FROM Category";
        $result = mysqli_query($this->conn, $query);
        $resultArr = array();
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                array_push($resultArr, $row);
            }
        }
        return $resultArr;
    }

    public function getSingle($id)
    {
        $query = "SELECT * FROM Category WHERE CategoryID = '$id' LIMIT 1";
        $result = mysqli_query($this->conn, $query);
        return mysqli_fetch_assoc($result);
    }

    public function getProducts($categoryID)
    {
        $response = array();
        $query = "SELECT fileParser.FileName, product.ProductID, product.Price, product.ProductName " .
            "FROM (SELECT FileName, ProductID FROM mediacontent GROUP BY ProductID) AS fileParser " .
            "INNER JOIN product ON fileParser.ProductID = product.ProductID WHERE product.CategoryID = '$categoryID'";
        $result = mysqli_query($this->conn, $query);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                array_push($response, $row);
            }
        }
        return $response;
    }

    public function insertSingle()
    {
        $categoryName = $_POST['CategoryName'];       
        $targetID = $_POST['TargetID'];
        $query = "INSERT INTO Category(CategoryName, targetID) VALUES('$categoryName', '$targetID')";
        mysqli_query($this->conn, $query);
        return mysqli_insert_id($this->conn);
    }

}
