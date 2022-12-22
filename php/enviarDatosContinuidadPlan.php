<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    include_once "conexion/conexion.php";

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    $tramite = $_POST['tramite'];
    $nombreEmpresa = $_POST['nombreEmpresa'];
    $tipoAfiliado = $_POST['tipoAfiliado'];
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $tipoDocumento = $_POST['tipodocumento'];
    $apellidos = $_POST['apellidos'];
    $ocupacion = $_POST['ocupacion'];
    $nDocumento = $_POST['documento'];
    $email = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $departamento = $_POST['departamento'];
    $fechaNacimiento = $_POST['fechaNacimiento'];
    $ciudad = $_POST['ciudad'];
    $mensaje = $_POST['mensaje'];

    if(!empty($_FILES['userfile']['name'])){
        $archivo = $_FILES['adjunto'];

    }
    // $path = 'upload/' . $_FILES["userfile"]["name"]
    // move_uploaded_file($_FILES["resume"]["tmp_name"], $path);
    
    $datosBeneficiarios = '';
    $datosAdicionales = '';
    
    if($tipoDocumento=='1'){
        $tipoDocumento == 'CC';
    }else if($tipoDocumento=='2'){
        $tipoDocumento == 'TI';
    }else if($tipoDocumento=='3'){
        $tipoDocumento == 'CE';
    }
    // ================================================= //
    // ========== DATOS DE LOS BENEFICIARIOS =========== //
    // ================================================= //
        $parentescoB1 = $_POST['parentescoB1'];
        $nombreB1 = $_POST['nombreB1'];
        $apellidoB1 = $_POST['apellidoB1'];
        $fechaNacimientoB1 = $_POST['fechaNacimientoB1'];

        if(!empty($parentescoB1) && !empty($nombreB1) && !empty($apellidoB1) && !empty($fechaNacimientoB1)){
            $datosBeneficiarios = '
                <tr style="background-color: #119064f5;">
                    <td style="padding-top: 10px; text-align: center;" colspan="2">
                        <p style="color: white; font-family: Arial;">
                            <b>Datos de los Beneficiarios</b>            
                        </p>            
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Parentesco:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($parentescoB1).'
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Nombre:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($nombreB1).' '. strtoupper($apellidoB1) .'
                        </p>
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Fecha Nacimiento:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.$fechaNacimientoB1.'
                        </p>
                    </td>
                </tr>
            ';
        }

        $parentescoB2 = $_POST['parentescoB2'];
        $nombreB2 = $_POST['nombreB2'];
        $apellidoB2 = $_POST['apellidoB2'];
        $fechaNacimientoB2 = $_POST['fechaNacimientoB2'];

        if(!empty($parentescoB2) && !empty($nombreB2) && !empty($apellidoB2) && !empty($fechaNacimientoB2)){
            $datosBeneficiarios .= '
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Parentesco:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($parentescoB2).'
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Nombre:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($nombreB2).' '. strtoupper($apellidoB2) .'
                        </p>
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Fecha Nacimiento:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.$fechaNacimientoB2.'
                        </p>
                    </td>
                </tr>
            ';
        }

        $parentescoB3 = $_POST['parentescoB3'];
        $nombreB3 = $_POST['nombreB3'];
        $apellidoB3 = $_POST['apellidoB3'];
        $fechaNacimientoB3 = $_POST['fechaNacimientoB3'];

        if(!empty($parentescoB3) && !empty($nombreB3) && !empty($apellidoB3) && !empty($fechaNacimientoB3)){
            $datosBeneficiarios .= '
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Parentesco:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($parentescoB3).'
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Nombre:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($nombreB3).' '. strtoupper($apellidoB3) .'
                        </p>
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Fecha Nacimiento:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.$fechaNacimientoB3.'
                        </p>
                    </td>
                </tr>
            ';
        }

        $parentescoB4 = $_POST['parentescoB4'];
        $nombreB4 = $_POST['nombreB4'];
        $apellidoB4 = $_POST['apellidoB4'];
        $fechaNacimientoB4 = $_POST['fechaNacimientoB4']; 

        if(!empty($parentescoB4) && !empty($nombreB4) && !empty($apellidoB4) && !empty($fechaNacimientoB4)){
            $datosBeneficiarios .= '
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Parentesco:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($parentescoB4).'
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Nombre:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($nombreB4).' '. strtoupper($apellidoB4) .'
                        </p>
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Fecha Nacimiento:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.$fechaNacimientoB4.'
                        </p>
                    </td>
                </tr>
            ';
        }

        $parentescoB5 = $_POST['parentescoB5'];
        $nombreB5 = $_POST['nombreB5'];
        $apellidoB5 = $_POST['apellidoB5'];
        $fechaNacimientoB5 = $_POST['fechaNacimientoB5'];

        if(!empty($parentescoB5) && !empty($nombreB5) && !empty($apellidoB5) && !empty($fechaNacimientoB5)){
            $datosBeneficiarios .= '
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Parentesco:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($parentescoB5).'
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Nombre:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($nombreB5).' '. strtoupper($apellidoB5) .'
                        </p>
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Fecha Nacimiento:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.$fechaNacimientoB5.'
                        </p>
                    </td>
                </tr>
            ';
        }

        $parentescoB6 = $_POST['parentescoB6'];
        $nombreB6 = $_POST['nombreB6'];
        $apellidoB6 = $_POST['apellidoB6'];
        $fechaNacimientoB6 = $_POST['fechaNacimientoB6'];

        if(!empty($parentescoB6) && !empty($nombreB6) && !empty($apellidoB6) && !empty($fechaNacimientoB6)){
            $datosBeneficiarios .= '
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Parentesco:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($parentescoB6).'
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Nombre:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($nombreB6).' '. strtoupper($apellidoB6) .'
                        </p>
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Fecha Nacimiento:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.$fechaNacimientoB6.'
                        </p>
                    </td>
                </tr>
            ';
        }

        $parentescoB7 = $_POST['parentescoB7'];
        $nombreB7 = $_POST['nombreB7'];
        $apellidoB7 = $_POST['apellidoB7'];
        $fechaNacimientoB7 = $_POST['fechaNacimientoB7'];

        if(!empty($parentescoB7) && !empty($nombreB7) && !empty($apellidoB7) && !empty($fechaNacimientoB7)){
            $datosBeneficiarios .= '
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Parentesco:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($parentescoB6).'
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Nombre:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($nombreB6).' '. strtoupper($apellidoB6) .'
                        </p>
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Fecha Nacimiento:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.$fechaNacimientoB6.'
                        </p>
                    </td>
                </tr>
            ';
        }

    // ================================================= //
    // ============ RELACION ADICIONALES  ============== //
    // ================================================= //

        $parentescoA1 = $_POST['parentescoA1'];
        $nombreA1 = $_POST['nombreA1'];
        $apellidoA1 = $_POST['apellidoA1'];
        $fechaNacimientoA1 = $_POST['fechaNacimientoA1']; 

        if(!empty($parentescoA1) && !empty($nombreA1) && !empty($apellidoA1) && !empty($fechaNacimientoA1)){
            $datosAdicionales = '
                <tr style="background-color: #119064f5;">
                    <td style="padding-top: 10px; text-align: center;" colspan="2">
                        <p style="color: white; font-family: Arial;">
                            <b>Relación Adicionales</b>            
                        </p>            
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Parentesco:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($parentescoA1).'
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Nombre:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($nombreA1).' '. strtoupper($apellidoA1) .'
                        </p>
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Fecha Nacimiento:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.$fechaNacimientoA1.'
                        </p>
                    </td>
                </tr>
            ';
        }

        $parentescoA2 = $_POST['parentescoA2'];
        $nombreA2 = $_POST['nombreA2'];
        $apellidoA2 = $_POST['apellidoA2'];
        $fechaNacimientoA2 = $_POST['fechaNacimientoA2'];

        if(!empty($parentescoA2) && !empty($nombreA2) && !empty($apellidoA2) && !empty($fechaNacimientoA2)){
            $datosAdicionales .= '
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Parentesco:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($parentescoA2).'
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Nombre:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($nombreA2).' '. strtoupper($apellidoA2) .'
                        </p>
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Fecha Nacimiento:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.$fechaNacimientoA2.'
                        </p>
                    </td>
                </tr>
            ';
        }

        $parentescoA3 = $_POST['parentescoA3'];
        $nombreA3 = $_POST['nombreA3'];
        $apellidoA3 = $_POST['apellidoA3'];
        $fechaNacimientoA3 = $_POST['fechaNacimientoA3'];

        if(!empty($parentescoA3) && !empty($nombreA3) && !empty($apellidoA3) && !empty($fechaNacimientoA3)){
            $datosAdicionales .= '
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Parentesco:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($parentescoA3).'
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Nombre:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($nombreA3).' '. strtoupper($apellidoA3) .'
                        </p>
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Fecha Nacimiento:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.$fechaNacimientoA3.'
                        </p>
                    </td>
                </tr>
            ';
        }

        $parentescoA4 = $_POST['parentescoA4'];
        $nombreA4 = $_POST['nombreA4'];
        $apellidoA4 = $_POST['apellidoA4'];
        $fechaNacimientoA4 = $_POST['fechaNacimientoA4'];

        if(!empty($parentescoA4) && !empty($nombreA4) && !empty($apellidoA4) && !empty($fechaNacimientoA4)){
            $datosAdicionales .= '
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Parentesco:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($parentescoA3).'
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Nombre:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($nombreA3).' '. strtoupper($apellidoA3) .'
                        </p>
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Fecha Nacimiento:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.$fechaNacimientoA4.'
                        </p>
                    </td>
                </tr>
            ';
        }

        $parentescoA5 = $_POST['parentescoA5'];
        $nombreA5 = $_POST['nombreA5'];
        $apellidoA5 = $_POST['apellidoA5'];
        $fechaNacimientoA5 = $_POST['fechaNacimientoA5'];

        if(!empty($parentescoA5) && !empty($nombreA5) && !empty($apellidoA5) && !empty($fechaNacimientoA5)){
            $datosAdicionales .= '
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Parentesco:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($parentescoA5).'
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Nombre:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($nombreA5).' '. strtoupper($apellidoA5) .'
                        </p>
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Fecha Nacimiento:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.$fechaNacimientoA5.'
                        </p>
                    </td>
                </tr>
            ';
        }

        $parentescoA6 = $_POST['parentescoA6'];
        $nombreA6 = $_POST['nombreA6'];
        $apellidoA6 = $_POST['apellidoA6'];
        $fechaNacimientoA6 = $_POST['fechaNacimientoA6'];

        if(!empty($parentescoA6) && !empty($nombreA6) && !empty($apellidoA6) && !empty($fechaNacimientoA6)){
            $datosAdicionales .= '
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Parentesco:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($parentescoA6).'
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Nombre:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($nombreA6).' '. strtoupper($apellidoA6) .'
                        </p>
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Fecha Nacimiento:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.$fechaNacimientoA6.'
                        </p>
                    </td>
                </tr>
            ';
        }

        $parentescoA7 = $_POST['parentescoA7'];
        $nombreA7 = $_POST['nombreA7'];
        $apellidoA7 = $_POST['apellidoA7'];
        $fechaNacimientoA7 = $_POST['fechaNacimientoA7'];

        if(!empty($parentescoA7) && !empty($nombreA7) && !empty($apellidoA7) && !empty($fechaNacimientoA7)){
            $datosAdicionales .= '
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Parentesco:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($parentescoA7).'
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Nombre:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.strtoupper($nombreA7).' '. strtoupper($apellidoA7) .'
                        </p>
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Fecha Nacimiento:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            '.$fechaNacimientoA7.'
                        </p>
                    </td>
                </tr>
            ';
        }

        $mail = new PHPMailer(true);
        
