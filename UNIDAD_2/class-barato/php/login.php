<?php

    require("conexion.php");

    $user = $_POST['user'];
    $correo = $_POST['email'];
    $pass = $_POST['pass'];
    $ocupacion = $_POST['ocupacion'];

    if ($ocupacion == "profesor") {
        $sql = "SELECT * FROM maestros WHERE username = '$user' AND correo = '$correo' AND pass = '$pass'";
    }elseif ($ocupacion == "alumno") {
        $sql = "SELECT * FROM alumno WHERE username = '$user' AND correo = '$correo' AND pass = '$pass'";
    }


    
    if(mysqli_query($conn, $sql) && $ocupacion == "profesor") {
        echo json_encode('correctp');

    } elseif(mysqli_query($conn, $sql) && $ocupacion == "alumno") {
        echo json_encode('correcta');
    } else {

        echo json_encode('incorrect');
    }



?>