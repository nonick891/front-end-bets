import Vue from 'vue'
import App from "./App.vue"
//import store from "./store"

Vue.config.productionTip = false;

let render = h => h(App);
new Vue({ render }).$mount('#app');
