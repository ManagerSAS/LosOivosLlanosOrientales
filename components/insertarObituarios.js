var formObituario = document.getElementById('form-obituarios');

formObituario.addEventListener('submit',function(e){
    e.preventDefault();
    var data = new FormData(formObituario)
    
    fetch('php/insertarObituarios.php',{
        method:'POST',
        body: data
    })
        .then(res => res.json())
        .then(data => {
            if(data.error == false){
                swal("Se inserto correctamente el obituario!");
                $("#form-obituarios")[0].reset();
            }else{
                swal("No se inserto el obituario!");
            }
    })
})