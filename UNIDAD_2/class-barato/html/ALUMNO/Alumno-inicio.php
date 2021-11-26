<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <link rel="stylesheet" href="../../CSS/ALUMNO/estilos-alumno.css">
    <title>TO DO LLOTAS</title>
</head>
<body>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" >TAREAS</a>
           
            <div class="collapse navbar-collapse" id="navbarText">
                <a href="/index.html"><i class="fas fa-arrow-circle-left"></i></a>
            </div>
        </div>
    </nav>

    <main></main>
    <table class="table" id="tabla">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titulo</th>
            <th scope="col">Instruccion</th>
            <th scope="col">Fecha limite</th>
            <th scope="col">Hora limite</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <?php
            //puse la pagina en php porque al final sera en php para subir en heroku y asi ya poder poner mas facil la tabla con las tareas 
                require("../../php/conexion.php");
                $query = "SELECT * FROM tarea";
                $resultado = mysqli_query($conn, $query);
                while($row = mysqli_fetch_array($resultado)){
                  echo "<tr>";
                  echo "<td>".$row['id']."</td>";
                  echo "<td>".$row['titulo']."</td>";
                  echo "<td>".$row['instruccion']."</td>";
                  echo "<td>".$row['fecha_limite']."</td>";
                  echo "<td>".$row['hora_limite']."</td>";
                  echo "<td>".$row['status']."</td>";
                  echo "<td><button type='submit'>Entregar</button></td>";
                  echo "</tr>";
                }
            ?>
          </tr>
          
        </tbody>
      </table>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="../../js/script.js"></script>
</body>
</html>