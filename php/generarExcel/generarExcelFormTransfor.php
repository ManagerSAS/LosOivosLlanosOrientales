<?php
$filename = "informacion_formualrio.xls";
header("Content-Type: application/vnd.ms-excel");
header("Content-Disposition: attachment; filename=".$filename);

error_reporting(0);

include_once "../conexion/conexion.php";
$conexion = new Connect();

$sql= "SELECT * FROM formularioTransfor";
$result = mysqli_query($conexion->connectdb(),$sql);

echo "
<table border='1'>

    <tr>
        <th >
            Nombre
        </th>
        <th >
            Area
        </th>
        <th >
            Nivel Word
        </th>
        <th >
            Nivel Excel
        </th>
        <th >
            Nivel Power point
        </th>
        <th >
            Nivel Drive
        </th>
        <th >
            Nivel Calendario
        </th>
        <th >
            Nivel Meet
        </th>
        <th >
            Nivel Fotos
        </th>
        <th >
            Nivel Formulario
        </th>
        <th >
            Capacitación Orfeo
        </th>
        <th >
            Capacitación Karing
        </th>
        <th >
            Capacitación Sise
        </th>
        <th >
            Capacitación Intranet
        </th>
        <th >
            Capacitación CRM
        </th>
        <th >
            Capacitación Olivos LG
        </th>
        <th >
            Capacitación Web Solidaria
        </th>
        <th >
            Capacitación Dispapeles
        </th>
        <th >
            App Mensajerias
        </th>
        <th >
            App Adicionales
        </th>
    </tr>
";
while($datos = mysqli_fetch_array($result)){
    echo "
       <tbody>
            <tr>
              <td>".strtoupper($datos['nombre'])."</td>
              <td>".strtoupper($datos['areaLabor'])."</td>
              <td>".strtoupper($datos['lvlWord'])."</td>
              <td>".strtoupper($datos['lvlExcel'])."</td>
              <td>".strtoupper($datos['lvlPowerP'])."</td>
              <td>".strtoupper($datos['lvlDrive'])."</td>
              <td>".strtoupper($datos['lvlCalendar'])."</td>
              <td>".strtoupper($datos['lvlMeet'])."</td>
              <td>".strtoupper($datos['lvlFotos'])."</td>
              <td>".strtoupper($datos['lvlForms'])."</td>
              <td>".strtoupper($datos['CapOrfeo'])."</td>
              <td>".strtoupper($datos['CapKaring'])."</td>
              <td>".strtoupper($datos['CapSise'])."</td>
              <td>".strtoupper($datos['CapIntr'])."</td>
              <td>".strtoupper($datos['CapCrm'])."</td>
              <td>".strtoupper($datos['CapLG'])."</td>
              <td>".strtoupper($datos['CapSoli'])."</td>
              <td>".strtoupper($datos['CapDisp'])."</td>
              <td>".strtoupper($datos['mensajeria'])."</td>
              <td>".strtoupper($datos['adicionales'])."</td>
            </tr>
        </tbody>
    ";
    // echo "
    //         <tbody>
    //             <tr>
    //                 <td>".strtoupper($datos['nombre'])."</td>
    //                 <td>".strtoupper($datos['areaLabor'])."</td>
    //                 <td>".strtoupper($datos['lvlWord'])."</td>
    //                 <td>".strtoupper($datos['lvlExcel'])."</td>
    //                 <td>".strtoupper($datos['lvlPowerP'])."</td>
    //                 <td>".strtoupper($datos['lvlDrive'])."</td>
    //                 <td>".strtoupper($datos['lvlCalendar'])."</td>
    //                 <td>".strtoupper($datos['lvlMeet'])."</td>
    //                 <td>".strtoupper($datos['lvlFotos'])."</td>
    //                 <td>".strtoupper($datos['lvlForms'])."</td>
    //                 <td>".strtoupper($datos['CapOrfeo'])."</td>
    //                 <td>".strtoupper($datos['CapKaring'])."</td>
    //                 <td>".strtoupper($datos['CapSise'])."</td>
    //                 <td>".strtoupper($datos['CapIntr'])."</td>
    //                 <td>".strtoupper($datos['CapCrm'])."</td>
    //                 <td>".strtoupper($datos['CapLG'])."</td>
    //                 <td>".strtoupper($datos['CapSoli'])."</td>
    //                 <td>".strtoupper($datos['CapDisp'])."</td>
    //                 <td>".strtoupper($datos['mensajeria'])."</td>
    //                 <td>".strtoupper($datos['adicionales'])."</td>

    //             </tr>
    //         </tbody>
    //     </table>";          
}
?>