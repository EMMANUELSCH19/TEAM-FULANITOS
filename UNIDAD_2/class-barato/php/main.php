<?php

    require("conexion.php");

    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $telefono = $_POST['telefono'];
    $ocupacion = $_POST['ocupacion'];
    $user = $_POST['user'];
    $correo = $_POST['correo'];
    $pass = $_POST['pass'];

    if ($ocupacion == "profesor") {
        $sql = "INSERT INTO maestros (id, nombre, apellidos, telefono, username, correo, pass) VALUES (NULL, '$nombre', '$apellidos', '$telefono', '$user', '$correo', '$pass')";
    } else {
        $sql = "INSERT INTO alumno (id, nombre, apellidos, telefono, username, correo, pass) VALUES (NULL, '$nombre', '$apellidos', '$telefono', '$user', '$correo', '$pass')";
    }

    if(mysqli_query($conn, $sql)) {
        echo json_encode('correct');

    } else {
        echo json_encode('incorrect');
    }



?>