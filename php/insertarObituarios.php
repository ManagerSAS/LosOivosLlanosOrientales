<?php

    include_once "conexion/conexion.php";

    
    // die();
    $ciudadVisualizar = $_POST['visualizar'];
    
    if(isset($_POST['documento']) && !empty($_POST['documento'])){
        $documento = $_POST['documento'];
    }
    if(isset($_POST['nombre1']) && !empty($_POST['nombre1'])){
        $nombre1 = $_POST['nombre1'];
    }
    if(isset($_POST['nombre2']) && !empty($_POST['nombre2'])){
        $nombre2 = $_POST['nombre2'];
    }
    if(isset($_POST['apellido1']) && !empty($_POST['apellido1'])){
        $apellido1 = $_POST['apellido1'];
    }
    if(isset($_POST['apellido2']) && !empty($_POST['apellido2'])){
        $apellido2 = $_POST['apellido2']; 
    }
    if(isset($_POST['fechaNacimiento']) && !empty($_POST['fechaNacimiento'])){
        $fechaNacimiento = $_POST['fechaNacimiento'];
    }
    if(isset($_POST['fechaFallecimiento']) && !empty($_POST['fechaFallecimiento'])){
        $fechaFallecimiento = $_POST['fechaFallecimiento'];
    }
    if(isset($_POST['lugarFallecimiento']) && !empty($_POST['lugarFallecimiento'])){    
        $lugarFallecimiento = $_POST['lugarFallecimiento'];
    }
    if(isset($_POST['notaria']) && !empty($_POST['notaria'])){    
        $notaria = $_POST['notaria'];
    }else{
        $notaria = 'PENDIENTE';
    }
    if(isset($_POST['notaria']) && !empty($_POST['numeroRegistro'])){
        $numeroRegistro = $_POST['numeroRegistro'];
    }



    if(isset($_POST['fechaExequias']) && !empty($_POST['fechaExequias'])){
        $fechaExequias = $_POST['fechaExequias'];
    }else{
        $fechaExequias = '0000-00-00';
    }
    if(isset($_POST['horaExequias']) && !empty($_POST['horaExequias'])){
        $horaExequias = $_POST['horaExequias'];
    }else{
        $horaExequias  = '00:00';
    }
    if(!isset($_POST['departamentoExequias']) && !empty($_POST['departamentoExequias'])){
        $departamentoExequias = $_POST['departamentoExequias'];
    }else{
        $departamentoExequias = 'No aplica';
    }
    if(isset($_POST['lugarExequias']) && !empty($_POST['lugarExequias'])){
        $lugarExequias = $_POST['lugarExequias'];
    }else{
        $lugarExequias = 'No aplica';
    }
    if(isset($_POST['salaExequias']) && !empty($_POST['salaExequias'])){
        $salaExequias = $_POST['salaExequias'];
    }else{
        $salaExequias = 'No aplica';
    }
    if(isset($_POST['destinoFinalCementerio']) && !empty($_POST['destinoFinalCementerio'])){
        $destinoFinalCementerio = $_POST['destinoFinalCementerio'];
    }else{
        $destinoFinalCementerio = 'No aplica';
    }
    if(isset($_POST['ciudadInhumacion']) && !empty($_POST['ciudadInhumacion'])){
        $ciudadInhumacion = $_POST['ciudadInhumacion'];
    }else{
        $ciudadInhumacion = 'No aplica';
    }
    if(isset($_POST['sectorInhumacion']) && !empty($_POST['sectorInhumacion'])){
        $sectorInhumacion = $_POST['sectorInhumacion'];
    }else{
        $sectorInhumacion = 'No aplica';
    }
    if(isset($_POST['ubicacionInhumacion']) && !empty($_POST['ubicacionInhumacion'])){
        $ubicacionInhumacion = $_POST['ubicacionInhumacion'];
    }else{
        $ubicacionInhumacion = 'No aplica';
    }
    if(isset($_POST['horaInhumacion']) && !empty($_POST['horaInhumacion'])){
        $horaInhumacion = $_POST['horaInhumacion'];
    }else{
        $horaInhumacion = '0000-00-00T00:00';
    }
    if(isset($_POST['fechaExhumacion']) && !empty($_POST['fechaExhumacion'])){
        $fechaExhumacion = $_POST['fechaExhumacion'];
    }else{
        $fechaExhumacion = '0000-00-00';
    }

    // echo $fechaExequias;die();
                        
    class insertObituario{   
        
        private $documento;
        private $nombre1;
        private $nombre2;
        private $apellido1;
        private $apellido2;
        private $fechaNacimiento;
        private $fechaFallecimiento;
        private $lugarFallecimiento;
        private $fechaExequias;
        private $horaExequias;
        private $departamentoExequias;
        private $lugarExequias;
        private $salaExequias;
        private $destinoFinalCementerio;
        private $ciudadInhumacion;
        private $sectorInhumacion;
        private $ubicacionInhumacion;
        private $horaInhumacion;
        private $numeroRegistro;
        private $fechaExhumacion;
        private $notaria;
        private $ciudadVisualizar;

        // DOCUMENTO
        public function setDocumento($documento){
            $this->documento = $documento;
        }
        public function getDocumento(){
            return $this->documento;
        }
        // NOMBRE 1
        public function setNombre1($nombre1){
            $this->nombre1 = $nombre1;
        }
        public function getNombre1(){
            return $this->nombre1;
        }
        // NOMBRE 2
        public function setNombre2($nombre2){
            $this->nombre2 = $nombre2;
        }
        public function getNombre2(){
            return $this->nombre2;
        }
        // APELLIDO 1
        public function setApellido1($apellido1){
            $this->apellido1 = $apellido1;
        }
        public function getApellido1(){
            return $this->apellido1;
        }
        // APELLIDO 2
        public function setApellido2($apellido2){
            $this->apellido2 = $apellido2;
        }
        public function getApellido2(){
            return $this->apellido2;
        }
        // FECHA NACIMIENTO
        public function setFechaNacimiento($fechaNacimiento){
            $this->fechaNacimiento = $fechaNacimiento;
        }
        public function getFechaNacimiento(){
            return $this->fechaNacimiento;
        }
        // FECHA FALLECIMIENTO
        public function setFechaFallecimiento($fechaFallecimiento){
            $this->fechaFallecimiento = $fechaFallecimiento;
        }
        public function getFechaFallecimiento(){
            return $this->fechaFallecimiento;
        }
        // LUGAR FALLECIMIENTO
        public function setLugarFallecimiento($lugarFallecimiento){
            $this->lugarFallecimiento = $lugarFallecimiento;
        }
        public function getLugarFallecimiento(){
            return $this->lugarFallecimiento;
        }
        // FECHA EXEQUIAS
        public function setFechaExequias($fechaExequias){
            $this->fechaExequias = $fechaExequias;
        }
        public function getFechaExequias(){
            return $this->fechaExequias;
        }
        // HORA EXEQUIAS
        public function setHoraExequias($horaExequias){
            $this->horaExequias = $horaExequias;
        }
        public function getHoraExequias(){
            return $this->horaExequias;
        }
        // DEPARTAMENTO EXEQUIAS
        public function setDepartamentoExequias($departamentoExequias){
            $this->departamentoExequias = $departamentoExequias;
        }
        public function getDepartamentoExequias(){
            return $this->departamentoExequias;
        }
        // LUGAR EXEQUIAS
        public function setLugarExequias($lugarExequias){
            $this->lugarExequias = $lugarExequias;
        }
        public function getLugarExequias(){
            return $this->lugarExequias;
        }
        // SALA EXEQUIAS
        public function setSalaExequias($salaExequias){
            $this->salaExequias = $salaExequias;
        }
        public function getSalaExequias(){
            return $this->salaExequias;
        }
        // DESTINO FINAL O CEMENTERIO
        public function setDestinoFinalCementerio($destinoFinalCementerio){
            $this->destinoFinalCementerio = $destinoFinalCementerio;
        }
        public function getDestinoFinalCementerio(){
            return $this->destinoFinalCementerio;
        }
        // CIUDAD INHUMACION
        public function setCiudadInhumacion($ciudadInhumacion){
            $this->ciudadInhumacion = $ciudadInhumacion;
        }
        public function getCiudadInhumacion(){
            return $this->ciudadInhumacion;
        }
        // SECTOR INHUMNACION
        public function setSectorInhumacion($sectorInhumacion){
            $this->sectorInhumacion = $sectorInhumacion;
        }
        public function getSectorInhumacion(){
            return $this->sectorInhumacion;
        }
        // UBICACION INHUMACION
        public function setUbicacionInhumacion($ubicacionInhumacion){
            $this->ubicacionInhumacion = $ubicacionInhumacion;
        }
        public function getUbicacionInhumacion(){
            return $this->ubicacionInhumacion;
        }
        // HORA INHUMNACION
        public function setHoraInhumacion($horaInhumacion){
            $this->horaInhumacion = $horaInhumacion;
        }
        public function getHoraInhumacion(){
            return $this->horaInhumacion;
        }
        // NUMERO REGISTRO
        public function setNumeroRegistro($numeroRegistro){
            $this->numeroRegistro = $numeroRegistro;
        }
        public function getNumeroRegistro(){
            return $this->numeroRegistro;
        }
        // NUMERO REGISTRO
        public function setFechaExhumacion($fechaExhumacion){
            $this->fechaExhumacion = $fechaExhumacion;
        }
        public function getFechaExhumacion(){
            return $this->fechaExhumacion;
        }
        // NOTARIA
        public function setNotaria($notaria){
            $this->notaria = $notaria;
        }
        public function getNotaria(){
            return $this->notaria;
        }
        // CIUDAD VISUALIZAR
        public function setCiudadVisualizar($ciudadVisualizar){
            $this->ciudadVisualizar = $ciudadVisualizar;
        }
        public function getCiudadVisualizar(){
            return $this->ciudadVisualizar;
        }
        
        public function insertarObituario(){
            date_default_timezone_set('America/Bogota');
            $hoy = date('Y-m-d H:i:s');
            
            $sql = "INSERT INTO olivos_obituarios 
                    (obituario_visualizar, n_documento, nombre1, nombre2, apellido1, apellido2, fecha_nacimiento, 
                    fecha_fallecimiento, lugar_fallecimiento, fecha_exequias, hora_exequias, 
                    departamento, lugar_exequias, nombre_sala, destino_final_cementerio, ciudad, sector, 
                    ubicacion, hora_inhumacion, n_registro, fecha_exhumacion, notaria, fecha_registro)
                    VALUES ('$this->ciudadVisualizar','$this->documento','$this->nombre1','$this->nombre2','$this->apellido1',
                    '$this->apellido2','$this->fechaNacimiento','$this->fechaFallecimiento ',
                    '$this->lugarFallecimiento','$this->fechaExequias','$this->horaExequias',
                    '$this->departamentoExequias','$this->lugarExequias','$this->salaExequias',
                    '$this->destinoFinalCementerio','$this->ciudadInhumacion','$this->sectorInhumacion',
                    '$this->ubicacionInhumacion','$this->horaInhumacion','$this->numeroRegistro',
                    '$this->fechaExhumacion','$this->notaria', '$hoy')";

            $result = mysqli_query(Connect::connectdb(),$sql);
            // echo $result;die();
                if($result==1){
                    $datosObituario = json_encode(
                            array(
                                'error' => false,
                                'message' => 'Se inserto el obituario'
                            )
                        );
                    echo $datosObituario;
                }else{
                    $datosUsuario =  json_encode(
                        array(
                            'error' => true,
                            'message' => $sql
                        )
                    );
                    echo $datosUsuario;
                }
        }
    }

    $ob = new insertObituario();

    // echo $ciudadVisualizar."<br>";
    // echo $documento."<br>";
    // echo $nombre1."<br>";
    // echo $nombre2."<br>";
    // echo $apellido1."<br>";
    // echo $apellido2."<br>";
    // echo $fechaNacimiento."<br>";
    // echo $fechaFallecimiento."<br>";
    // echo $lugarFallecimiento."<br>";
    // echo $fechaExequias."<br>";
    // echo $horaExequias."<br>";
    // echo $departamentoExequias."<br>";
    // echo $lugarExequias."<br>";
    // echo $salaExequias."<br>";
    // echo $destinoFinalCementerio."<br>";
    // echo $ciudadInhumacion."<br>";
    // echo $sectorInhumacion."<br>";
    // echo $ubicacionInhumacion."<br>";
    // echo $horaInhumacion."<br>";
    // echo $numeroRegistro."<br>";
    // echo $fechaExhumacion."<br>";
    // echo $notaria."<br>";

    $ob->setDocumento($documento);
    $ob->setNombre1($nombre1);
    $ob->setNombre2($nombre2);
    $ob->setApellido1($apellido1);
    $ob->setApellido2($apellido2);
    $ob->setFechaNacimiento($fechaNacimiento);
    $ob->setFechaFallecimiento($fechaFallecimiento);
    $ob->setLugarFallecimiento($lugarFallecimiento);
    $ob->setFechaExequias($fechaExequias);
    $ob->setHoraExequias($horaExequias);
    $ob->setDepartamentoExequias($departamentoExequias);
    $ob->setLugarExequias($lugarExequias);
    $ob->setSalaExequias($salaExequias);
    $ob->setDestinoFinalCementerio($destinoFinalCementerio);
    $ob->setCiudadInhumacion($ciudadInhumacion);
    $ob->setSectorInhumacion($sectorInhumacion);
    $ob->setUbicacionInhumacion($ubicacionInhumacion);
    $ob->setHoraInhumacion($horaInhumacion);
    $ob->setNumeroRegistro($numeroRegistro);
    $ob->setFechaExhumacion($fechaExhumacion);
    $ob->setNotaria($notaria);
    $ob->setCiudadVisualizar($ciudadVisualizar);

    $ob->insertarObituario();
?>