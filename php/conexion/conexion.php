<?php
    class Connect{
        static function connectdb(){
            $conexion = new mysqli('losolivosvillavicencio.com','losolivosvillavi','olivos.villavo','agencia8_olivosvillavicencio'); //via "CTP/IP ABRE CONEXION","USUARIO","CONTRASEÑA","BASEDATOS"
            if(mysqli_connect_errno($conexion)){
                echo "Fallo la conexion a MySQL: (".mysqli_connect_errno($conexion).") ".mysqli_connect_error($conexion);
            }
            return $conexion;
        }
    }
?>