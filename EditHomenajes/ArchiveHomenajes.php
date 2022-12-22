<?php
include_once "../php/conexion/conexion.php";
include_once "../php/includes/header.php";

$id = $_POST['id'];

class archivar{

    private $id;

    public function setId($id){
        $this->id = $id;
    }
    public function getId(){
        return $this->id;
    }

    public function archivarHomenaje(){
        $sql = "UPDATE homenajes
        SET estado=1 
        WHERE id='$this->id'";
        $result = mysqli_query(Connect::connectdb(),$sql);
        if($result == 1){
            $res = json_encode(
                array(
                        'error' => false,
                        'message' => 'Se archivo el homenaje.'
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
$ob = new archivar();

$ob->setId($id);

$ob->archivarHomenaje();
?>