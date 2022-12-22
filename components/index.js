new Vue({
    el: '#pageHome',
    data: {
        currentTab: 'inicio',
        tabs: ['Inicio', 'Quienes-somos', 'Planes', 'Homenajes', 'Pagos', 'Contactanos', 'Noticias']
    },
    computed: { 
        currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase()
        }
    },
});