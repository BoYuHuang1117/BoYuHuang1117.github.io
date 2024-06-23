import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core and icon component */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBasketball, faTableTennisPaddleBall, faLaptop, faLanguage, faCode, faLocation, faDatabase, faServer} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faBasketball, faTableTennisPaddleBall, faLaptop, faLanguage, faCode, faLocation, faDatabase, faServer)
library.add(faLinkedin, faGithub)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
