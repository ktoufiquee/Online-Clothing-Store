<?php

class VariationController {
    private $conn = null;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function getAll($id)
    {
        $query = "SELECT * FROM Variation WHERE ProductID = '$id'";
        $result = mysqli_query($this->conn, $query);
        $resultArr = array();
        if(mysqli_num_rows($result) > 0) {
            while($row = mysqli_fetch_assoc($result)) {
                array_push($resultArr, $row);
            }
        }
        return $resultArr;
    }

    public function insertAll($id)
    {
        $ProductID = $id;
        $resultArr = array();
        $variationList = json_decode($_POST['VariationList'], true);
        foreach($variationList as $value) {
            $value = $value;
            $query = "INSERT INTO Variation(Color, Size, Stock, ProductID) VALUES('$value[Color]', '$value[Size]', '$value[Stock]', '$ProductID')";
            mysqli_query($this->conn, $query);
            array_push($resultArr, mysqli_insert_id($this->conn));
        }
        return $resultArr;
    }
}