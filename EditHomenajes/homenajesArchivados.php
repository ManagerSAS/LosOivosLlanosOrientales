<?php 
    error_reporting(0);

    include_once "../php/conexion/conexion.php";
    include_once '../php/includes/header.php';
    $conexion = new Connect();
    
    session_start();
    $crearSesion = $_SESSION['usuario'];
    if($crearSesion == null || $crearSesion == ''){
        echo "No tiene autorización";
        die();
    }
    $sql="SELECT id,nombre_titular,direccion, barrio, municipio, telefono, email, nombre_homenaje,n_documento, afiliado, lugar_fallecimiento, documentos, exequias, otro, iglesia,hora_exequias, retablo, palabras, destino_final, fecha_registro 
    FROM homenajes WHERE estado=1 ORDER BY id";

    $result = mysqli_query($conexion->connectdb(),$sql);
?>
<!doctype html>
<html lang="en">
  <head>
  	<title>Sidebar 07</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
		
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
              <li>
                <h3>Sistema de Gestion</h3>
                </li>
                <li>
                    <samp>&nbsp;</samp>
                </li>  
                <li>
                <a href="../php/cerrar_sesion" class="btn text-light mb-2" style="background: linear-gradient(#4DA8B2, #9BCEAF)">Cerrar sesion</a>
                </li> 
                
              </ul>
            </div>
          </div>
        </nav>
            <div class="row align-center-items justify-content-center">
            <table class="table table-bordered">
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
                                                    <a onclick='seeHomenaje(".$datos['id'].")'><img src='../images/eye-fill.svg'></img></a>
                                                    <a onclick='BorrarHomenajes(".$datos['id'].")'><img src='../images/trash.svg'></img></a>
                                                    <a onclick='ArchiveHomenaje(".$datos['id'].")'><img src='../images/archive.svg'></img></a>
                                                    <a onclick='GenerarExcel(".$datos['id'].")'><img src='../images/excel.svg'></img></a>
                                                </td>
                                            </tr>
                                            <div class='alert alert-success' role='alert' style='display: none' id='success'>
                                                El homenaje fue archivado correctamente!
                                            </div>
                                        ";     
                                    }
                                }
                            ?>
                        </tbody>
                </table>
            </div>
        </div>
                            </section>
        <script>
        function seeHomenaje(id){
	        window.location.href = 'ver-Homenaje.php?id='+id;    
        }
        function GenerarExcel(id){
            window.location.href ='generarExcel.php?id='+id; 
        }
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
            direccion_entrega=document.querySelector('#direccion_entrega');
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
            direccion_entrega.setAttribute("contenteditable", "true");
            nombre_homenaje.setAttribute("contenteditable", "true");
            n_documento.setAttribute("contenteditable", "true");
            lugar_fallecimiento.setAttribute("contenteditable", "true");
            exequias.setAttribute("contenteditable", "true");
            otro.setAttribute("contenteditable", "true");
            iglesia.setAttribute("contenteditable", "true");
            hora_exequias.setAttribute("contenteditable", "true");
            destino_final.setAttribute("contenteditable", "true");
            parentesco.setAttribute("contenteditable", "true");
            // window.location.href = 'editHomenajes.php?id='+id;    

            id= document.getElementById('enviar');
            id.style.display="block";
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
                direccion_entrega= document.getElementById('direccion_entrega').innerHTML,
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
            formdata.append("direccion_entrega", direccion_entrega);
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
            })
        };
    </script> 
    <script src="../js/jquery.min.js"></script>
    <script src="../js/popper.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/main.js"></script>
    </body>
</html>


<?php include_once 'php/includes/footer.php';?>