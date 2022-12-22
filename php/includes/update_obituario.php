<?php 
    error_reporting(0);
    include_once "../conexion/conexion.php";
    
    session_start();
    $crearSesion = $_SESSION['usuario'];
    if($crearSesion == null || $crearSesion == ''){
        echo "No tiene autorización";
        die();
    }
    $conexion = new Connect();

    if(isset($_GET['id'])){
        $id = $_GET['id'];
        $sqlRead = "SELECT * FROM olivos_obituarios WHERE id = $id";
        $result_obituario = mysqli_query($conexion->connectdb(),$sqlRead);
        if(mysqli_num_rows($result_obituario)==1){
            $data = mysqli_fetch_array($result_obituario);
        }
    }

    if(isset($_POST['update'])){
        $id = $_GET['id'];
        $documento                  = $_POST['documento'];
        $nombre1                    = $_POST['nombre1'];
        $nombre2                    = $_POST['nombre2'];
        $apellido1                  = $_POST['apellido1'];
        $apellido2                  = $_POST['apellido2']; 
        $fechaNacimiento            = $_POST['fechaNacimiento'];
        $fechaFallecimiento         = $_POST['fechaFallecimiento'];
        $lugarFallecimiento         = $_POST['lugarFallecimiento'];
        if(isset($_POST['fechaExequias']) && !empty($_POST['fechaExequias'])){
            $fechaExequias = $_POST['fechaExequias'];
        }else{
            $fechaExequias = '0000-00-00';
        }
        if(isset($_POST['horaExequias']) && !empty($_POST['horaExequias'])){
            $horaExequias = $_POST['horaExequias'];
        }else{
            $horaExequias  = '00:00';
        }
        if(isset($_POST['horaInhumacion']) && !empty($_POST['horaInhumacion'])){
            $horaInhumacion = $_POST['horaInhumacion'];
        }else{
            $horaInhumacion = '0000-00-00T00:00';
        }
        if(isset($_POST['fechaExhumacion']) && !empty($_POST['fechaExhumacion'])){
            $fechaExhumacion = $_POST['fechaExhumacion'];
        }else{
            $fechaExhumacion = '0000-00-00';
        }
        $departamentoExequias       = $_POST['departamentoExequias'];
        $lugarExequias              = $_POST['lugarExequias'];
        $salaExequias               = $_POST['salaExequias'];
        $destinoFinalCementerio     = $_POST['destinoFinalCementerio'];
        $ciudadInhumacion           = $_POST['ciudadInhumacion'];
        $sectorInhumacion           = $_POST['sectorInhumacion'];
        $ubicacionInhumacion        = $_POST['ubicacionInhumacion'];
        $numeroRegistro             = $_POST['numeroRegistro'];
        $notaria                    = $_POST['notaria'];

        $sqlUpdate = "  UPDATE olivos_obituarios 
                        SET n_documento = '$documento', nombre1 = '$nombre1', nombre2 = '$nombre2', apellido1 = '$apellido1', apellido2 = '$apellido2', fecha_nacimiento = '$fechaNacimiento', fecha_fallecimiento = '$fechaFallecimiento', lugar_fallecimiento = '$lugarFallecimiento', fecha_exequias = '$fechaExequias', hora_exequias = '$horaExequias', departamento = '$departamentoExequias', lugar_exequias = '$lugarExequias', nombre_sala = '$salaExequias', destino_final_cementerio = '$destinoFinalCementerio', ciudad = '$ciudadInhumacion', sector = '$sectorInhumacion', ubicacion = '$ubicacionInhumacion', hora_inhumacion = '$horaInhumacion', n_registro = '$numeroRegistro', fecha_exhumacion = '$fechaExhumacion', notaria = '$notaria'
                        WHERE id = $id";
        $result = mysqli_query($conexion->connectdb(),$sqlUpdate);
        header("Location:../../actualizar-obituarios.php");
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
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="stylesheet" href="../../css/index.css">
    <title>Los Olivos Villavicencio</title>
</head>
<body>  
		<div class="wrapper d-flex align-items-stretch" >
			<nav id="sidebar" class="active" style="background: linear-gradient(#4DA8B2, #9BCEAF);">
				<h1><img src="../../images/LogoBlanco.png" style="width: 80%; height: 50% "></h1>
                <br><br><br><br>
                <ul class="list-unstyled components mb-5">
                <li class="active">
                    <a href="../../crear-obituarios"><span><img src="../../images/crearObituario.png" style="height: 20px;  width: 20px;"></span> Crear obituario</a>
                </li>
                <li>
                    <a href="../../actualizar-obituarios.php"><span><img src="../../images/editarObituario.png" style="height: 20px;  width: 20px;"></span>Editar obituario</a>
                </li>
                <li>
                    <a href="../../editar-homenajes"><span><img src="../../images/Homenajes.png" style="height: 20px;  width: 20px;"></span>Homenajes</a>
                </li>
                <li>
                    <a href="../../EditHomenajes/homenajesArchivados.php"><span><img src="../../images/Archivo.png" style="height: 20px;  width: 20px;"></span>Archivo</a>
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
                <a href="../php/cerrar_sesion" class="btn btn-green-light mb-2">Cerrar sesion</a>
                </li> 
              </ul>
            </div>
          </div>
        </nav>

    <section id="height-auto"  class="pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-12">
                    <h2 class="text-comfortaa text-muted">
                        Actualizar Obituario
                    </h2>
                </div>
            </div>
            <div class="row">
                    <div class="col-md-12">
                        <a href="../../actualizar-obituarios" class="btn btn-outline-primary mb-2">Volver</a>
                    </div>
                </div>              
            <form id="form-obituarios" action="update_obituario?id=<?php echo $_GET['id']?>" method="POST">
                <!-- ======================================================== -->
                <!-- ================ DATOS GENERALES ======================= -->
                <!-- ======================================================== -->
                <div class="row pt-4 pb-4">
                    <div class="col-12 col-md-12">
                        <h4 class="text-muted text-comfortaa bg-grey-light p-2" style="margin-bottom:0px;"> Datos generales
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down float-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                            </svg>
                        </h4>                            
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="">Documento*</label>
                            <input value="<?php echo $data['n_documento']?>" name="documento" type="text" class="form-control" autocomplete="off" required>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="">Nombre 1*</label>
                            <input value="<?php echo $data['nombre1']?>" name="nombre1" type="text" class="form-control" autocomplete="off" required>
                        </div>                            
                    </div>
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="">Nombre 2*</label>
                            <input value="<?php echo $data['nombre2']?>" name="nombre2" type="text" class="form-control" autocomplete="off">
                        </div>                            
                    </div>
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="">Apellido 1*</label>
                            <input value="<?php echo $data['apellido1']?>" name="apellido1" type="text" class="form-control" autocomplete="off" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="">Apellido 2</label>
                            <input value="<?php echo $data['apellido2']?>" name="apellido2" type="text" class="form-control" autocomplete="off">
                        </div>                     
                    </div>
                    <div class="col-12 col-md-3 text-left text-md-left">                            
                        <div class="form-group text-raleway text-muted">
                            <label for="">Fecha Nacimiento *</label>
                            <input value="<?php echo $data['fecha_nacimiento']?>" name="fechaNacimiento" type="date" class="form-control" autocomplete="off" required>
                        </div>                                                 
                    </div>
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="">Fecha Fallecimiento *</label>
                            <input value="<?php echo $data['fecha_fallecimiento']?>" name="fechaFallecimiento" type="date" class="form-control" required>
                        </div>
                    </div>                    
                    <div class="col-12 col-md-3 text-left text-md-left">                            
                        <div class="form-group text-raleway text-muted">
                            <label for="">Lugar Fallecimiento *</label>
                            <input value="<?php echo $data['lugar_fallecimiento']?>" name="lugarFallecimiento" type="text" class="form-control" autocomplete="off" required>
                        </div>                  
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="">Notaria</label>
                            <input value="<?php echo $data['notaria']?>" name="notaria" type="text" class="form-control" autocomplete="off">
                        </div>                     
                    </div>
                </div>
                <!-- ======================================================== -->
                <!-- ===================== EXEQUIAS ========================= -->
                <!-- ======================================================== -->
                <div class="row pt-4 pb-4">
                    <div class="col-12 col-md-12">
                        <h4 class="text-muted text-comfortaa bg-grey-light p-2" style="margin-bottom:0px;"> Exequias 
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down float-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                            </svg>
                        </h4>                            
                    </div>
                </div>
                <div class="row pt-2">
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="date">Nombre sala</label>
                            <input value="<?php echo $data['nombre_sala']?>" name="salaExequias" type="text" class="form-control" autocomplete="off">
                        </div>                            
                    </div>
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="parent">Fecha exequias</label>
                            <input value="<?php echo $data['fecha_exequias']?>" name="fechaExequias" type="date" class="form-control" autocomplete="off">
                        </div>
                    </div>                        
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="">Hora exequias</label>
                            <input value="<?php echo $data['hora_exequias']?>" name="horaExequias" type="time" class="form-control" autocomplete="off">
                        </div>
                    </div>
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="">Departamento</label>
                            <input value="<?php echo $data['departamento']?>" name="departamentoExequias" type="text" class="form-control" autocomplete="off">
                        </div>
                    </div>
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="date">Lugar exequias</label>
                            <input value="<?php echo $data['lugar_exequias']?>" name="lugarExequias" type="text" class="form-control" autocomplete="off">
                        </div>
                    </div>
                </div>
                <!-- ======================================================== -->
                <!-- ===================== INHUMACION ========================= -->
                <!-- ======================================================== -->
                <div class="row pb-4">
                    <div class="col-12 col-md-12">
                        <h4 class="text-muted text-comfortaa bg-grey-light p-2" style="margin-bottom:0px;"> Inhumacion 
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down float-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                            </svg>
                        </h4>                            
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="parent">Destino final o cementerio</label>
                            <input value="<?php echo $data['destino_final_cementerio']?>" name="destinoFinalCementerio" type="text" class="form-control" autocomplete="off">
                        </div>
                    </div>
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="date">Hora Inhumacion</label>
                            <input value="<?php echo $data['hora_inhumacion']?>" name="horaInhumacion" type="datetime-local" class="form-control" autocomplete="off">
                        </div>
                    </div>                    
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="">Ciudad</label>
                            <input value="<?php echo $data['ciudad']?>" name="ciudadInhumacion" type="text" class="form-control" autocomplete="off">
                        </div>
                    </div>
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="">Sector</label>
                            <input value="<?php echo $data['sector']?>" name="sectorInhumacion" type="text" class="form-control" autocomplete="off">
                        </div>
                    </div>
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="date">Ubicacion</label>
                            <input value="<?php echo $data['ubicacion']?>" name="ubicacionInhumacion" type="text" class="form-control" autocomplete="off">
                        </div>
                    </div>
                </div>
                <!-- ======================================================== -->
                <!-- ======================== OTROS ========================= -->
                <!-- ======================================================== -->
                <div class="row pb-4">
                    <div class="col-12 col-md-12">
                            <h4 class="text-muted text-comfortaa bg-grey-light p-2" style="margin-bottom:0px;"> Otros 
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down float-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                </svg>
                            </h4>                            
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="parent">Numero registro de defunción</label>
                            <input value="<?php echo $data['n_registro']?>" name="numeroRegistro" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-12 col-md-3 text-left text-md-left">
                        <div class="form-group text-raleway text-muted">
                            <label for="">Fecha exhumación</label>
                            <input value="<?php echo $data['fecha_exhumacion']?>" name="fechaExhumacion" type="date" class="form-control">
                        </div>
                    </div>
                </div>
                <!-- ======================================================== -->
                <!-- ======================================================== -->
                <!-- ======================================================== -->
                <div class="row">
                    <div class="col-md-12">
                        <button name="update" type="submit" class="btn btn-green-light mb-2">Actualizar Obituario</button>
                    </div>
                </div>
            </form>
        </div>
</div>
    </section>
    <script src="../../js/jquery.min.js"></script>
    <script src="../../js/popper.js"></script>
    <script src="../../js/bootstrap.min.js"></script>
    <script src="../../js/main.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="search.js"></script>
</body>
</html>
