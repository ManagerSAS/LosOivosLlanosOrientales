<?php
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
    
    return $id;
    
?>