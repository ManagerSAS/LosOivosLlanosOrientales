Vue.component('valores-serfunllanos',{
    template: /*html*/`
        <section class="pt-5 pb-5 ">
            <div class="container">
                <!-- ====== VALORES SERFUNLLANOS ====== -->
                <div class="row align-items-center">
                    <div class="col-12 col-md-12">
                        <!-- ====== TEXT HEADING ====== -->
                        <h1 class="text-center text-green-light text-comfortaa">{{titleValores}}</h1>
                        <hr class="hr-sm hr-border-green-light">
                    </div>
                </div>
                <div class="row align-center-items justify-content-center">
                    <!-- ====== TRABAJO EN EQUIPO ====== -->
                    <div class="col-12 col-md-4 my-3">
                        <a target="_blank" class="card container-step border-none">
                            <div class="card-body text-center">
                                <div class="text-orange">
                                    <h1> 
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-check-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9.854-2.854a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                        </svg>
                                    </h1>
                                    <h4 class="text-comfortaa">{{ Trabajoenequipo }}</h4>
                                </div>
                                <hr class="hr-sm hr-border-green-apple">
                                <p class="text-center text-muted text-raleway">{{ TrabajoenequipoDesc }}</p>
                            </div>
                        </a>
                    </div>
                    <!-- ====== RESPONSABILIDAD Y COMPROMISO ====== -->
                    <div class="col-12 col-md-4 my-3">
                        <a target="_blank" class="card container-step border-none">
                            <div class="card-body text-center">
                                <div class="text-green-apple-light">
                                    <h1> 
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-hand-thumbs-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                                        </svg>
                                    </h1>
                                    <h4 class="text-comfortaa">{{ ResponsabilidadCompromiso }}</h4>
                                </div>
                                <hr class="hr-sm hr-border-green-apple">
                                <p class="text-center text-muted text-raleway">{{ ResponsabilidadCompromisoDesc }}</p>
                            </div>
                        </a>
                    </div>
                    <!-- ====== LIDERAZGO ====== -->
                    <div class="col-12 col-md-4 my-3">
                        <a target="_blank" class="card container-step border-none">
                            <div class="card-body text-center">
                                <div class="text-red">
                                    <h1> 
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-flag" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"/>
                                        </svg>
                                    </h1>
                                    <h4 class="text-comfortaa">{{ liderazgo }}</h4>
                                </div>
                                <hr class="hr-sm hr-border-green-apple">
                                <p class="text-center text-muted text-raleway">{{ liderazgoDesc }}</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="row align-center-items justify-content-center">
                    <!-- ====== TRANSPARENCIA ====== -->
                    <div class="col-12 col-md-4 my-3">
                        <a target="_blank" class="card container-step border-none">
                            <div class="card-body text-center">
                                <div class="text-green-light">
                                    <h1> 
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"/>
                                            <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                        </svg>
                                    </h1>
                                    <h4 class="text-comfortaa">{{ transparencia }}</h4>
                                </div>
                                <hr class="hr-sm hr-border-green-apple">
                                <p class="text-center text-muted text-raleway">{{ transparenciaDesc }}</p>
                            </div>
                        </a>
                    </div>
                    <!-- ====== PASION POR EXCELENCIA ====== -->
                    <div class="col-12 col-md-4 my-3">
                        <a target="_blank" class="card container-step border-none">
                            <div class="card-body text-center">
                                <div class="text-orange-light">
                                    <h1> 
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-emoji-laughing" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path fill-rule="evenodd" d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5z"/>
                                            <path d="M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
                                        </svg>
                                    </h1>
                                    <h4 class="text-comfortaa">{{ pasion }}</h4>
                                </div>
                                <hr class="hr-sm hr-border-green-apple">
                                <p class="text-center text-muted text-raleway">{{ pasionDesc }}</p>
                            </div>
                        </a>
                    </div>
                </div>



                <!-- ====== PRINCIPIOS SERFUNLLANOS ====== -->
                <div class="row align-items-center">
                    <div class="col-12 col-md-12">
                        <!-- ====== TEXT HEADING ====== -->
                        <h1 class="text-center text-green-light text-comfortaa">{{title}}</h1>
                        <hr class="hr-sm hr-border-green-light">
                    </div>
                </div>
                <div class="row align-center-items justify-content-center">
                    <!-- ====== RESPETO ====== -->
                    <div class="col-12 col-md-4 my-3">
                        <a target="_blank" class="card container-step border-none">
                            <div class="card-body text-center">
                                <div class="text-green-apple-light">
                                    <h1> 
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-hand-index" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M6.75 1a.75.75 0 0 0-.75.75V9a.5.5 0 0 1-1 0v-.89l-1.003.2a.5.5 0 0 0-.399.546l.345 3.105a1.5 1.5 0 0 0 .243.666l1.433 2.15a.5.5 0 0 0 .416.223h6.385a.5.5 0 0 0 .434-.252l1.395-2.442a2.5 2.5 0 0 0 .317-.991l.272-2.715a1 1 0 0 0-.995-1.1H13.5v1a.5.5 0 0 1-1 0V7.154a4.208 4.208 0 0 0-.2-.26c-.187-.222-.368-.383-.486-.43-.124-.05-.392-.063-.708-.039a4.844 4.844 0 0 0-.106.01V8a.5.5 0 0 1-1 0V5.986c0-.167-.073-.272-.15-.314a1.657 1.657 0 0 0-.448-.182c-.179-.035-.5-.04-.816-.027l-.086.004V8a.5.5 0 0 1-1 0V1.75A.75.75 0 0 0 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 0 0-3.5 0v5.34l-1.199.24a1.5 1.5 0 0 0-1.197 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.272-2.715a2 2 0 0 0-1.99-2.199h-.582a5.184 5.184 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.634 2.634 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z"/>
                                        </svg>
                                    </h1>
                                    <h4 class="text-comfortaa">{{respeto}}</h4>
                                </div>
                                <hr class="hr-sm hr-border-green-apple">
                                <p class="text-center text-muted text-raleway">{{ respetoDesc }}</p>
                            </div>
                        </a>
                    </div>
                    <!-- ====== RENTABILIDAD ====== -->
                    <div class="col-12 col-md-4 my-3">
                        <a target="_blank" class="card container-step border-none">
                            <div class="card-body text-center">
                                <div class="text-orange-light">
                                    <h1> 
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cash-stack" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 3H1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1h-1z"/>
                                            <path fill-rule="evenodd" d="M15 5H1v8h14V5zM1 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1z"/>
                                            <path d="M13 5a2 2 0 0 0 2 2V5h-2zM3 5a2 2 0 0 1-2 2V5h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 13a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                                        </svg>
                                    </h1>
                                    <h4 class="text-comfortaa">{{ rentability }}</h4>
                                </div>
                                <hr class="hr-sm hr-border-green-apple">
                                <p class="text-center text-muted text-raleway">{{ rentabilityDesc }}</p>
                            </div>
                        </a>
                    </div>
                    <!-- ====== RESPONSABILIDAD ====== -->
                    <div class="col-12 col-md-4 my-3">
                        <a target="_blank" class="card container-step border-none">
                            <div class="card-body text-center">
                                <div class="text-orange">
                                    <h1> 
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bookmark-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                            <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                        </svg>
                                    </h1>
                                    <h4 class="text-comfortaa">{{ responsibility }}</h4>
                                </div>
                                <hr class="hr-sm hr-border-green-apple">
                                <p class="text-center text-muted text-raleway">{{ responsibilityDesc }}</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="row align-center-items justify-content-center">
                    <!-- ====== HONESTIDAD ====== -->
                    <div class="col-12 col-md-4 my-3">
                        <a target="_blank" class="card container-step border-none">
                            <div class="card-body text-center">
                                <div class="text-red">
                                    <h1> 
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
                                            <path fill-rule="evenodd" d="M4.5 10.5A.5.5 0 0 1 5 10h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
                                        </svg>
                                    </h1>
                                    <h4 class="text-comfortaa">{{ honestidad }}</h4>
                                </div>
                                <hr class="hr-sm hr-border-green-apple">
                                <p class="text-center text-muted text-raleway">{{ honestidadDesc }}</p>
                            </div>
                        </a>
                    </div>
                    <!-- ====== PRODUCTIVIDAD ====== -->
                    <div class="col-12 col-md-4 my-3">
                        <a target="_blank" class="card container-step border-none">
                            <div class="card-body text-center">
                                <div class="text-green-light">
                                    <h1> 
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bar-chart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"/>
                                        </svg>
                                    </h1>
                                    <h4 class="text-comfortaa">{{ productividad }}</h4>
                                </div>
                                <hr class="hr-sm hr-border-green-apple">
                                <p class="text-center text-muted text-raleway">{{ productividadDesc }}</p>
                            </div>
                        </a>
                    </div>
                    <!-- ====== COMPETITIVIDAD ====== -->
                    <div class="col-12 col-md-4 my-3">
                        <a target="_blank" class="card container-step border-none">
                            <div class="card-body text-center">
                                <div class="text-green-apple">
                                    <h1> 
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clipboard-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                            <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                        </svg>
                                    </h1>
                                    <h4 class="text-comfortaa">{{ competitividad }}</h4>
                                </div>
                                <hr class="hr-sm hr-border-green-apple">
                                <p class="text-center text-muted text-raleway">{{ competitividadDesc }}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `,
    data(){
        return {
            titleValores: 'Valores serfunllanos',

            transparencia: 'Transparencia',
            transparenciaDesc: 'Todos nuestros actos administrativos son diáfanos y visibles a la luz de nuestros clientes y autoridades de dirección y control.',
            
            ResponsabilidadCompromiso: 'Responsabilidad y Compromiso',
            ResponsabilidadCompromisoDesc: 'Asumimos nuestras funciones con la responsabilidad y cumplimiento que garantiza nuestra propia satisfacción, la de nuestros clientes y los resultados esperados por nuestras empresas asociadas.',
            
            liderazgo: 'Liderazgo',
            liderazgoDesc: 'Estamos atentos en la búsqueda de oportunidades de desarrollo en los planes y servicios, en la canalización de las necesidades de nuestros clientes y en aunar esfuerzos en las diferentes áreas para lograr los ideales de la organización.',
            
            Trabajoenequipo: 'Trabajo en equipo',
            TrabajoenequipoDesc: 'Las bases de nuestras acciones son : El diseño y oferta integral de planes y servicios, las sinergias entre las áreas de la organización , el alineamiento con las políticas y objetivos de la organización, para garantizar el crecimiento y desarrollo.',
            
            pasion: 'Pasión por excelencia',
            pasionDesc: 'Nuestro trabajo diario se guía por la calidad y el mejoramiento continuo de nuestros productos y servicios, para facilitar la competitividad de la organización',

            //<!-- ====== PRINCIPIOS SERFUNLLANOS ====== -->
            title: 'Principios serfunllanos',
            
            respeto: 'Respeto',
            respetoDesc: 'Nuestras acciones corresponden con las necesidades éticas y morales de nuestra comunidad, los intereses sociales y económicos de nuestros colaboradores y empresas asociadas, así como con el cumplimiento de nuestras obligaciones frente al Estado.',
            
            rentability: 'Rentabilidad',
            rentabilityDesc: 'Nuestras acciones corresponden con las necesidades éticas y morales de nuestra comunidad, los intereses sociales y económicos de nuestros colaboradores y empresas asociadas, así como con el cumplimiento de nuestras obligaciones frente al Estado.',
            
            responsibility: 'Responsabilidad',
            responsibilityDesc: 'Asumimos nuestras funciones con la responsabilidad y cumplimiento que garantiza nuestra propia satisfacción, la de nuestros clientes y los resultados esperados por nuestras empresas asociadas.',
            
            honestidad: 'Honestidad',
            honestidadDesc: 'La honradez, disciplina y constancia rigen nuestra conducta y comportamiento con todos nuestros relacionados y comunidad en general.',
            
            productividad: 'Productividad',
            productividadDesc: 'Nuestras acciones están encaminadas al uso óptimo de los recursos disponibles para obtener buenos resultados y más de lo planeado en el menor tiempo posible.',
            
            competitividad: 'Competitividad',
            competitividadDesc: 'Las mejores prácticas de calidad, ambientales ,organizacionales, de mercado y desarrollo de personal asegurarán nuestra mejor oferta de servicios en cualquier condición de mercado.',
        }
    },
})