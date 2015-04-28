<?php
	include_once 'conexao.php';

	$nome = $_POST['nome'];
	$ramal = $_POST['ramal'];
	$senha = md5($_POST['senha']);

	try{
		$pdo->beginTransaction();
		$pdo->exec("insert into ramais (nome, ramal, senha) values ('$nome', '$ramal', '$senha')");
		$pdo->commit();
		$response["success"] = true;
		$response["message"] = "Inserido com sucesso!";
	}catch(PDOException $e){
		$pdo->rollBack();
		$response["success"] = false;
		$response["message"] = "Falha ao inserir";
	}

	$pdo = null;
	echo json_encode($response);
?>