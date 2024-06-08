import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core and icon component */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBasketball, faTableTennisPaddleBall, faLaptop, faLanguage, faCode, faLocation } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faBasketball, faTableTennisPaddleBall, faLaptop, faLanguage, faCode, faLocation)
library.add(faLinkedin, faGithub)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
