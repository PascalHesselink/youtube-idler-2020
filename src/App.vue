<template>
    <div class="flex-1 flex flex-col overflow-x-hidden overflow-y-scroll">
        <Header/>
        <router-view/>
        <Navigation/>
    </div>
</template>

<script>
import Header from './components/Header';
import Navigation from './components/Navigation';
import global from "./global";

export default {
    data() {
        return {
            gameInterval : null
        }
    },
    components : {
        Header,
        Navigation
    },
    provide    : {
        global
    },
    mounted() {
        this.gameInterval = setInterval(() => {
            global.updateTotalBalance(global.state.totalBalance + global.state.stats.moneyPerSecond);
            global.updateTotalSubscribers(global.state.totalSubscribers + global.state.stats.subsPerSecond);

            localStorage.setItem('progress-data', JSON.stringify(global.state));
        }, 1000);
    },
    beforeUnmount() {
        clearInterval(this.gameInterval);
        this.gameInterval = null;
    }
}
</script>
