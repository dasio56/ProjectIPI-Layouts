<?php
	include("conexion.php");
	$con = new Conexion();
	$result = $con->obtenerElementos();
	while($row=pg_fetch_array($result))
	{
		echo "<div id='".$row[0]."' class='block'>
			<".$row[1].">".$row[2]."</".$row[1].">
		</div>";
	}
?>