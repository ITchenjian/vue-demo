export default {
    // 命名空间，不加的话不同模块的方法属性名不能重复，否则前面的会被后面的覆盖，造成混乱
    namespaced: true,
    state: {
        other: true,
        collapse: true
    },
    mutations: {
        OTHER_MUTA (state) {
            state.other = !state.other
        },
        SET_LEFT_COLLAPSE (state) {
            state.collapse = !state.collapse
        }
    },
    actions: {
        handleOther ({commit}) {
            console.log('handleOther')
            commit('OTHER_MUTA')
        },
        setLeftCollapse ({commit}) {
            console.log('other')
            commit('SET_LEFT_COLLAPSE')
        }
    }
}