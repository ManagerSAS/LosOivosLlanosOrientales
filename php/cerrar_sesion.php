<?php
    session_start();
    header("Location:../login");
    session_destroy();
?>