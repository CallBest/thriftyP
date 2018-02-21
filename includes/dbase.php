<?php

class dbconnection {
	var $connection;
	var $query;
	var $result;
	var $row;

	function dbconnect($host=DBSERV,$user=DBUSER,$pass=DBPASS,$schema=DBNAME) {
		if (@!$this->connection = @mysqli_connect($host, $user, $pass, $schema)) {
      die('Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
		}
	}
	
	function execute() {
		if (isset($this->result)) {
			@mysqli_free_result($this->result);
		}
		if (!$this->result = @mysqli_query($this->connection, $this->query)) {
			die("Execution of a query to the database failed <em>" . $this->query ."</em> " . mysqli_error() );
		}
	}
	
	function rowcount() {
		if (isset($this->result)) {
			return @mysqli_num_rows($this->result);
		}
		else {
			return -1;
		}
	}

	function last_id() {
		return @mysqli_insert_id($this->connection);
	}

	function dbclose() {
		if (isset($this->result)) {
			@mysqli_free_result($this->result);
		}
		@mysqli_close($this->connection);
	}

	function fetchrow($i) {
		if (isset($this->result)) {
			return @mysqli_fetch_assoc($this->result);
		}
	}
}
?>