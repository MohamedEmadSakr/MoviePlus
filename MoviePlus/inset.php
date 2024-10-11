<?php
	include ("Home.php");
	
	$sql = "insert into login (First Name,Last Name,Date of birth,Email,Password) values 
    ('$_POST[First Name]','$_POST[Last Name]','$_POST[Date of birth]','$_POST[Email]','$_POST[Password]') ";
	
	if (! mysqli_query($con, $sql))
	{
		echo "Error ".mysqli_error($con);
	}
	else 
		echo "1 row added";
?> 