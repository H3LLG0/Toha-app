<?php
    class PriceList {
        private $con;

        public $naming;
        public $price;

        public function __construct($db)
        {
            $this->con = $db;
        }

        function read()
        {
            $query = "SELECT * FROM PriceList";

            $stmt = $this->con->prepare($query);

            $stmt->execute();

            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $result;
        }

    }
?>