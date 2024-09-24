<?php
    class Rating
    {
        private $con;

        public $name;
        public $surname;
        public $rate_mark;
        public $rate_text;


        public function __construct($db)
        {
            $this->con = $db;
        }

        function read()
        {
            $query = "SELECT * FROM rate";

            $stmt = $this->con->prepare($query);

            $stmt->execute();

            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $result;
        }
    }
?>