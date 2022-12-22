<?php
header("Content-Type: application/xls");
header("Content-Disposition: attachment; filename = Datos-Homenaje.xls");

error_reporting(0);

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

while($datos = mysqli_fetch_array($result)){

    if($datos['documentos'] == 0 ){
        $documentos='Si';
    }elseif($datos['documentos'] == 1 ){
        $documentos='No';
    }
    if($datos['retablo'] == 0){
        $retablo='Homenaje fotógrafico (Retablo de 58cm x 36cm)';
    }elseif($datos['retablo'] == 1){
        $retablo='Solo arreglo floral';
    }if($datos['afiliado'] == 0){
        $afiliado='Si';
    }elseif( $datos['afiliado']  == 1){
        $afiliado='No'; 
    }
    echo "
    <h5 class='text-green-light text-center text-md-center'>
        DATOS DEL HOMENAJE #".$datos['id']."
    </h5>
    <div class='container'>
    <div class='row'>
    <div class='col-6'>
    <h4 style='font-weight: bold;'>Datos titular</h4>
    <table class='table'>
        <tbody>
            <tr>
                <th scope='row'>Nombre </th>
                <td>".strtoupper($datos['nombre_titular'])."</td>
            </tr>
            <tr>
                <th scope='row'>Direccion y barrio:</th>
                <td>".strtoupper($datos['direccion'])." ".strtoupper($datos['barrio'])."</td>
            </tr>
            <tr>
            <th scope='row'>Municipio</th>
             <td>".strtoupper($datos['municipio'])."</td>
            </tr>
            <tr>
            <th scope='row'>Telefono</th>
             <td>".strtoupper($datos['telefono'])."</td>
            </tr>
            <tr>
            <th scope='row'>Documentos</th>
             <td>".$documentos."</td>
            </tr>
            <th scope='row'>Afiliado</th>
             <td>".$afiliado."</td>
             </tr>
            <th scope='row'>Retablo</th>
             <td>".$retablo."</td>
            </tr>
            <th scope='row'>Direccion de entrega del retablo:</th>
             <td>".strtoupper($datos['direccion_entrega'])."</td>
            </tr>
        </tbody>
        </table>
        </div>  <br><br>
        <div class='col-6'>
    <h4 style='font-weight: bold;'>Datos del ser querido</h4>
    <table class='table'>
        <tbody>
            <tr>
                <th scope='row'>Nombre </th>
                <td>".strtoupper($datos['nombre_homenaje'])."</td>
            </tr>
            <tr>
                <th scope='row'>Nº identificacion</th>
                <td>".strtoupper($datos['n_documento'])."</td>
            </tr>
            <tr>
                <th scope='row'>Lugar Fallecimiento</th>
                <td>".strtoupper($datos['lugar_fallecimiento'])."</td>
            </tr>
            <tr>
            <th scope='row'>Exequiar</th>
             <td>".strtoupper($datos['exequias'])."</td>
            </tr>
            <tr>
            <th scope='row'>Otras exequias:</th>
             <td>".strtoupper($datos['otro'])."</td>
            </tr>
            <tr>
            <th scope='row'>Templo religioso</th>
             <td>".strtoupper($datos['iglesia'])."</td>
            </tr>
            <th scope='row'>Destino dinal</th>
             <td>".$datos['destino_final']."</td>
            </tr>
            </tr>
            <th scope='row'>Parentescos</th>
             <td>".strtoupper($datos['parentescos'])."</td>
            </tr>
            
        </tbody>
        </table>
        </div> 
    </div>";          
}
?>