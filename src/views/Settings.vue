<template>
    <div class="bg-white rounded-t-3xl -mt-4 h-4 -mb-1 relative"/>
    <main class="px-5 pt-3 flex flex-col flex-1 relative"
    >
        <section class="mb-6 last:mb-0">
            <h3 class="text-xl mb-2 font-medium">
                <span class="text-primary mr-1">»</span>Settings
            </h3>
        </section>
    </main>
</template>

<script>
import {defineComponent} from 'vue';
import global from "@/global";

export default defineComponent({
    inject : ["global"]
});
</script>
