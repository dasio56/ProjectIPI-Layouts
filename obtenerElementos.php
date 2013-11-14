<?php
	include("conexion.php");
	$con = new Conexion();
	$result = $con->obtenerElementos();
	while($row=pg_fetch_array($result))
	{
		if($row[1]=="audio")
		{
			echo "<div id='".$row[0]."' class='block'>
			<".$row[1]." src='".$row[3]."' controls='controls'>".$row[2]."</".$row[1].">
		</div>";	
		}
		else if($row[1]=="video")
		{
			echo "<div id='".$row[0]."' class='block'>
			<".$row[1]." src='".$row[3]."' controls='controls'>".$row[2]."</".$row[1].">
		</div>";	
		}
		else if($row[1]=="img")
		{
			echo "<div id='".$row[0]."' class='block'><figure><".$row[1]." src='".$row[3]."'></figure>".$row[2]."<figcaption></figcaption></div>";	
		}
		else if($row[1]=="section")
		{
			echo "<".$row[1]." id='".$row[0]."' class='block'>".$row[2]."</".$row[1].">";	
		}
		else if($row[1]=="article")
		{
		echo "<".$row[1]." id='".$row[0]."' class='block'>".$row[2]."</".$row[1].">";	
		}
		else if($row[1]=="div")
		{
			echo "<".$row[1]." id='".$row[0]."' class='block'>".$row[2]."</".$row[1].">";	
		}
		else if($row[1]=="p")
		{
			echo "<div id='".$row[0]."' class='block'>
			<".$row[1].">".$row[2]."</".$row[1].">
		</div>";	
		}
		else if($row[1]=="form")
		{
			echo "<div id='".$row[0]."' class='block'>
			<".$row[1].">".$row[2]."</".$row[1].">
		</div>";	
		}
		else if($row[1]=="input")
		{
			echo "<div id='".$row[0]."' class='block'>
			<".$row[1].">".$row[2]."</".$row[1].">
		</div>";	
		}
		else if($row[1]=="button")
		{
			echo "<div id='".$row[0]."' class='block'>
			<".$row[1]." controls='controls'>".$row[2]."</".$row[1].">
		</div>";	
		}
	}
?>