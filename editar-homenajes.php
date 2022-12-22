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
    $sql="SELECT id,nombre_titular, direccion, barrio, municipio, telefono, email,nombre_homenaje, n_documento, afiliado, lugar_fallecimiento, documentos, 
    exequias, otro, iglesia, hora_exequias, retablo, palabras, destino_final, parentescos, fecha_registro 
        FROM homenajes WHERE estado=0 ORDER BY id";

    $result = mysqli_query($conexion->connectdb(),$sql);
?>
<!doctype html>
<html lang="es">
  <head>
  	<title>Sidebar 07</title>
      <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
		
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/index.css">
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
                <li>
                    <samp>&nbsp;</samp>
                </li>
                <li>
                <a href="php/cerrar_sesion" class="btn mb-2 text-light" style="background: linear-gradient(#4DA8B2, #9BCEAF)";>Cerrar sesion</a>
                </li> 
            </ul>

            </div>
          </div>
        </nav>

        <div class="row align-center-items justify-content-center">
            <table class="table table-bordered" style="border-radius: 5px;">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre tirular</th>
                        <th scope="col">Homenaje</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Acciones</th>
                        </tr> 
                    </thead>
                    <tbody>
                            <?php
                                if(mysqli_num_rows($result) != 0){
                                    while($datos = mysqli_fetch_array($result)){
                                        echo "
                                            <tr>
                                                <td>".$datos['id']."</td>
                                                <td>".$datos['nombre_titular']."</td>
                                                <td>".$datos['nombre_homenaje']."</td>
                                                <td>".$datos['municipio']."</td>
                                                <td>
                                                    <a onclick='seeHomenaje(".$datos['id'].")'><img data-toggle='tooltip' data-placement='top' title='Ver Homenaje'src='images/eye-fill.svg'></img></a>
                                                    <a onclick='ArchiveHomenaje(".$datos['id'].")'><img data-toggle='tooltip' data-placement='top' title='Archivar Homenaje' src='images/archive.svg'></img></a>
                                                    <a onclick='GenerarExcel(".$datos['id'].")'><img data-toggle='tooltip' data-placement='top' title='Generar Excel' src='images/excel.svg'></img></a>
                                                </td>
                                            </tr>
                                            <div class='alert alert-success' role='alert' style='display: none' id='success'>
                                                    El homenaje fue archivado correctamente!
                                            </div>
                                        ";     
                                                    // <a onclick='BorrarHomenajes(".$datos['id'].")'><img src='images/trash.svg'></img></a>
                                    }
                                }
                            ?>
                        </tbody>
                </table>
            </div>
      </div>
		</div>

    <script src="js/jquery.min.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
    <script>
        function seeHomenaje(id){
            console.log(id)
	        window.location.href = 'EditHomenajes/ver-Homenaje.php?id='+id;    
        }
        function EditarHomenaje(id){
            window.location.href = 'EditHomenajes/editHomenajes.php?id='+id;    
        }
        // function BorrarHomenajes(id){
        //     const data = id;
        //     // console.log(id);
            
        //     $.ajax({
        //         type: "POST",
        //         url: 'DeleteHomenaje.php',
        //         data,
        //     }).then(data => {
                
        //     })
        //     // window.location.href = 'EditHomenajes/DeleteHomenajes.php?id='+id;    
        // }
        function ArchiveHomenaje(id){
            var formdata = new FormData();
            formdata.append("id", id);

            var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
            };

            fetch("EditHomenajes/ArchiveHomenajes.php", requestOptions)
            .then(data => {
                success= document.getElementById('success');
                success.style.display="block";
                location.reload()
                    })   
        }
        function GenerarExcel(id){
            window.location.href ='EditHomenajes/generarExcel.php?id='+id; 
        }
    </script>
  </body>
</html>
<?php include_once 'php/includes/footer.php';?>