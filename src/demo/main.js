import Vue from 'vue'
import install from '@/static/js/install'
import App from './App.vue'
import store from '@/store/index'
import createRouter from '@/router/index'
import routes from './router'

const router = createRouter(routes);

Vue.config.productionTip = false

Vue.use(install)
new Vue({
    store,
    router,
    render: h => h('router-view'),
}).$mount('#app')
