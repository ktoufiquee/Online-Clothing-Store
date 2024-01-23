<?php


class ReviewController
{
    private $conn = null;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function insert()
    {
        // $status = session_status();
        // if ($status == PHP_SESSION_NONE) {
        //     session_start();
        // }

        // if (isset($_SESSION["Permission"]) && $_SESSION["Permission"] == "Customer") {
        // $UserID = $_SESSION["UserID"];
        $CustomerID = $_POST["CustomerID"];
        $ProductID = $_POST["ProudctID"];
        $Rating = $_POST["Rating"];
        $Details = $_POST["Details"];

        try {

            $query = "SELECT * FROM review WHERE CustomerID=$CustomerID AND ProductID=$ProductID";
            $result = mysqli_query($this->conn, $query);
            if (mysqli_num_rows($result) > 0) {
                $query = "UPDATE review SET Rating=$Rating, Details='$Details' WHERE CustomerID=$CustomerID AND ProductID=$ProductID";
            } else {
                $query = "INSERT INTO review VALUES($CustomerID, $ProductID, '$Details', $Rating)";
            }
            mysqli_query($this->conn, $query);

            return array(
                "status" => "success",
                "error" => false,
                "message" => "Review Posted Successfully"
            );
        } catch (mysqli_sql_exception $ex) {
            return array(
                "status" => "error",
                "error" => true,
                "code" => $ex->getCode(),
                "message" => $ex->getMessage(),
                "query" => $query
            );
        }
        // } else {
        //     return array(
        //         "status" => "error",
        //         "error" => true,
        //         "message" => "You do not have privillage for this!",
        //     );
        // }
    }

    public function getAll($ProductID)
    {
        $reponse = array();
        $query = "SELECT cusDet.Name, " .
            "CASE WHEN Cart.CartID IS NULL THEN 'Unverified' ELSE 'Verified' END AS Verified, review.Rating, Review.Details FROM review " .
            "LEFT JOIN cart ON review.ProductID = Cart.ProductID AND review.CustomerID = Cart.CustomerID " .
            "LEFT JOIN ((SELECT Name, CustomerID from users LEFT JOIN customer ON users.UserID = customer.UserID) AS cusDet) " .
            "ON cusDet.CustomerID = review.CustomerID WHERE review.ProductID = $ProductID";

        $result = mysqli_query($this->conn, $query);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                array_push($reponse, $row);
            }
        }

        return $reponse;
    }
}
