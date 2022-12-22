Vue.component('shop-olivos',{
    template: /*html*/`
    <section class="pt-md-12">
        <div class="container">
            <div class="row pt-5">
                <div class="col-12 col-md-12">
                    <h3 class="text-comfortaa text-muted text-center text-md-center">{{ category.casket }}</h3><br>
                </div>
            </div>
            <div class="row pb-5">
                <div class="col-12 col-md-4 my-2 justify-content-center" v-for="article of articles">
                    <div class="card m-auto" style="width: 18rem;">
                        <img v-bind:src="article.urlImg" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title text-comfortaa text-green-light">{{ article.title }}</h5>
                            <p class="card-text text-muted text-raleway">{{ article.desc }}</p>
                            <p class="card-text text-muted text-raleway"> <b> {{ article.price }} </b> </p>
                            <a id="app-whatsapp" class="btn btn-green-light" target="_blank" v-bind:href="article.whatsapp">
                                Comprar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    data(){
        return{
            category:{
                casket: 'Productos'
            },
            articles:[
                {title:'Retablo Grande', desc:'Grande(20 cm de Ancho x 30 cm de Alto)', price:'$32.000', urlImg:'images/shop/retablo.jpg', whatsapp:'https://api.whatsapp.com/send?phone=+573134187751&amp;text=Hola! deseo adquirir un prodcuto de Los Olivos, me pueden apoyar?'},
                {title:'Retablo Mediano', desc:'Mediano(15 cm de Ancho x 20 cm de Alto)', price:'$25.000', urlImg:'images/shop/retablo.jpg', whatsapp:'https://api.whatsapp.com/send?phone=+573134187751&amp;text=Hola! deseo adquirir un prodcuto de Los Olivos, me pueden apoyar?'},
                {title:'Retablo Pequeño', desc:'Pequeño(10 cm de Ancho x 15 cm de Alto)', price:'$18.000', urlImg:'images/shop/retablo.jpg', whatsapp:'https://api.whatsapp.com/send?phone=+573134187751&amp;text=Hola! deseo adquirir un prodcuto de Los Olivos, me pueden apoyar?'},
                {title:'Bonsai con placa Personalizada', desc:'Placa personalizada', price:'$170.000', urlImg:'images/shop/bonsai.jpg', whatsapp:'https://api.whatsapp.com/send?phone=+573134187751&amp;text=Hola! deseo adquirir un prodcuto de Los Olivos, me pueden apoyar?'},
                {title:'Bonsai con placa Generica', desc:'Placa generica', price:'$150.000', urlImg:'images/shop/bonsai.jpg', whatsapp:'https://api.whatsapp.com/send?phone=+573134187751&amp;text=Hola! deseo adquirir un prodcuto de Los Olivos, me pueden apoyar?'},
                {title:'Baúl del Duelo', desc:'En Los Olivos contamos con detalles que permiten acompañar el duelo.', price:'$250.000', urlImg:'images/shop/baul2.jpg', whatsapp:'https://api.whatsapp.com/send?phone=+573134187751&amp;text=Hola! deseo adquirir un prodcuto de Los Olivos, me pueden apoyar?'},
                // {title:'Arreglo Floral', desc:'Una hermosa corona para recordar la memoria de nuestro ser querido.', price:'$100.000', urlImg:'images/shop/ArregloFloral.jpg'},
                {title:'Bono Savime', desc:'Con este bono dejaremos un legado en la naturaleza.', price:'$85.000', urlImg:'images/shop/BonoSavime.jpg', whatsapp:'https://api.whatsapp.com/send?phone=+573134187751&amp;text=Hola! deseo adquirir un prodcuto de Los Olivos, me pueden apoyar?'},
                {title:'Homenaje fotografico', desc:'Un lindo retablo que nos hará recordar bellos momentos.', price:'$80.000', urlImg:'images/shop/Homenaje.webp', whatsapp:'https://api.whatsapp.com/send?phone=+573134187751&amp;text=Hola! deseo adquirir un prodcuto de Los Olivos, me pueden apoyar?'},
                {title:'Homenajearte', desc:'Una obra de arte que rinde el mas grande homenaje al amor.', price:'$150.000', urlImg:'images/shop/Homenajearte.jpg', whatsapp:'https://api.whatsapp.com/send?phone=+573134187751&amp;text=Hola! deseo adquirir un prodcuto de Los Olivos, me pueden apoyar?'},
                {title:'Urna Sencilla', desc:'Urna funeral para cenizas estilo clásico color natural y rectangular.', price:'$70.000', urlImg:'images/shop/UrnaSencilla.webp', whatsapp:'https://api.whatsapp.com/send?phone=+573204316921&amp;text=Hola! deseo adquirir un prodcuto de Los Olivos, me pueden apoyar?'},
                {title:'Urna de lujo', desc:'Urna blanca de lujo con detalles plateados en forma circular con los más altos estándares de calidad.', price:'$1.100.000', urlImg:'images/shop/UrnaDeLujo1.webp', whatsapp:'https://api.whatsapp.com/send?phone=+573204316921&amp;text=Hola! deseo adquirir un prodcuto de Los Olivos, me pueden apoyar?'},
                {title:'Urna de lujo2', desc:'Urna azul zafiro con tonos plateados de lujo decoración de aves con altos estandares de calidad.', price:'$900.000', urlImg:'images/shop/UrnaDeLujo2.webp', whatsapp:'https://api.whatsapp.com/send?phone=+573204316921&amp;text=Hola! deseo adquirir un prodcuto de Los Olivos, me pueden apoyar?'},
            ]
        }
    }
})