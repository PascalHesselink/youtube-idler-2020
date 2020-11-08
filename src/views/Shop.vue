<template>
    <div class="bg-white rounded-t-3xl -mt-4 h-4 -mb-1 relative"/>
    <main class="px-5 pt-3 flex flex-col flex-1 relative"
    >
        <section class="mb-6 last:mb-0">
            <h3 class="text-xl mb-2 font-medium">
                <span class="text-primary mr-1">»</span>Shop
            </h3>
            <div v-for="(item, type) in global.state.market"
                 class="bg-background shadow rounded-lg py-3 px-4 mb-3 last:mb-0 flex justify-between items-center"
            >
                <span>{{ item.prefix.replace('%value%', ((item.currentLevel) + 1)) }}</span>
                <button class="py-0.5 px-3 rounded-lg transition-opacity ease-in-out duration-300"
                        :class="[(global.state.totalBalance >= global.getItemPrice(item)) ? 'opacity-100 text-white bg-green-500 border-b-4 border-green-600 active:border-b-2 active:border-green-700 active:bg-green-600 active:mt-0.5' : 'opacity-50 text-gray-700 bg-gray-400 border-b-4 border-gray-500 active:border-b-2 active:border-gray-600 active:bg-gray-500 active:mt-0.5']"
                        @click="global.purchaseItem(type)"
                >${{ abbreviateNumber(global.getItemPrice(item)) }}
                </button>
            </div>
        </section>
    </main>
    <SubscribeButton/>
</template>

<script>
import {defineComponent} from 'vue';
import abbreviateNumber from "../functions/abbreviateNumber";
import global from "@/global";
import SubscribeButton from '../components/SubscribeButton';

export default defineComponent({
    setup() {
        return {
            abbreviateNumber
        }
    },
    components : {
        SubscribeButton
    },
    inject     : ["global"]
});
</script>

