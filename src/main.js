import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import { firestorePlugin } from 'vuefire'


import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCVGMlFl4iFndfUGl_XYD1Wnlcc2SGE_PA',
        libraries: 'places',
    },
})
Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
