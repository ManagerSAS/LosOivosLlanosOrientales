<?php
      error_reporting(0);
      ini_set("default_charset", "UTF-8");
      mb_internal_encoding("UTF-8");
      header("Content-Type: text/html;charset=utf-8");
      include_once "../php/conexion/conexion.php";
      include_once "../php/includes/header.php";
      $conexion = new Connect();
      
      session_start();
      $crearSesion = $_SESSION['usuario'];
      if($crearSesion == null || $crearSesion == ''){
          echo "No tiene autorización";
          die();
      }
    $id = $_GET['id'];
    $sql= "SELECT * FROM homenajes WHERE id =".$id." ";
    $result = mysqli_query($conexion->connectdb(),$sql);
    
?>
<!doctype html>
<html lang="es">
  <head>
  <link rel="icon" type="image/png" href="../images/logo/favicon.png">
        
<title>Los Olivos Villavicencio</title>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet">   
		
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="../css/style.css">
        <link rel="stylesheet" href="../css/index.css">
  </head>
  <body>
		
		<div class="wrapper d-flex align-items-stretch" >
			<nav id="sidebar" class="active" style="background: linear-gradient(#4DA8B2, #9BCEAF);">
				<h1><img src="../images/LogoBlanco.png" style="width: 80%; height: 50% "></h1>
                <br><br><br><br>
                <ul class="list-unstyled components mb-5">
                <li class="active">
                    <a href="../crear-obituarios"><span><img src="../images/crearObituario.png" style="height: 20px;  width: 20px;"></span> Crear obituario</a>
                </li>
                <li>
                    <a href="../actualizar-obituarios.php"><span><img src="../images/editarObituario.png" style="height: 20px;  width: 20px;"></span>Editar obituario</a>
                </li>
                <li>
                    <a href="../editar-homenajes"><span><img src="../images/Homenajes.png" style="height: 20px;  width: 20px;"></span>Homenajes</a>
                </li>
                <li>
                    <a href="homenajesArchivados.php"><span><img src="../images/Archivo.png" style="height: 20px;  width: 20px;"></span>Archivo</a>
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
              <div style='float:right;'>
                <button style="background: linear-gradient(#4DA8B2, #9BCEAF);" class='btn text-light' onclick='EditHomenaje()'><img src='../images/pencil.svg'></img>Editar</button> 
                <button style="background: linear-gradient(#4DA8B2, #9BCEAF);" class='btn text-light' onclick='ArchiveHomenaje()'><img src='../images/archive.svg'></img>Archivar</button>
                </div><br><br> &nbsp;  
                <li>
                <a href="php/cerrar_sesion" class="btn mb-2 text-light" style="background: linear-gradient(#4DA8B2, #9BCEAF)">Cerrar sesion</a>
                </li> 
              </ul>
            </div>
          </div>
        </nav>
        <div class='alert text-dark' role='alert' style='text-align: center; display: none; background-color: #9BCEAF' id='archivo'>
               Se ha archivvado el homenaje
        </div>
        <div class='alert text-dark' role='alert' style='text-align: center; display: none; background-color: #9BCEAF' id='habilitar'>
               Se habilito la edicion
        </div>
        <div class="row align-center-items justify-content-center">                                                
                        <?php
                                while($datos = mysqli_fetch_array($result)){
                                    echo "
                                    <h5 class='text-green-light text-center text-md-center'>
                                        DATOS DEL HOMENAJE #<span id='id'>".$datos['id']."</span>
                                    </h5><br><br>
                                    <br>
                                    <div class='container'>
                                    <div class='row'>
                                    <div class='col-6'>
                                    <h4 class='text-green-light text-center text-md-center'>Datos titular</h4>
                                    <table class='table'>
                                        <tbody>
                                            <tr>
                                                <th scope='row'>Nombre </th>
                                                <td contenteditable='false' id='nombre_titular'>".$datos['nombre_titular']."</td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>Direccion</th>
                                                <td contenteditable='false' id='direccion'>".$datos['direccion']."</td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>Barrio</th>
                                                <td contenteditable='false' id='barrio'>".$datos['barrio']."</td>
                                            </tr>
                                            <tr>
                                            <th scope='row'>Municipio</th>
                                             <td contenteditable='false' id='municipio'>".$datos['municipio']."</td>
                                            </tr>
                                            <tr>
                                            <th scope='row'>Telefono</th>
                                             <td contenteditable='false' id='telefono'>".$datos['telefono']."</td>
                                            </tr>
                                            <th scope='row'>Email</th>
                                             <td contenteditable='false' id='email'>".$datos['email']."</td>
                                            </tr>
                                            <tr>
                                            <th scope='row'>Documentos</th>
                                             <td contenteditable='false' id='documentos'>".$datos['documentos']."</td>
                                            </tr>
                                            <tr>
                                            <th scope='row'>Afiliado</th>
                                             <td contenteditable='false' id='afiliado'>".$datos['afiliado']."</td>
                                             </tr>
                                             </tr>
                                            <th scope='row'>Fecha exequias</th>
                                             <td contenteditable='false' id='hora_exequias'>".$datos['hora_exequias']."</td>
                                            </tr>
                                            <th scope='row'>Retablo</th>
                                             <td contenteditable='false' id='retablo'>".$datos['retablo']."</td>
                                            </tr>
                                            <th scope='row'>Palabras de amor:</th>
                                             <td contenteditable='false' id='palabras'>".$datos['palabras']."</td>
                                            </tr>
                                        </tbody>
                                        </table>
                                        </div>  
                                        <div class='col-6'>
                                    <h4 class='text-green-light text-center text-md-center'>Datos del ser querido</h4>
                                    <table class='table'>
                                        <tbody>
                                            <tr>
                                                <th scope='row'>Nombre </th>
                                                <td contenteditable='false' id='nombre_homenaje'>".$datos['nombre_homenaje']."</td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>Numero identificacion</th>
                                                <td contenteditable='false' id='n_documento'>".$datos['n_documento']."</td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>Lugar Fallecimiento</th>
                                                <td contenteditable='false' id='lugar_fallecimiento'>".$datos['lugar_fallecimiento']."</td>
                                            </tr>
                                            <tr>
                                            <th scope='row'>Exequiar</th>
                                             <td contenteditable='false' id='exequias'>".$datos['exequias']."</td>
                                            </tr>
                                            <tr>
                                            <th scope='row'>Otras exequias:</th>
                                             <td contenteditable='false' id='otro'>".$datos['otro']."</td>
                                            </tr>
                                            <tr>
                                            <th scope='row'>Templo religioso</th>
                                             <td contenteditable='false' id='iglesia'>".$datos['iglesia']."</td>
                                            </tr>
                                            <th scope='row'>Fecha y hora</th>
                                             <td contenteditable='false' id='iglesia'>".$datos['hora_exequias']."</td>
                                            </tr>
                                            <th scope='row'>Destino dinal</th>
                                             <td contenteditable='false' id='destino_final'>".$datos['destino_final']."</td>
                                            </tr>
                                            </tr>
                                            <th scope='row'>Parentescos</th>
                                             <td contenteditable='false' id='parentesco'>".$datos['parentescos']."</td>
                                            </tr>
                                            
                                            
                                        </tbody>
                                        </table>
                                        <input type='submit' id='enviar' value='Actualizar Datos' class='btn text-light' style='background: linear-gradient(#4DA8B2, #9BCEAF); display: none' onclick='actualizarHomenaje()'>
                                        </div> 
                                        <div class='alert alert-success' role='alert' style='display: none' id='success'>
                                            El homenaje fue actualizado correctamente!
                                        </div>
                                    </div>";          
                                }
                        ?>
                    </div>
            </div>
      </div>
