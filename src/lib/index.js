import VueScrollBarAbove from './vue-scroll-bar-above.vue'

const vueScrollBarAbove = {
    install: function (Vue) {
        Vue.component('vue-scroll-bar-above', VueScrollBarAbove)
    }
};


if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vueScrollBarAbove)
}
export default vueScrollBarAbove