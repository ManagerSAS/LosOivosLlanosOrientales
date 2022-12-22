Vue.component('parque-cementerio',{
    template: /*html*/`
    <section id="height-auto" >
        <div>
            <a href="https://cutt.ly/NNKtAFe" target="_blank"><img src="images/ActualizacionDatos.jpg"  id="banner" class="w-100"></a>
            <div >
                <a class="btn botonActualizar text-raleway" id="boton" href="https://cutt.ly/NNKtAFe" target="_blanck" role="button">Actualizar datos</a>
            </div>
        </div>
    </section>
   `,
   mounted(){
    this.banner();
   },
   methods:{
    banner: function(){
        if (screen.width < 768) {
            document.getElementById('banner').src="images/ActualizacionDatosCel.jpg";
            document.getElementById('boton').style.left='30%';
        }
        if (screen.width >= 767 && screen.width <= 1024) {
            // document.getElementById('banner').src="images/ActualizacionDatosCel.jpg";
            document.getElementById('boton').style.bottom="2em";
        }
    
    }
       
    }
 })
