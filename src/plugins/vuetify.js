import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import iconsComponents from '../components/ui/icons/index.js'
Vue.use(Vuetify);

export default new Vuetify({
 icons: {
   iconfont: 'mdi',
   values: iconsComponents
 },
 theme: {
   dark: true,
   themes: {
     dark: {
       primary: '#ffffff',
       accent: '#FF4081',
       secondary: '#ffe18d',
       success: '#4CAF50',
       info: '#2196F3',
       warning: '#FB8C00',
       error: '#FF5252',
       dark: '#121212',
       border: '#F3C515'
     },
     light: {
       primary: '#1976D2',
       accent: '#e91e63',
       secondary: '#30b1dc',
       success: '#4CAF50',
       info: '#2196F3',
       warning: '#FB8C00',
       error: '#FF5252'
     }
   }
 }
});