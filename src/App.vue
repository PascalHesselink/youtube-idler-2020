<template>
    <div class="flex flex-col h-screen overflow-x-hidden overflow-y-scroll">
        <Header/>
        <router-view/>
    </div>
</template>

<script>
import Header from './components/Header';
import global from "./global";

export default {
    data() {
        return {
            gameInterval : null
        }
    },
    components : {
        Header
    },
    provide    : {
        global
    },
    mounted() {
        this.gameInterval = setInterval(() => {
            global.updateTotalBalance(global.state.totalBalance + global.state.stats.moneyPerSecond);
            global.updateTotalSubscribers(global.state.totalSubscribers + global.state.stats.subsPerSecond);
        }, 1000);
    },
    beforeUnmount() {
        clearInterval(this.gameInterval);
        this.gameInterval = null;
    }
}
</script>
