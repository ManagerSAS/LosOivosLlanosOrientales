<?php 
date_default_timezone_set('America/Bogota');
    require_once "../conexion/conexion.php";
    $conexion = new Connect();
    $sql = "SELECT CONCAT(nombre1,' ',nombre2,' ',apellido1,' ',apellido2)nombreCompleto, DATE_FORMAT(hora_exequias, '%h:%i %p')hora_exequias, fecha_exequias, fecha_fallecimiento, nombre_sala, lugar_exequias, destino_final_cementerio, fecha_registro
    FROM olivos_obituarios
    WHERE obituario_visualizar = 'yopal' AND fecha_registro >= DATE_ADD(NOW(), INTERVAL -1 DAY) 
    ORDER BY id DESC;";
    $result = mysqli_query($conexion->connectdb(),$sql);
    
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="../../css/index.css">
    <link rel="stylesheet" href="../../css/css.css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="icon" type="image/png" href="../../images/logo/favicon.png"> 
    <title>Obituarios Los Olivos</title>    
    
</head>
<body>
    <main id="content" role="main">
        <div id="app">
            <section id="height-auto" class="pt-5 pb-5">
                <div class="carousel-inner">
                    <div class="item active">
                        <div class="container">
                            <div class="row align-items-center p-green-light pb-5">
                                <div class="col-12 col-md-2">
                                    <img src="../../images/logo/logo.webp" height="75px">
                                </div>
                                <div class="col-12 col-md-10 text-right text-md-right">
                                    <h1 class="text-comfortaa">Obituarios</h1>
                                    <h5 class ="text-raleway text-muted">
                                        Un homenaje al amor.
                                    </h5>
                                </div>
                            </div>                               
                                <div class="container">
                                <div  id="carouselExampleControls" class="carousel slide" data-interval="10000" data-ride="carousel">
                                
                                <div class='carousel-inner'>
                                    <?php
                                    $key = 0;
                                        while($datos = mysqli_fetch_array($result)){
                                            if($key === 0){
                                                $estado = 'active';
                                            }else{
                                                $estado = '';
                                            }
                                            echo "    
                                            <div class='carousel-item ".$estado."'>
                                            <div class='row align-center-items justify-content-center'>                                                
                                                <div class='col-md-6'>
                                                    <div class='card border-none'>
                                                        <div class='card-body text-center mb-4 card-obituarios-en-linea'>
                                                            <div>
                                                                <h5 class='text-green-light text-center text-md-center'>
                                                                    ".strtoupper($datos['nombreCompleto'])."
                                                                </h5>
                                                                <hr class='hr-md hr-border-green-light'>
                                                            
                                                                <div class='text-muted text-left text-md-left' style='font-size:18px'>
                                                                    <p class='text-center' style='font-style: italic;'>
                                                                        Descansa en la paz del Señor
                                                                    </p>
                                                                    <p>
                                                                        <b>Fecha fallecimiento: </b>".$datos['fecha_fallecimiento']." <br>
                                                                        <b>Sala:</b> ".ucfirst(strtoupper($datos['nombre_sala']))."
                                                                    </p>
                                                                    <p>
                                                                        <b>Hora exequias:</b> ".$datos['hora_exequias']." <br>
                                                                        <b>Fecha exequias:</b> ".$datos['fecha_exequias']." <br>
                                                                        <b>Lugar exequias:</b> ".ucfirst(strtoupper($datos['lugar_exequias']))." <br> 
                                                                        <b>Destino final:</b> ".ucfirst(strtoupper($datos['destino_final_cementerio']))." <br> 
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                                           
                                            ";$key++;
                                        }
                                        if($key >= 1){
                                            
                                            echo "<script type='text/javascript'>
                                            time=10000*".$key.";
                                            setInterval('window.location.reload()', time);
                                            </script>";
                                        }else {
                                            echo "<div class='alert alert-success text-center text-md-center'  role='alert'>
                                                 No hay Obituarios para mostrar
                                                </div>";
                                        }
                                      
                                        ?>
                                    <ol class='carousel-indicators' >
                                    <?php
                                        for($i=0; $i<= ($key-1); $i++ ){
 
                                            if($i==0){
                                                $estado1 = 'active';
                                            }else{
                                                 $estado1 = '';
                                            } 
                                          
                                            echo "
         
                                            <p><li  style='color: green' ></li>
                                                 </p><img data-target='#carouselExampleControls' data-slide-to=".$i." class='active' src='../../images/logo/favicon.png'>
                                                 
                                            ";
                                        }     
                                     
                                    ?>
                                <ol>

                             </div>   
                                       
                               <a fill='green' class='carousel-control-prev'  href='#carouselExampleControls' role='button' data-slide='prev'>
                               <img src="../../images/previus.png" alt="" srcset="">
                                   <span class='carousel-control-prev-icon' style='color: green' aria-hidden='true'></span>
                                   <span class='sr-only'>Previous</span>
                               </a>
                               <a class='carousel-control-next' style='color: green' href='#carouselExampleControls' role='button' data-slide='next'>
                               <img src="../../images/next1.png" alt="" srcset="">
                                   <span class='carousel-control-next-icon' style='color: green' aria-hidden='true'></span>
                                   <span class='sr-only'>Next</span>
                               </a>  
                                  
                    </div>
                 </div>
            </div>
        </div>
        </div>    
    </section>
    </div>
    </main>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    
    <!-- <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> -->
    <!-- <script src="components/whatsapp.js"></script> -->
    <!-- <script src="components/footer.js"></script> -->
    <!-- <script src="components/index/obituarios.js"></script> -->
    <!-- <script src="components/header.js"></script>
    <script src="components/init.js"></script> -->
    <!-- <script src="components/consultaDefuncionObituarios.js"></script> -->
</body>
</html>