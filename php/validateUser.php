<?php
    error_reporting(0);
    include_once "conexion/conexion.php";
    // require_once 'conexion.php';    
    $user = $_POST['user'];
    $password = $_POST['pass'];

    class validateUser{
        public $user = '';
        public $contrasena = '';

        public function setUsuario($user){
            $this->user = $user;
        }
        public function getUsuario(){
            return $this->user;
        }
        public function setContrasena($password){
            $this->password = $password;
        }
        public function getContrasena(){
            return $this->password;
        }

        public function consultarUsuario(){
            $sql = "SELECT usuario, contrasena FROM olivos_usuarios 
                    WHERE usuario = '$this->user' AND contrasena = MD5('$this->password')";
                    // echo $sqkl
            $result = mysqli_query(Connect::connectdb(),$sql);

            
            if(mysqli_num_rows($result)==1){
                $datos = mysqli_fetch_array($result);
                echo json_encode(
                    array(
                        'error' => false,
                        'usuario' => $datos['usuario'],
                    )
                );
            }else{
                echo json_encode(
                    array(
                        'error' => true
                    )
                );
            }
            
        }
        public function IdUsuario(){
            $sql = "SELECT * FROM olivos_usuarios 
                    WHERE usuario = '$this->user' AND contrasena = MD5('$this->password')";
            $result = mysqli_query(Connect::connectdb(),$sql);
            $datos = mysqli_fetch_array($result);
            return  array (
                        'user' => $datos['usuario'],
                        'pass' => $datos['contrasena']
                    );
        }

        public function crearSesion($param){
            session_start();
            $_SESSION['usuario'] = $param['user'];
            $_SESSION['password'] = $param['pass'];
            return $_SESSION['usuario'];
        }
    }

    $validate = new validateUser();

    $usuario            = $validate->setUsuario($user);
    $contrasena         = $validate->setContrasena($password);
    $consultaUsuario    = $validate->consultarUsuario();
    $param              = $validate->IdUsuario();
    $crearSesion        = $validate->crearSesion($param);

?>