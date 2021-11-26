<?php

    require("conexion.php");

    $query = "SELECT * FROM tarea";

    if($mandar = mysqli_query($conn, $query)){
        $datos = mysqli_fetch_array($mandar);
    }else{
        echo "Error al mandar";
    }
    

    echo json_encode($datos);


?>