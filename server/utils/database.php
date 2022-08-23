<?php


class database
{
    private $conn = null;

    public function __construct()
    {
        $config = include('config.php');
        $this->conn = new mysqli($config['host'], $config['username'], $config['password'], $config['dbname']);
    }

    public function getConnection()
    {
        return $this->conn;
    }

    public function closeConnection()
    {
        mysqli_close($this->conn);
    }

}

