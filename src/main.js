import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core and icon component */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBasketball, faTableTennisPaddleBall, faLaptop, faLanguage } from '@fortawesome/free-solid-svg-icons'
library.add(faBasketball, faTableTennisPaddleBall, faLaptop, faLanguage)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
