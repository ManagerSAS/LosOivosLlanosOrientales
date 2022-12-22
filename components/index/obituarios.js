Vue.component('obituarios-ciudad',{
    template: /*html*/`
        <section id="height-auto" class="pt-5 pb-5 pt-md-13">
                <div class="container">
                    <div class="row align-center-items justify-content-center">
                        <!-- sede villavicencio -->
                        <div v-for="city of citys"
                            class="col-12 col-md-3 mt-2 mb-2">

                            <a  v-bind:href="city.url"
                                class="card container-step border-none" target="_blank">
                                <div class="card-body text-center" style="background-color: rgb(91 172 156 / 5%);">
                                    <div class="text-green-light">                                
                                        <h1> 
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                                <path fill-rule="evenodd" d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            </svg>
                                        </h1>
                                        <h4 class="text-comfortaa"> {{ city.nameCity }} </h4>
                                    </div>
                                    <hr class="hr-sm hr-border-green-light">
                                    <p class="text-center text-muted text-raleway"> {{ city.adress }} </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    `,
    data(){
        return{
            citys:[
                {
                    nameCity:'Villavicencio', 
                    adress: 'Avenida 40 No. 20 - 05/15', 
                    url:'php/obituariosCity/obituariosVillavicencio'
                },
                {
                    nameCity:'Acacías', 
                    adress: 'Carrera 16 No.12 - 48', 
                    url:'php/obituariosCity/obituariosAcacias'},
                {
                    nameCity:'Granada', 
                    adress: 'Carrera 14 No.13-16', 
                    url:'php/obituariosCity/obituariosGranada'
                },
                {
                    nameCity:'San José', 
                    adress: 'Carrera 24 # 9 - 77', 
                    url:'php/obituariosCity/obituariosSanJose'
                },
                {
                    nameCity:'Yopal', 
                    adress: 'Carrera 19 No. 33 - 25', 
                    url:'php/obituariosCity/obituariosYopal'
                }
            ]
        }
    }
})