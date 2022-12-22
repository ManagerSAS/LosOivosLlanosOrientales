Vue.component('welcome-homenaje',{
    template: /*html*/`
        <section id="height-auto" class="pt-4 pb-4 pt-md-13">
            <div class="container">
                <div class="row align-items-center">
                    <!-- image familia -->
                    <div class="col-12 col-md-5 order-md-2 text-center">
                        <img class="image-familia1" src="images/planes/planUnidos.webp">
                    </div>
                    <div class="col-12 col-md-6 order-md-1">
                        <!-- text heading -->
                        <h1 class="text-center text-md-left mb-2 text-green-light text-comfortaa"> {{title}} </h1>
                        <!-- text desc -->
                        <p class="text-center text-md-left text-raleway text-muted">
                            {{textDesc}}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `,
    data(){
        return {
            title: 'En todo momento, Estamos a tu lado.',
            textDesc: 'En los Olivos contamos con un amplio portafolio de servicios para tu protección y la de tu familia.',
            btnAfiliar: 'Deseo afiliarme en linea!',
        }
    },
})