try {
    date_default_timezone_set('America/Bogota');
    $hoy = date('Y-m-d H:i:s');
    $sql = "INSERT INTO ActualizacionDatos (tramite, nombre_empresa, tipo_Afiliado, nombre_titular, direccion, tipoDoc , apellido_titular, ocupacion, n_documento, correo, telefono, departamento, fecha_nacimiento_titular,ciudad,mensaje, parentescoB1, nombreB1, apellidoB1, fnacimientoB1, parentescoB2, nombreB2, apellidoB2, fnacimientoB2, parentescoB3, nombreB3, apellidoB3, fnacimientoB3, parentescoB4, nombreB4, apellidoB4, fnacimientoB4, parentescoB5, nombreB5, apellidoB5, fnacimientoB5, parentescoB6, nombreB6, apellidoB6, fnacimientoB6, parentescoB7, nombreB7, apellidoB7, fnacimientoB7, parentescoA1, nombreA1, apellidoA1, fnacimientoA1, parentescoA2, nombreA2, apellidoA2, fnacimientoA2, parentescoA3, nombreA3, apellidoA3, fnacimientoA3 , parentescoA4, nombreA4, apellidoA4, fnacimientoA4, parentescoA5, nombreA5, apellidoA5, fnacimientoA5, parentescoA6, nombreA6, apellidoA6,fnacimientoA6, parentescoA7, nombreA7, apellidoA7, fnacimientoA7,fecha_registro) VALUE ('$tramite','$nombreEmpresa','$tipoAfiliado','$nombre','$direccion','$tipoDocumento' ,'$apellidos','$ocupacion','$nDocumento','$email','$telefono','$departamento','$fechaNacimiento','$ciudad','$mensaje','$parentescoB1','$nombreB1','$apellidoB1','$fechaNacimientoB1','$parentescoB2','$nombreB2','$apellidoB2','$fechaNacimientoB2','$parentescoB3','$nombreB3','$apellidoB3','$fechaNacimientoB3','$parentescoB4','$nombreB4','$apellidoB4','$fechaNacimientoB4','$parentescoB5','$nombreB5','$apellidoB5','$fechaNacimientoB5','$parentescoB6','$nombreB6','$apellidoB6','$fechaNacimientoB6','$parentescoB7','$nombreB7','$apellidoB7','$fechaNacimientoB7','$parentescoA1','$nombreA1','$apellidoA1','$fechaNacimientoA1','$parentescoA2','$nombreA2','$apellidoA2','$fechaNacimientoA2','$parentescoA3','$nombreA3','$apellidoA3','$fechaNacimientoA3' ,'$parentescoA4','$nombreA4','$apellidoA4','$fechaNacimientoA4','$parentescoA5','$nombreA5','$apellidoA5','$fechaNacimientoA5','$parentescoA6','$nombreA6','$apellidoA6','$fechaNacimientoA6','$parentescoA7','$nombreA7','$apellidoA7','$fechaNacimientoA7','$hoy')";
    // echo $sql;
    mysqli_query(Connect::connectdb(),$sql);
    // if($result==1){
    //     $datosObituario = json_encode(
    //             array(
    //                 'error' => false,
    //                 'message' => 'Se inserto el obituario'
    //             )
    //         );
    //     echo $datosObituario;
    // }else{
    //     $datosUsuario =  json_encode(
    //         array(
    //             'error' => true,
    //             'message' => $sql
    //         )
    //     );
    //     echo $datosUsuario;
    // }

    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'webserfunllanos@gmail.com';            // SMTP username
    $mail->Password   = 'lvqowsjbnmcquyoe';                     // SMTP password web2020** lvqowsjbnmcquyoe
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('webserfunllanos@gmail.com', 'Los Olivos Villavicencio');
    // $mail->addAddress('actualizacionvillavicencio@losolivos.co', 'Los Olivos Villavicencio');     // Add a recipient
    // $mail->addAddress('radicadorvillavicencio@losolivos.co', 'Los Olivos Villavicencio');     // Add a recipient
    $mail->addAddress('desarrollo@agenciamanager.com', 'pruebas');     // Add a recipient

    // $mail->addAddress('ellen@example.com');               // Name is optional actualizacionvillavicencio@losolivos.co
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // Attachments
    if (!empty($_FILES['userfile']['name'])){
        $mail->addAttachment($archivo['tmp_name'],$archivo['name']);         // Add attachments
    }
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = utf8_decode('Actualización de datos');
    $mail->Body    = '
    <table style="width: 70%;">
        <tr style="background-color: #bbbbbb14;">
            <td style="padding: 10px;" colspan="2">
                <img src="https://i.postimg.cc/bw0zKrQw/logo.png" alt="" height="50px">
            </td>
        </tr>
        <tr style="background-color: #119064f5;">
            <td style="padding-top: 10px; text-align: center;" colspan="2">
                <p style="color: white; font-family: Arial;">
                    <b>Datos del usuario / cliente</b>            
                </p>            
            </td>
        </tr>
        <tr style="background-color: #bbbbbb14;">
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    <b>Tramite:</b>
                </p>
            </td>
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    Actualización datos
                </p>
            </td>
        </tr>
        <tr>
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    <b>Tipo Afiliado:</b>
                </p>
            </td>
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    Titular
                </p>
            </td>
        </tr>
        <tr style="background-color: #bbbbbb14;">
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    <b>N° Documento:</b>
                </p>
            </td>
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    '.$tipoDocumento.'. '.$nDocumento.'
                </p>
            </td>
        </tr>
        <tr>
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    <b>Nombre:</b>
                </p>
            </td>
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    '.strtoupper($nombre).' '.strtoupper($apellidos).'
                </p>
            </td>
        </tr>
        <tr style="background-color: #bbbbbb14;">
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    <b>Fecha Nacimiento:</b>
                </p>
            </td>
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    '.$fechaNacimiento.'
                </p>
            </td>
        </tr>
        <tr>
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    <b>Departamento:</b>
                </p>
            </td>
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    '.$departamento.' '.$ciudad.'
                </p>
            </td>
        </tr>
        <tr style="background-color: #bbbbbb14;">
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    <b>Correo electronico:</b>
                </p>
            </td>
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    '.$email.'
                </p>
            </td>
        </tr>
        <tr>
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    <b>Nombre empresa:</b>
                </p>
            </td>
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    '.$nombreEmpresa.'
                </p>
            </td>
        </tr>
        <tr style="background-color: #bbbbbb14;">
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    <b>Direccion:</b>
                </p>
            </td>
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    '.$direccion.'
                </p>
            </td>
        </tr>
        <tr>
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    <b>Ocupacion:</b>
                </p>
            </td>
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    '.$ocupacion.'
                </p>
            </td>
        </tr>
        <tr style="background-color: #bbbbbb14;">
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    <b>Telefono celular:</b>
                </p>
            </td>
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    '.$telefono.'
                </p>
            </td>
        </tr>
        '.$datosBeneficiarios.'
        '.$datosAdicionales.'
        <tr style="background-color: #119064f5;">
            <td style="padding-top: 10px; text-align: center;" colspan="2">
                <p style="color: white; font-family: Arial;">
                    <b>Mensaje</b>            
                </p>            
            </td>
        </tr>
        <tr>
            <td style="padding: 5px;">
                <p style="font-family: Arial;">
                    '.$mensaje.'
                </p>
            </td>
        </tr>
        <tr style="background-color: #119064f5;">
            <td style="padding-top: 10px; text-align: center;" colspan="2">
                <p style="color: white; font-family: Arial;">
                    <b>Archivos adjuntos</b>
                </p>
            </td>
        </tr>
    </table>
    ';
    // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send(); 
    echo json_encode(
        array(
            'send' => true,
            'message'=> 'El mensaje se envio correctamente',
        )
    );
} catch (Exception $e) {
    echo json_encode(
        array(
            'send' => false,
            'message' => 'No se envio su mensaje'
        )
    );
    // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>