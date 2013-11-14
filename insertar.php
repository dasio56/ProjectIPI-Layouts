<?php 
	include("conexion.php");
	$elemento = $_GET["elementos"];
	$contenido = $_GET["contenido"];

	$con = new Conexion();
	$con->insertarElemento($elemento,$contenido);
	pg_close($con->objConexion());

?>