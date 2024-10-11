<?php 
	include("Home.php");

    $Email =  $_POST['Email'];
    $password =  $_POST['password']; 


    $sql = "SELECT * FROM Home WHERE Email = '$Email' AND passorwd = '$password' ";

    $result = $conn->query($sql);

    if(!$row = $result->fetch_assoc())        /// try2t elmo3eda ->>  while( $res = mysqli_fetch_array($B))  {   echo '<td>'.$res['First Name'].'</td>'}
     {
      echo "incorrect username or password"; 
    }
    else
     {

        header("      .php"); // hywadyk 3la home 3ltol 
      }  
       
    

?>