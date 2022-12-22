Vue.component('menu-nav',{
    template: /*html*/`        
        <header id="header" role="header">
            <nav class="navbar navbar-expand-lg navbar-light pt-3 pb-3 nav-z-index">
                <div class="container">
                    <!-- ====== BRAND ====== -->
                    <a class="navbar-brand" href="index">
                        <img src="images/logo/logo.webp" height="65px">
                    </a>
                    <!-- ====== BUTTON TOGGLE ====== -->
                    <button v-on:click="mobileMenu" class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <!-- ====== NAVS ====== -->
                    <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
                        <ul id="nav-mobile" :class="['nav','ml-auto','align-items-center']">
                            <li class="nav-item" v-for="option of options">
                                <a class="nav-link text-muted" v-bind:href="option.url" v-bind:target="option.target">{{ option.link }}</a>
                            </li>
                        </ul>
                        <a class="navbar-btn btn lift" v-bind:href="shop">
                            <h4 class="text-green-light">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                </svg>
                            </h4>
                        </a> 
                    </div>
                </div>
            </nav>
        </header>
    `,
    data(){
        return{
            // <==== TEXT MENU NAV ====>
            options:[
                {link:'Inicio', url:'index'},
                {link:'¿Quiénes Somos?', url:'quienes-somos'},
                {link:'Planes exequiales', url:'planes'},
                {link:'Homenajes', url:'homenajes'},
                {link:'Sedes', url:'sedes'},
                {link:'Pagos', url:'pagoslinea', target:'_blank'},
                {link:'Noticias', url:'noticias'},
            ],
            shop: 'shop-olivos.html'
        }
    },
    methods:{
        mobileMenu(){
            var navMobile = document.getElementById('nav-mobile');
            if(window.innerWidth < 768){
                navMobile.classList.add("flex-column");
                navMobile.classList.remove("align-items-center");
            }else{
                navMobile.classList.remove("flex-column");
                navMobile.classList.add("align-items-center");
            }
        }
    }
})