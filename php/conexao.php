<?php 
	
	try{
		$pdo = new PDO("pgsql:host=localhost;dbname=FreeSwitch","postgres", "admin");
	}catch(PDOException $e){
		echo "failed:" . $e->getMessage();
	}
	
	
?>