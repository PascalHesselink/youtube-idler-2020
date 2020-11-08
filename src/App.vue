<template>
    <div class="flex flex-col h-screen overflow-y-auto">
        <Header/>
        <router-view/>
    </div>
</template>

<script>
import Header from './components/Header';

export default {
    components : {
        Header
    }
}
</script>
