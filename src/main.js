import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import './app.scss';

window.addEventListener('load', (event) => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

document.addEventListener("touchstart", function () {
    //
}, false);

createApp(App).use(router).mount('#app')
