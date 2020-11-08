import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import './app.scss';

document.addEventListener("touchstart", function () {
    //
}, false);

createApp(App).use(router).mount('#app')
