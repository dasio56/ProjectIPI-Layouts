<?php 
	include("conexion.php");
	$elemento = $_GET["elementos"];
	$contenido = $_GET["content"];
	$url = $_GET["url"];

	$con = new Conexion();
	$con->insertarElemento($elemento,$contenido,$url);
	pg_close($con->objConexion());
?>