<?php
$servername = "bqlnbfeih6u3fu0glrsc-mysql.services.clever-cloud.com:3306"; //servidor y puerto
$database = "bqlnbfeih6u3fu0glrsc"; //nombre de la base de datos
$username = "untqjh5pyn34yncy"; //nombre de usuario
$password = "JskJX7CelF6JbUoknbx2"; //password del usuario
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

//mysqli_close($conn);
?>