</section>
<script>
        function EditHomenaje(){
           
            id= document.querySelector('#id');
            nombre_titular=document.querySelector('#nombre_titular');
            direccion=document.querySelector('#direccion');
            barrio=document.querySelector('#barrio');
            municipio=document.querySelector('#municipio');
            telefono=document.querySelector('#telefono');
            documentos=document.querySelector('#documentos');
            email=document.querySelector('#email');
            afiliado=document.querySelector('#afiliado');
            retablo=document.querySelector('#retablo');
            palabras=document.querySelector('#palabras');
            nombre_homenaje = document.querySelector('#nombre_homenaje');
            n_documento = document.querySelector('#n_documento');
            lugar_fallecimiento =document.querySelector('#lugar_fallecimiento');
            exequias = document.querySelector('#exequias');
            otro = document.querySelector('#otro');
            iglesia = document.querySelector('#iglesia');
            hora_exequias = document.querySelector('#hora_exequias');
            destino_final = document.querySelector('#destino_final');
            parentesco = document.querySelector('#parentesco');   

            nombre_titular.setAttribute("contenteditable", "true");
            direccion.setAttribute("contenteditable", "true");
            barrio.setAttribute("contenteditable", "true");
            municipio.setAttribute("contenteditable", "true");
            telefono.setAttribute("contenteditable", "true");
            documentos.setAttribute("contenteditable", "true");
            email.setAttribute("contenteditable", "true");
            afiliado.setAttribute("contenteditable", "true");
            retablo.setAttribute("contenteditable", "true");
            palabras.setAttribute("contenteditable", "true");
            nombre_homenaje.setAttribute("contenteditable", "true");
            n_documento.setAttribute("contenteditable", "true");
            lugar_fallecimiento.setAttribute("contenteditable", "true");
            exequias.setAttribute("contenteditable", "true");
            otro.setAttribute("contenteditable", "true");
            iglesia.setAttribute("contenteditable", "true");
            hora_exequias.setAttribute("contenteditable", "true");
            destino_final.setAttribute("contenteditable", "true");
            parentesco.setAttribute("contenteditable", "true");
        //   --- div alert
            id= document.getElementById('enviar');
            id.style.display="block";
            habilita= document.getElementById('habilitar');
            habilita.style.display="block";
            setTimeout(function(){  habilita.style.display="none"; }, 3000);
        }
       async function actualizarHomenaje(){
            const id =  document.getElementById('id').innerHTML,
                nombre_titular= document.getElementById('nombre_titular').innerHTML,
                direccion= document.getElementById('direccion').innerHTML,
                barrio= document.getElementById('barrio').innerHTML,
                municipio= document.getElementById('municipio').innerHTML,
                telefono= document.getElementById('telefono').innerHTML,
                documentos= document.getElementById('documentos').innerHTML,
                email= document.getElementById('email').innerHTML,
                afiliado= document.getElementById('afiliado').innerHTML,
                retablo= document.getElementById('retablo').innerHTML,
                palabras= document.getElementById('palabras').innerHTML,
                nombre_homenaje =  document.getElementById('nombre_homenaje').innerHTML,
                n_documento =  document.getElementById('n_documento').innerHTML,
                lugar_fallecimiento = document.getElementById('lugar_fallecimiento').innerHTML,
                exequias =  document.getElementById('exequias').innerHTML,
                otro =  document.getElementById('otro').innerHTML,
                iglesia =  document.getElementById('iglesia').innerHTML,
                hora_exequias =  document.getElementById('hora_exequias').innerHTML,
                destino_final =  document.getElementById('destino_final').innerHTML,
                parentesco =  document.getElementById('parentesco').innerHTML

                const formdata = new FormData() 
                formdata.append("id", id);
                formdata.append("nombre_titular", nombre_titular);
                formdata.append("direccion", direccion);
                formdata.append("barrio", barrio);
                formdata.append("municipio", municipio);
                formdata.append("telefono", telefono);
                formdata.append("documentos", documentos);
                formdata.append("email", email);
                formdata.append("afiliado", afiliado);
                formdata.append("retablo", retablo);
                formdata.append("palabras", palabras);
                formdata.append("nombre_homenaje", nombre_homenaje);
                formdata.append("n_documento", n_documento);
                formdata.append("lugar_fallecimiento", lugar_fallecimiento);
                formdata.append("exequias", exequias);
                formdata.append("otro", otro);
                formdata.append("iglesia", iglesia);
                formdata.append("hora_exequias", hora_exequias);
                formdata.append("destino_final", destino_final);
                formdata.append("parentesco", parentesco);

            const requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };
            await fetch("actions/actualizar.php", requestOptions)
            // .then(response => response.json())
            .then(data => {
                    success= document.getElementById('success');
                    success.style.display="block";
                    setTimeout(function(){  success.style.display="none"; }, 3000);
            })

        };
        function ArchiveHomenaje(){
            id =  document.getElementById('id').innerHTML
            var formdata = new FormData();
            formdata.append("id", id);

            var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
            };

            fetch("ArchiveHomenajes.php", requestOptions)
            .then(data => {
                archivo= document.getElementById('archivo');
                archivo.style.display="block";
                setTimeout(function(){  archivo.style.display="none"; }, 3000);
                    })   
        }
    </script> 
    <script src="../js/jquery.min.js"></script>
    <script src="../js/popper.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/main.js"></script>
    </body>
</html>
<?php include_once 'php/includes/footer.php';?>