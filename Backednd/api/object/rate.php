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

        function create()
        {
            $query = "INSERT INTO rate
            SET
                name=:name, surname=:surname, rate_mark=:rate_mark, rate_text=:rate_text";

            $stmt = $this->con->prepare($query);

            $this->name = htmlspecialchars(strip_tags($this->name));
            $this->surname = htmlspecialchars(strip_tags($this->surname));
            $this->rate_mark = htmlspecialchars(strip_tags($this->rate_mark));
            $this->rate_text = htmlspecialchars(strip_tags($this->rate_text));

            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":surname", $this->surname);
            $stmt->bindParam(":rate_mark", $this->rate_mark);
            $stmt->bindParam(":rate_text", $this->rate_text);

            if ($stmt->execute()) {
                return true;
            }
                return false;
        }
    }
?>