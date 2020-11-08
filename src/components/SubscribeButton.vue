<template>
    <div class="flex flex-col flex-1 justify-end p-5 mb-3">
        <button id="sub-button"
                class="bg-primary text-white text-2xl px-4 py-2 tracking-wider rounded-lg shadow border-b-6 border-primary-dark active:border-b-4 active:border-primary-darker active:bg-primary-dark active:mt-0.5"
                @click="global.triggerSubscribersIncrement"
        >
            Subscribe
        </button>
    </div>
</template>

<script>
import {defineComponent} from 'vue';
import global from "@/global";

export default defineComponent({
    inject : ["global"]
});
</script>


