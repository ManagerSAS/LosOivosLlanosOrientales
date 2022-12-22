<?php 
    error_reporting(0);

    include_once "php/conexion/conexion.php";
    include_once 'php/includes/header.php';
    $conexion = new Connect();
    
    session_start();
    $crearSesion = $_SESSION['usuario'];
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
                <a href="php/cerrar_sesion" class="btn text-light mb-2" style="background: linear-gradient(#4DA8B2, #9BCEAF);">Cerrar sesion</a>
                </li> 
              </ul>
            </div>
          </div>
        </nav>
            <div class="row pt-3">
                <div class="col-12 col-md-4">
                    <form action="actualizar-obituarios" method="POST">
                        <div id="custom-search-input">
                            <div class="input-group">
                                <input name="search" type="text" class="form-control" placeholder="Digite el numero de cedula" autocomplete="off">
                                <div class="input-group-append">
                                    <button class="btn btn-info" type="submit">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row pt-4">
                <div class="col-md-12" style="overflow:auto; height:500px">
                    <table id="search" class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Documento</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                include_once 'php/includes/read.php';
                                
                                while ($row = mysqli_fetch_array($result_obituario)){ ?>
                                <tr>
                                    <th scope="row"><?php echo $row['id'] ?></th>
                                    <td><?php echo $row['n_documento'] ?></td>
                                    <td><?php echo $row['nombre1'].' '.$row['nombre2'].' '.$row['apellido1'].' '.$row['apellido2']?></td>
                                    <td>
                                        <a class="btn btn-primary" href="php/includes/update_obituario?id=<?php echo $row['id'] ?>">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg>  
                                        </a>
                                    </td>
                                </tr>
                                
                            <?php } ?>
                        </tbody>
                    </table>
                    <!-- <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Documento</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                // $sql = "SELECT id, CONCAT(nombre1,' ',nombre2,' ',apellido1,' ',apellido2)nombreCompleto, n_documento FROM olivos_obituarios";
                                // $result_obituario = mysqli_query($conexion->connectdb(),$sql);
                                                                
                                // while ($row = mysqli_fetch_array($result_obituario)){ ?>
                                <tr>
                                    <th scope="row"><?php echo $row['id'] ?></th>
                                    <td><?php echo $row['n_documento'] ?></td>
                                    <td><?php echo $row['nombreCompleto']?></td>
                                    <td>
                                        <a class="btn btn-primary" href="php/includes/update_obituario?id=<?php echo $row['id'] ?>">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg>  
                                        </a>
                                    </td>
                                </tr>
                            <?php //} ?>
                        </tbody> 
                    </table> -->
                </div>
            </div>
        </div>

    <script src="js/jquery.min.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
<?php include_once 'php/includes/footer.php';?>