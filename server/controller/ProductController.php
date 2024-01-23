<?php

class ProductController
{
    private $conn = null;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function getAll()
    {
        $query = "SELECT * FROM Product";
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
        $response = array();
        $query = "SELECT * FROM product WHERE ProductID = '$id' LIMIT 1";
        $result = mysqli_query($this->conn, $query);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $response["ProductID"] = $row["ProductID"];
                $response["ProductName"] = $row["ProductName"];
                $response["Description"] = $row["Description"];
                $response["Price"] = $row["Price"];
                $response["CategoryID"] = $row["CategoryID"];
            }
        }
        $response["Variation"] = array();
        $query = "SELECT * FROM variation WHERE ProductID = '$id'";
        $result = mysqli_query($this->conn, $query);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                array_push($response["Variation"], array(
                    "VariationID" => $row["VariationID"],
                    "Color" => $row["Color"],
                    "Size" => $row["Size"],
                    "Stock" => $row["Stock"]
                ));
            }
        }
        $response["MediaContent"] = array();
        $query = "SELECT * FROM mediacontent WHERE ProductID = '$id'";
        $result = mysqli_query($this->conn, $query);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                array_push($response["MediaContent"], array(
                    "MediaID" => $row["MediaID"],
                    "FileName" => $row["FileName"]
                ));
            }
        }

        return $response;
    }

    public function insertSingle()
    {
        $productName = $_POST['ProductName'];
        $description = $_POST['Description'];
        $price = $_POST['Price'];
        $categoryID = $_POST['CategoryID'];
        $query = "INSERT INTO Product(ProductName, Description, Price, CategoryID) VALUES('$productName', '$description', '$price', '$categoryID')";
        mysqli_query($this->conn, $query);
        return mysqli_insert_id($this->conn);
    }
}
