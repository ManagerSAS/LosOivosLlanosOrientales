var form = document.getElementById('form-contact');

form.addEventListener('submit',function(e){
    e.preventDefault();
    var data = new FormData(form);
    fetch('php/enviarDatosContacto.php',{
        method: 'POST',
        body: data
    })
        .then(res => res.json())
        .then(data => {
            if(data.error == false){
                location.href = 'admin.php';
            }else if(data.error == true){
                var message = document.getElementById('mensaje');
                message.innerHTML = /*html*/`
                    <div class="alert alert-danger m-2" role="alert">
                        El usuario no existe!
                    </div>`;
            }

        });
});