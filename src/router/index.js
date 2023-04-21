import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default (routes) => {
    const routerApp = new Router({
        mode: 'hash',
        routes,
    })

    return routerApp;
}