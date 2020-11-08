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
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function preventZoom(e) {
    if (!e?.currentTarget?.dataset?.lastTouch) return;

    var t2                            = e.timeStamp;
    var t1                            = e.currentTarget.dataset.lastTouch || t2;
    var dt                            = t2 - t1;
    var fingers                       = e.touches.length;
    e.currentTarget.dataset.lastTouch = t2;

    if (!dt || dt > 500 || fingers > 1) return; // not double-tap

    e.preventDefault();
    e.target.click();
}

window.addEventListener('touchstart', preventZoom);

createApp(App).use(router).mount('#app')
