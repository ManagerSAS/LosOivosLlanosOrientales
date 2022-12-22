<?php
    include_once "../conexion/conexion.php";
    $conexion = new Connect();
   
    if(isset($_POST['search'])){
        $parametroBusqueda = $_POST['search'];
        $sql = "SELECT id, nombre1,nombre2,apellido1,apellido2, n_documento 
        FROM olivos_obituarios
        WHERE n_documento LIKE '%$parametroBusqueda%' OR nombre1 LIKE '%$parametroBusqueda%' OR 
                nombre2 LIKE '%$parametroBusqueda%' OR apellido1 LIKE '%$parametroBusqueda%' OR 
                apellido2 LIKE '%$parametroBusqueda%';";        
        $result_obituario = mysqli_query($conexion->connectdb(),$sql);
    }

?>