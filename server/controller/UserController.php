<?php


class UserController
{
    private $conn = null;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function insertCustomer()
    {
        $response = array();
        $Name = $_POST['Name'];
        $Phone = $_POST['Phone'];
        $Email = $_POST['Email'];
        $Password = $_POST['Password'];
        $Address = $_POST['Address'];
        try {
            $query = "INSERT INTO Users(Name, Phone, Email, Password) VALUES('$Name', '$Phone', '$Email', '$Password')";
            mysqli_query($this->conn, $query);

            $UserID = mysqli_insert_id($this->conn);
            $query = "INSERT INTO Customer(UserID, DeliveryAddress) VALUES('$UserID', '$Address')";
            mysqli_query($this->conn, $query);
            $CustomerTableError = mysqli_error($this->conn);

            $CustomerID = mysqli_insert_id($this->conn);
            $response = array(
                "status" => "success",
                "error" => false,
                "UserID" => $UserID,
                "CustomerID" => $CustomerID
            );
        } catch (mysqli_sql_exception $ex) {
            $response = array(
                "status" => "error",
                "error" => true,
                "code" => $ex->getCode(),
                "message" => $ex->getMessage()
            );
        }
        return $response;
    }


    public function LoginAdmin()
    {
        $Email = $_POST['Email'];
        $Password = $_POST['Password'];
        $query = "SELECT * FROM Users INNER JOIN Customer ON Users.UserID = Employee.UserID WHERE Email = '$Email' AND Password = '$Password'";

        $response = array();
        $result = mysqli_query($this->conn, $query);
        if (mysqli_num_rows($result) > 0) {
            $row = mysqli_fetch_assoc($result);

            $_SESSION["UserID"] = $row["UserID"];
            $_SESSION["EmployeeID"] = $row["EmployeeID"];
            $_SESSION["Permission"] = "Admin";

            $response = array(
                "status" => "success",
                "error" => false,
                "UserID" => $_SESSION["UserID"],
                "CustomerID" => $_SESSION["EmployeeID"],
                "Permission" => $_SESSION["Permission"],
                "Name" => $row["Name"]
            );
        } else {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Check your Email and Password!"
            );
        }
        return $response;
    }

    public function LoginCustomer()
    {

        $Email = $_POST['Email'];
        $Password = $_POST['Password'];

        $response = array();
        $query = "SELECT * FROM Users INNER JOIN Customer ON Users.UserID = Customer.UserID WHERE Email = '$Email' AND Password = '$Password'";
        $result = mysqli_query($this->conn, $query);
        if (mysqli_num_rows($result) > 0) {
            $row = mysqli_fetch_assoc($result);

            $_SESSION["UserID"] = $row["UserID"];
            $_SESSION["CustomerID"] = $row["CustomerID"];
            $_SESSION["Permission"] = "Customer";

            $response = array(
                "status" => "success",
                "error" => false,
                "UserID" => $_SESSION["UserID"],
                "CustomerID" => $_SESSION["CustomerID"],
                "Permission" => $_SESSION["Permission"],
                "Name" => $row["Name"]
            );
        } else {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Check your Email and Password!"
            );
        }
        return $response;
    }

    public function Logout()
    {
        $_SESSION["Username"] = null;
    }

    public function getCustomers()
    {
        $query = "SELECT Customer.CustomerID, Users.UserID, Users.Name, Users.Phone, Users.Email, Customer.DeliveryAddress
        FROM Customer INNER JOIN Users
        ON Customer.UserID = Users.UserID;";
        $result = mysqli_query($this->conn, $query);
        $resultArr = array();
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                array_push($resultArr, $row);
            }
        }
        return $resultArr;
    }
    public function getEmployees()
    {
        $query = "SELECT Employee.EmployeeID, Users.UserID, Users.Name, Users.Phone, Users.Email, Employee.Rank
        FROM Employee INNER JOIN Users
        ON Employee.UserID = Users.UserID;";
        $result = mysqli_query($this->conn, $query);
        $resultArr = array();
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                array_push($resultArr, $row);
            }
        }
        return $resultArr;
    }
}
