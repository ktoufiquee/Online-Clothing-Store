<?php
class TargetAudienceController
{
    private $conn = null;
    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function getAll()
    {
        $query = "SELECT * FROM TargetAudience";
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
        $query = "SELECT * FROM TargetAudience WHERE TargetID = '$id' LIMIT 1";
        $result = mysqli_query($this->conn, $query);
        return mysqli_fetch_all($result);
    }
    public function insertSingle()
    {
        $audienceName = $_POST['AudienceName'];
        $query = "INSERT INTO TargetAudienceAudienceName) VALUES('$audienceName')";
        mysqli_query($this->conn, $query);
        return mysqli_insert_id($this->conn);
    }
}
