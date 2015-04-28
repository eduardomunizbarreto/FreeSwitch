<?php 
	include_once 'conexao.php';
	$stmt["extensions"] = $pdo->query('select * from ramais')->fetchAll(PDO::FETCH_ASSOC);
	$pdo = null;
	echo json_encode($stmt);
?>