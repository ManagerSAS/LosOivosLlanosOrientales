var formContinuidad = document.getElementById('form-continuidad');

formContinuidad.addEventListener('submit', function(e){
    e.preventDefault();
    var data = new FormData(formContinuidad);
    fetch('php/enviarDatosContinuidadPlan.php',{
        method: 'POST',
        body: data
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.send == true ){
                // location.href = 'index.html';
                swal("Mensaje enviado!", "Se envió correctamente tu mensaje", "success");
            }else{
                swal("No se envio tu mensaje!", "Si tu mensaje no se envio correctamente puedes escribirnos al correo: contactenosvillavicencio@losolivos.co", "error");
            }
        });
});