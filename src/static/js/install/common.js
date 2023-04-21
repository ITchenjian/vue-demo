import config from '@/static/config.js'

export default (Vue) => {
    /**
     * @description 配置文件
     */
    Vue.$webConfig = Vue.prototype.$webConfig = config
}