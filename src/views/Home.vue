<template>
    <div class="bg-white rounded-t-3xl -mt-4 h-4 -mb-1 relative"/>
    <main class="px-5 pt-3 flex flex-col flex-1 relative"
    >
        <section class="mb-6 last:mb-0">
            <h3 class="text-xl mb-2 font-medium">
                <span class="text-primary mr-1">»</span>Your stats
            </h3>
            <div class="flex flex-wrap -mx-2 -my-2">
                <div class="w-1/2 px-2 py-3">
                    <div class="bg-background shadow rounded-lg py-3 px-2">
                        <div class="flex flex-col items-center">
                            <p class="mb-1 font-semibold leading-none text-xl text-primary">{{ abbreviateNumber(global?.state?.stats?.subsPerClick) }}</p>
                            <p class="text-base leading-none">Subs per click</p>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 px-2 py-3">
                    <div class="bg-background shadow rounded-lg py-3 px-2">
                        <div class="flex flex-col items-center">
                            <p class="mb-1 font-semibold leading-none text-xl text-primary">{{ abbreviateNumber(global?.state?.stats?.subsPerSecond) }}</p>
                            <p class="text-base leading-none">Subs per sec</p>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 px-2 py-3">
                    <div class="bg-background shadow rounded-lg py-3 px-2">
                        <div class="flex flex-col items-center">
                            <p class="mb-1 font-semibold leading-none text-xl text-primary">${{ abbreviateNumber(global?.state?.stats?.moneyPerSecond?.toFixed(2)) }}</p>
                            <p class="text-base leading-none">Money per second</p>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 px-2 py-3">
                    <div class="bg-background shadow rounded-lg py-3 px-2">
                        <div class="flex flex-col items-center">
                            <p class="mb-1 font-semibold leading-none text-xl text-primary">{{ abbreviateNumber((global?.state?.stats?.moneyPerSecondRatio * 100)?.toFixed(1)) }}%</p>
                            <p class="text-base leading-none">Monetizing ratio</p>
                        </div>
                    </div>
                </div>
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
