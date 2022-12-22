<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    $email = $_POST['email'];
    $empresa = $_POST['empresa'];
    $funcionario = $_POST['funcionario'];
    $centro = $_POST['centro'];
    $celularEmpresa = $_POST['celularEmpresa'];
    
    $apellido2 = $_POST['apellido2'];
    $apellido1 = $_POST['apellido1'];
    $nombre = $_POST['nombre'];
    $tipoDocumento = $_POST['tipoDocumento'];
    $documento = $_POST['documento'];
    $fechaNacimiento = $_POST['fechaNacimiento'];
    $edad = $_POST['edad'];
    $numeroCelular = $_POST['numeroCelular'];
    $tramite = $_POST['tramite'];
    $mes = $_POST['mes'];
    $seguro = $_POST['seguro'];
    
    if($_POST['terminos'] == 'on'){
        $terminos = 'Si';
    }else{
        $terminos = 'No';    
    }

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
    $mail->addAddress('pruebasdeveloper4@gmail.com', 'Los Olivos Villavicencio');     // Add a recipient
    // $mail->addAddress('radicadorvillavicencio@losolivos.co', 'Los Olivos Villavicencio');     // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional actualizacionvillavicencio@losolivos.co
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // Attachments
    // if (!empty($_FILES['userfile']['name'])){
    //     $mail->addAttachment($archivo['tmp_name'],$archivo['name']);         // Add attachments
    // }
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = utf8_decode('NOVEDADES DE AFILIACIONES EMPRESARIALES');
    $mail->Body    = '
        <table width="100%">
            <tr style="background-color: #bbbbbb14;">
                <td style="padding: 10px;" colspan="2">
                    <img src="https://i.postimg.cc/bw0zKrQw/logo.png" alt="" height="50px">
                </td>
            </tr>
            <tr style="background-color: #119064f5;">
                <td style="padding-top: 15px; text-align: center;" colspan="2">
                    <p style="color: white; font-family: Arial;">
                        <b>Datos de la empresa</b>            
                    </p>            
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Correo electrónico:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        '.$email.'
                    </p>
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Nombre de la empresa:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        '.$empresa.'
                    </p>
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Funcionario que radica:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        '.$funcionario.'
                    </p>
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Centro de trabajo:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        '.$centro.'
                    </p>
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Celular empresa:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        '.$celularEmpresa.'
                    </p>
                </td>
            </tr>
            <tr style="background-color: #119064f5;">
                <td style="padding-top: 15px; text-align: center;" colspan="2">
                    <p style="color: white; font-family: Arial;">
                        <b>Datos del usuario / cliente</b>            
                    </p>            
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Tipo Novedad:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        '.$tramite.'
                    </p>
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Mes a partir de cuando aplica la novedad:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        '.$mes.'
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Tipo de documento:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        '.$tipoDocumento.'
                    </p>
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Documento:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        '.$documento.'
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Primer apellido:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        '.$apellido1.'
                    </p>
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Segundo apellido:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        '.$apellido2.'
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Nombres:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        '.$nombre.'
                    </p>
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Fecha nacimiento:</b>
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
                        <b>Edad:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        '.$edad.'
                    </p>
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Numero de celular:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        '.$numeroCelular.'
                    </p>
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Aplica seguro de vida:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        '.$seguro.'
                    </p>
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Términos y Condiciones:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        '.$terminos.'
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
    // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>