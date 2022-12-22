<?php
    error_reporting(0);
    session_start();
    $crearSesion = $_SESSION['usuario'];
    // echo $crearSesion;
    if($crearSesion == null || $crearSesion == ''){
        echo "No tiene autorización";
        die();
    }
?>
<!DOCTYPE html> 
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="css/index.css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="icon" type="image/png" href="images/logo/favicon.png">
        
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
		
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/index.css">
    <title>Los Olivos Villavicencio</title>
</head>
<body>
<div class="wrapper d-flex align-items-stretch" >
			<nav id="sidebar" class="active" style="background: linear-gradient(#4DA8B2, #9BCEAF);">
				<h1><img src="images/LogoBlanco.png" style="width: 80%; height: 50% "></h1>
                <br><br><br><br>
                <ul class="list-unstyled components mb-5">
                <li class="active">
                    <a href="crear-obituarios"><span><img src="images/crearObituario.png" style="height: 20px;  width: 20px;"></span> Crear obituario</a>
                </li>
                <li>
                    <a href="actualizar-obituarios.php"><span><img src="images/editarObituario.png" style="height: 20px;  width: 20px;"></span>Editar obituario</a>
                </li>
                <li>
                    <a href="editar-homenajes"><span><img src="images/Homenajes.png" style="height: 20px;  width: 20px;"></span>Homenajes</a>
                </li>
                <li>
                    <a href="EditHomenajes/homenajesArchivados.php"><span><img src="images/Archivo.png" style="height: 20px;  width: 20px;"></span>Archivo</a>
                </li>
                </ul>

            </nav>

        <!-- Page Content  -->
      <div id="content" class="p-4 p-md-5">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">

            <button type="button" id="sidebarCollapse" class="btn btn-primary" style="background: linear-gradient(#4DA8B2, #9BCEAF);">
              <i class="fa fa-bars"></i>
              <span class="sr-only">Toggle Menu</span>
            </button>
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav navbar-nav ml-auto">
              <li>
                <h3>Sistema de Gestion</h3>
                </li>  
                <li>
                    <samp>&nbsp;</samp>
                </li>
                <li>
                <a href="php/cerrar_sesion" class="btn mb-2 text-light" style="background: linear-gradient(#4DA8B2, #9BCEAF)">Cerrar sesion</a>
                </li> 
              </ul>
            </div>
          </div>
        </nav>
        <main id="content" role="main">
            <div id="app">
                <!-- =========== CREATE OBITUARIOS =========== -->
                <create-obituarios></create-obituarios>
            </div>
        </main>
    </div>
    <script src="js/jquery.min.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="components/formCrearObituarios.js"></script>
    <script src="components/init.js"></script>
    <script src="components/insertarObituarios.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
</body>
</html>