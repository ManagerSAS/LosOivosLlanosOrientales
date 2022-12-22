<?php

    include_once "php/conexion/conexion.php";
    error_reporting(0);
    // require_once 'conexion.php';         
    $parametro = $_POST['documento'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" media="screen">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" media="screen">
    <link rel="icon" type="image/png" href="images/logo/favicon.png" sizes="32x32 16x16">
    <link rel="stylesheet" href="css/index.css" media="screen">
    
    <title>Los Olivos Villavicencio / registros</title>
</head>
<body>
    <main id="content" role="main">
        <div id="app">
            <!-- =========== WHATSAPP =========== -->
            <whatsapp-web></whatsapp-web>
            <!-- =========== NAVBAR =========== -->
            <menu-nav></menu-nav>

            <section id="height-auto" class="pt-5 pb-5 pt-md-13">
                <div class="container">
                    <div class="row align-items-center p-green-light">
                        <div class="col-12 col-md-12 text-center text-md-center">
                            <h1 class="text-comfortaa">Registros de defunción</h1>
                            <p class ="text-raleway text-muted">
                                Consulte aquí el registro de defunción del fallecido digitando la cédula o el nombre.
                            </p>
                        </div>
                    </div>
                    <form id="form-defuncion-obituarios" action="registro-defuncion" method="POST">
                        <div class="row justify-content-center pt-5 pb-3">
                            <div class="col-12 col-md-4 text-left text-md-left">
                                <div class="input-group mb-3">
                                    <input name="documento" type="text" class="form-control" placeholder="Nombre o numero de documento">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="submit">Buscar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <?php
                        $sql = "SELECT CONCAT(nombre1,' ',nombre2,' ',apellido1,' ',apellido2)nombreCompleto, n_documento, n_registro, notaria, fecha_fallecimiento
                                FROM olivos_obituarios   
                                WHERE n_documento = '$parametro' OR CONCAT(nombre1,' ',nombre2,' ',apellido1,' ',apellido2) LIKE '%$parametro%';";

                        $result = mysqli_query(Connect::connectdb(),$sql);
                        
                        if($parametro != ''){
                            while($datos = mysqli_fetch_array($result)){
                                echo '  <div class="card p-3 mb-4">
                                            <h5 class="text-muted text-comfortaa">
                                                Nombre: '.$datos['nombreCompleto'].'
                                                <span class="float-right">Fecha: '.$datos['fecha_fallecimiento'].' </span>
                                            </h5>
                                            <hr>
                                            <p class="text-muted text-raleway">
                                                <b>Cedula: </b> '.$datos['n_documento'].' &nbsp;&nbsp;&nbsp; 
                                                <b>Numero Registro: </b> '.$datos['n_registro'].' &nbsp;&nbsp;&nbsp; 
                                                <b>Notaria: </b> '.$datos['notaria'].' &nbsp;&nbsp;&nbsp;
                                            </p>
                                        </div>';
                            }
                        }
                    ?>
                    <!-- // <div class="card p-3">
                    //     <h5 class="text-muted text-comfortaa">
                    //         Nombre: ${data.nombreCompleto} 
                    //         <span class="float-right">Fecha: ${data.fecha} </span>
                    //     </h5>
                    //     <hr>
                    //     <p class="text-muted text-raleway">
                    //         <b>Cedula: </b> ${data.documento} &nbsp;&nbsp;&nbsp; 
                    //         <b>Numero Registro: </b> ${data.registro} &nbsp;&nbsp;&nbsp; 
                    //         <b>Notaria: </b> ${data.notaria} &nbsp;&nbsp;&nbsp;
                    //     </p>
                    // </div> -->
                    
                </div>
            </section>

            
            <!-- =========== FOOTER =========== -->
            <footer-olivos></footer-olivos>
        </div>
    </main>
    
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="components/vue.min.js" defer></script>
    <script src="components/whatsapp.js" defer></script>
    <script src="components/footer.js" defer></script>
    <script src="components/index/registroDefuncion.js" defer></script>
    <script src="components/header.js" defer></script>
    <script src="components/init.js" defer></script>
</body>
</html>