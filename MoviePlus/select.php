<?php

	include("Home.php");
	
	$B = mysqli_query ($con, 'Select * from Book');
	
	echo "<table border='1'>";
	echo "<tr> <th> First Name </th> <th> Email </th> </tr>";
	while( $res = mysqli_fetch_array($B))
	{
		echo "<tr>";
		echo '<td>'.$res['First Name'].'</td>';
		echo '<td>'.$res['Email'].'</td>';
		echo $res['First Name'].' '.$res['Email'].'<br/>';
		echo "</tr>";
	}
	echo "</table>";
	
	
?>