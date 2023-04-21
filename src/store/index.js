import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 

import menu from './modules/menu'
import other from './modules/other'

export default new Vuex.Store({
    modules: {
        menu,
        other
    }
});