<?php
    

    include_once "../../php/conexion/conexion.php";
    include_once "../../php/includes/header.php";

    

    // session_start();
    // $crearSesion = $_SESSION['usuario'];
    // if($crearSesion == null || $crearSesion == ''){
    //     echo "No tiene autorización";
    //     die();
    // }
    $id = $_POST['id'];
    $nombre_titular = $_POST['nombre_titular'];
    $direccion = $_POST['direccion'];
    $barrio= $_POST['barrio']; 
    $municipio= $_POST['municipio'];   
    $telefono= $_POST['telefono'];
    $documentos= $_POST['documentos'];
    $email= $_POST['email'];
    $afiliado= $_POST['afiliado'];
    $retablo= $_POST['retablo'];
    $direccion_entrega= $_POST['direccion_entrega'];
    $nombre_homenaje= $_POST['nombre_homenaje'];
    $n_documento= $_POST['n_documento'];
    $lugar_fallecimiento= $_POST['lugar_fallecimiento'];
    $exequias= $_POST['exequias'];
    $otro= $_POST['otro'];
    $iglesia= $_POST['iglesia'];
    $hora_exequias= $_POST['hora_exequias'];
    $destino_final= $_POST['destino_final'];
    $parentesco= $_POST['parentesco'];

    class actualizar{
        private $id; 
        private $nombre_titular;
        private $direccion;
        private $barrio;
        private $municipio;
        private $telefono;
        private $documentos;
        private $afiliado;
        private $retablo;
        private $direccion_entrega;
        private $email;
        private $nombre_homenaje;
        private $n_documento;
        private $lugar_fallecimiento;
        private $exequias;
        private $otro;
        private $iglesia;
        private $horas_exequias;
        private $destino_final;
        private $parentesco;

        // ---- ID
        public function setId($id){
            $this->id = $id;
        }
        public function getId(){
            return $this->id;
        }
        //-----NOMBRE_TITULAR
        public function setNombre_titular($nombre_titular){
            $this->nombre_titular = $nombre_titular;
        }
        public function getNombre_titular(){
            return $this->nombre_titular;
        }
        //----DIRECCION
        public function setDireccion($direccion){
            $this->direccion = $direccion;
        }
        public function getDireccion(){
            return $this->direccion;
        }
        // ---BARRIO
        public function setBarrio($barrio){
            $this->barrio = $barrio;
        }
        public function getBarrio(){
            return $this->barrio;
        }
        // ---MUNICIPIO
        public function setMunicipio($municipio){
            $this->municipio = $municipio;
        }
        public function getMunicipio(){
            return $this->municipio;
        }
        //-----TELEFONO
        public function setTelefono($telefono){
            $this->telefono = $telefono;
        }
        public function getTelefono(){
            return $this->telefono;
        }
        // --DOCUMENTOS
        public function setDocumentos($documentos){
            $this->documentos = $documentos;
        }
        public function getDocumentos(){
            return $this->documentos;
        }
        // --AFILIADO
        public function setAfiliado($afiliado){
            $this->afiliado = $afiliado;
        }
        public function getAfiliado(){
            return $this->afiliado;
        }
        // --RETABLO
        public function setRetablo($retablo){
            $this->retablo = $retablo;
        }
        public function getRetablo(){
            return $this->retablo;
        }
        // --DIRECCION ENTREGA
        public function setDireccionEntrega($direccion_entrega){
            $this->direccion_entrega = $direccion_entrega;
        }
        public function getDireccionEntrega(){
            return $this->direccion_entrega;
        }
        // --EMAIL
        public function setEmail($email){
            $this->email = $email;
        }
        public function getEmail(){
            return $this->email;
        }
    //--------- NOMBRE HOMENAJE
        public function setNombre_homenaje($nombre_homenaje){
            $this->nombre_homenaje = $nombre_homenaje;
        }
        public function getNombre_homenaje(){
            return $this->nombre_homenaje;
        }
        // --NUMERO DOCUMENTO
        public function setN_documento($n_documento){
            $this->n_documento = $n_documento;
        }
        public function getN_documento(){
            return $this->n_documento;
        }
        // -- LUGAR FALLECIMIENTO
        public function setLugar_fallecimiento($lugar_fallecimiento){
            $this->lugar_fallecimiento = $lugar_fallecimiento;
        }
        public function getLugar_fallecimiento(){
            return $this->lugar_fallecimiento;
        }
        // --EXEQUIAS
        public function setExequias($exequias){
            $this->exequias = $exequias;
        }
        public function getExequias(){
            return $this->exequias;
        }
    // -- OTRO
        public function setOtro($otro){
            $this->otro = $otro;
        }
        public function getOtro(){
            return $this->otro;
        }
        // -- IGLESIA
        public function setIglesia($iglesia){
            $this->iglesia = $iglesia;
        }
        public function getIglesia(){
            return $this->iglesia;
        }
        // --HORAS EXEQUIAS
        public function setHoras_exequias($hora_exequias){
            $this->hora_exequias = $hora_exequias;
        }
        public function getHoras_exequias(){
            return $this->hora_exequias;
        }
        // --DESTINO FINAL
        public function setDestino_final($destino_final){
            $this->destino_final = $destino_final;
        }
        public function getDestino_final(){
            return $this->destino_final;
        }
        // -- PARENTESCO
        public function setParentesco($parentesco){
            $this->parentesco = $parentesco;
        }
        public function getParentesco(){
            return $this->parentesco;
        }

        public function UpdateHomenaje(){
            $sql = "UPDATE homenajes
            SET nombre_titular ='$this->nombre_titular', direccion ='$this->direccion', barrio='$this->barrio', municipio = '$this->municipio', telefono ='$this->telefono',email= '$this->email', nombre_homenaje = '$this->nombre_homenaje',n_documento = '$this->n_documento', afiliado='$this->afiliado', lugar_fallecimiento='$this->lugar_fallecimiento', documentos= '$this->documentos', exequias = '$this->exequias', otro='$this->otro',iglesia='$this->iglesia',hora_exequias = '$this->hora_exequias', retablo='$this->retablo',direccion_entrega='$this->direccion_entrega', destino_final = '$this->destino_final', parentescos = '$this->parentesco' 
             WHERE id = '$this->id'";
            // $conexion = $this->conexion ;
            // echo $conexion;
            $result = mysqli_query(Connect::connectdb(),$sql);
            // $result = $conexion->connectdb()->prepare($sql);
            // $result->execute(['id' => $this->id]);

            if($result == 1){
                $res = json_encode(
                    array(
                            'error' => false,
                            'message' => 'Se actualizo el homenaje.'
                    )
                 );                    
            }else{
                $res =  json_encode(
                    array(
                            'error' => true,
                            'message' => 'No hay datos para actualizar.'
                    )
                );
            }
        
            return $res;
        }
    }
    $ob = new actualizar();
    $ob->setId($id);
    $ob->setNombre_titular($nombre_titular);
    $ob->setDireccion($direccion);
    $ob->setMunicipio($municipio);
    $ob->setBarrio($barrio);
    $ob->setDocumentos($documentos);
    $ob->setTelefono($telefono);
    $ob->setRetablo($retablo);
    $ob->setAfiliado($afiliado);
    $ob->setEmail($email);
    $ob->setDireccionEntrega($direccion_entrega);
    $ob->setN_documento($n_documento);
    $ob->setNombre_homenaje($nombre_homenaje);
    $ob->setExequias($exequias);
    $ob->setLugar_fallecimiento($lugar_fallecimiento);
    $ob->setIglesia($iglesia);
    $ob->setOtro($otro);
    $ob->setHoras_exequias($hora_exequias);
    $ob->setDestino_final($destino_final);
    $ob->setParentesco($parentesco);

    $ob->UpdateHomenaje();

    
?>