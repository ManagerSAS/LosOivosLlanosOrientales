Vue.component('section-welcome',{
    template: /*html*/`
        <section id="height-auto" class="pb-4 pt-md-13">
            <div class="container">
                <div class="row align-items-center">
                    <!-- image familia -->
                    <div class="col-md-6 order-md-2">
                        <img class="w-100" src="images/imagen-principal.png">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <!-- text heading -->
                        <h1 class="text-left text-md-left mb-2 text-red text-comfortaa"> {{ title }} </h1>
                        <!-- text desc -->
                        <p class="text-justify text-md-justify mb-5 text-raleway text-muted"> {{ textDesc }}</p>
                        <!-- button join online -->
                        <a class="btn btn-danger lift text-raleway" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScVrr-wpQWw4r8l6xFRkBAjW_B8slsvMjQ26Kw11stGgPdkIA/viewform">{{btnAfiliar}}</a>
                    </div>
                </div>
            </div>
        </section>
    `,
    data(){
        return {
            title: 'Planes de Previsión Exequial',
            textDesc: 'Adquiere grandes beneficios en tu plan de previsión exequial, ven y Conoce el complemento ideal para la protección y tranquilidad en los momentos más importantes de tu vida y la de tu familia. En los olivos contamos con un amplio portafolio de servicios para la protección.',
            btnAfiliar: 'Deseo afiliarme en linea!',
        }
    },
})