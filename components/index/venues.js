Vue.component('venues',{
    template: /*html*/`
        <section id="height-auto" class="pt-5 pb-5 pt-md-11 pb-md-11">
            <div class="container">
                <div class="row align-items-center">
                    <!-- image familia -->
                    <div class="col-12 col-md-7 text-center">
                        <img class="w-100" src="images/sedes.webp">
                    </div>
                    <div class="col-12 col-md-5">
                        <!-- text heading -->
                        <h1 class="text-center text-md-left mb-2 text-green-light text-comfortaa"> {{title}} </h1>
                        <!-- text desc -->
                        <p class="text-justify text-md-justify mb-3 text-raleway text-muted">
                            {{ textDesc }}
                        </p>
                        <!-- button join online -->
                        <div class="text-center text-md-left">
                            <a class="btn btn-outline-green lift text-raleway" href="sedes.html" role="button">{{btnAfiliar}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    data(){
        return {
            title: 'Sedes los Olivos Llanos Orientales',
            textDesc: 'La mejor infraestructura de la región para rendir el mejor homenaje al amor a la memoria de nuestros seres queridos que han partido. Con más de 25 años de experiencia en el mercado nuestra infraestructura provee un ambiente de comodidad y tranquilidad a los usuarios permitiendo una su estancia cómoda durante el homenaje.',
            btnAfiliar: 'Conoce todas las sedes',
        }
    },
})