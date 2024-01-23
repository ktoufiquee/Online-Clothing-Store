<?php

class MediaController
{
    private $conn = null;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function getAll($id)
    {
        $query = "SELECT * FROM MediaContent WHERE ProductID = '$id'";
        $result = mysqli_query($this->conn, $query);
        $resultArr = array();
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                array_push($resultArr, $row);
            }
        }
        return $resultArr;
    }

    public function insertAll()
    {
        $response = array();
        $ProductID = $_POST["ProductID"];
        if ($_FILES['file']) {
            $count = count($_FILES['file']['name']);
            for ($i = 0; $i < $count; $i++) {

                $file_name = $_FILES["file"]["name"][$i];
                $file_tmp_name = $_FILES["file"]["tmp_name"][$i];
                $error = $_FILES["file"]["error"][$i];

                if ($error > 0) {
                    array_push($response, array(
                        "status" => "error",
                        "error" => true,
                        "message" => "Error uploading the file!"
                    ));
                } else {
                    $random_name = rand(1000, 1000000) . "-" . $file_name;
                    $uploaded_file_name = strtolower($random_name);
                    $upload_name = $_SERVER['DOCUMENT_ROOT'] . "/images/" . $uploaded_file_name;
                    //$upload_name = preg_replace('/\s+/', '-', $upload_name);

                    if (move_uploaded_file($file_tmp_name, $upload_name)) {
                        $query = "INSERT INTO `mediacontent`(`FileName`, `ProductID`) VALUES ('$uploaded_file_name','$ProductID')";
                        mysqli_query($this->conn, $query);
                        array_push($response, array(
                            "status" => "success",
                            "error" => false,
                            "message" => "File uploaded successfully",
                            "url" =>  "images/" . $upload_name,
                        ));
                    } else {
                        array_push($response, array(
                            "status" => "danger",
                            "error" => true,
                            "url" =>  $file_name,
                            "message" => "Error uploading the file!"
                        ));
                    }
                }
            }
        } else {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => print_r($_FILES['file'])
            );
        }

        echo json_encode($response);
    }
}
