<?php
    class Order {
        private $con;

        public $name;
        public $surname;
        public $pathronumic;
        public $phone;
        public $email;

        public function __construct($db)
        {
            $this->con = $db;
        }

        function create()
        {
            $query = "INSERT INTO Client_orders
            SET
                name=:name, surname=:surname, pathronumic=:pathronumic, phone=:phone, email=:email";

            $stmt = $this->con->prepare($query);

            $this->name = htmlspecialchars(strip_tags($this->name));
            $this->surname = htmlspecialchars(strip_tags($this->surname));
            $this->pathronumic = htmlspecialchars(strip_tags($this->pathronumic));
            $this->phone = htmlspecialchars(strip_tags($this->phone));
            $this->email = htmlspecialchars(strip_tags($this->email));

            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":surname", $this->surname);
            $stmt->bindParam(":pathronumic", $this->pathronumic);
            $stmt->bindParam(":phone", $this->phone);
            $stmt->bindParam(":email", $this->email);

            if ($stmt->execute()) {
                return true;
            }
                return false;
        }

    }
?>