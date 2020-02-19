/**
 * Starter point file always should stay lightweight
 * Use plugins folder to mess around with Vue.use
 */

import Vue from 'vue'
import plugins from './plugins/index.js'
new Vue(plugins).$mount('#app');
