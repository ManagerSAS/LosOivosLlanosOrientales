<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';
    
    $asunto = $_POST['asunto'];
    // $archivo = $_FILES['adjunto'];

    $mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'webserfunllanos@gmail.com';            // SMTP username
    $mail->Password   = 'web2022**';                            // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('webserfunllanos@gmail.com', 'Los Olivos Villavicencio');
    if($asunto == 1){
        $mail->addAddress('contactenosvillavicencio@losolivos.co', 'Los Olivos Villavicencio');     // Add a recipient
    }else if($asunto == 2 || $asunto == 3){
        $mail->addAddress('sugerenciasvillavicencio@losolivos.co', 'Los Olivos Villavicencio');     // Add a recipient
    }
    // $mail->addAddress('ellen@example.com');               // Name is optional contactenosvillavicencio@losolivos.co, sugerenciasvillavicencio@losolivos.co
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // Attachments
    // $mail->addAttachment($archivo['tmp_name'],$archivo['name']);         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $asunto == 1 ? utf8_decode('Formulario contáctenos'): 'Formulario PQR';
    $mail->Body    = '
        <table style="width:80%; margin-left:10%; margin-right:10%">
            <tr style="background-color: #bbbbbb14;">
                <td style="padding: 10px;" colspan="2">
                    <img src="https://i.postimg.cc/bw0zKrQw/logo.png" alt="" height="50px">
                </td>
            </tr>
            <tr style="background-color: #119064f5;">
                <td style="padding: 10px; text-align: center;" colspan="2">
                    <p style="color: white; font-family: Arial;">
                        <b>Datos del usuario/cliente</b>            
                    </p>            
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;">
                    <p style="font-family: Arial;">
                        <b>Nombre:</b>
                    </p>
                </td>
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;">
                    <p style="font-family: Arial;">
                        '.strtoupper($_POST['nombre']).'
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;">
                    <p style="font-family: Arial;">
                        <b>Apellidos:</b>
                    </p>
                </td>
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;">
                    <p style="font-family: Arial;">
                        '.strtoupper($_POST['apellidos']).'
                    </p>
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;">
                    <p style="font-family: Arial;">
                        <b>Documento de identificación:</b>
                    </p>
                </td>
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;">
                    <p style="font-family: Arial;">
                        '.$_POST['identificacion'].'
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;">
                    <p style="font-family: Arial;">
                        <b>Telefono:</b>
                    </p>
                </td>
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;">
                    <p style="font-family: Arial;">
                        '.$_POST['telefono'].'
                    </p>
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;">
                    <p style="font-family: Arial;">
                        <b>Departamento:</b>
                    </p>
                </td>
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;">
                    <p style="font-family: Arial;">
                        '.ucfirst(strtolower($_POST['departamento'])).'
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;">
                    <p style="font-family: Arial;">
                        <b>Ciudad:</b>
                    </p>
                </td>
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;">
                    <p style="font-family: Arial;">
                        '.ucfirst(strtolower($_POST['ciudad'])).'
                    </p>
                </td>
            </tr>

            <tr style="background-color: #bbbbbb14;">
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;">
                    <p style="font-family: Arial;">
                        <b>Direccion:</b>
                    </p>
                </td>
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;">
                    <p style="font-family: Arial;">
                        '.ucfirst(strtolower($_POST['direccion'])).'
                    </p>
                </td>
            </tr>

            <tr>
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;">
                    <p style="font-family: Arial;">
                        <b>Correo electronico:</b>
                    </p>
                </td>
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;">
                    <p style="font-family: Arial;">
                        '.$_POST['correo'].'
                    </p>
                </td>
            </tr>

            <tr style="background-color: #bbbbbb14;">
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;">
                    <p style="font-family: Arial;">
                        <b>Asunto:</b>
                    </p>
                </td>
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;">
                    <p style="font-family: Arial;">
                     '  .ucfirst(strtolower(
                            $asunto == 1 ? utf8_encode('Solicitud de informacion'): 'Formulario PQRF')
                        ).'
                    </p>
                </td>
            </tr>
            
            <tr style="background-color: #119064f5;">
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px; text-align: center;" colspan="2">
                    <p style="color: white; font-family: Arial;">
                        <b>Mensaje del usuario/cliente</b>            
                    </p>            
                </td>
            </tr>
            <tr>
                <td style="padding-left:8px; paddding-top:5px; padding-bottom:5px;" colspan="2">
                    <p style="font-family: Arial;">
                        <b>Mensaje:</b> '.$_POST['mensaje'].'
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
                'message'=> 'El mensaje se envio correctamente'
            )
        );
    } catch (Exception $e) {
        echo json_encode(
            array(
                'send' => false,
                'message' => 'No se envio su mensaje'
            )
        );
    }
?>