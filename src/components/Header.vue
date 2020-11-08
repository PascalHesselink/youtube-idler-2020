<template>
    <div class="bg-primary text-white px-5 pt-5 pb-8 text-2xl tracking-wider py-4 flex justify-between relative">
        <div class="absolute inset-0 opacity-10 pointer-none"
             :style="{ backgroundImage: 'url(' + require('@/assets/header.png') + ')' }"
        />
        <div class="flex flex-col items-start relative">
            <p class="mb-1 leading-none font-semibold">{{ abbreviateNumber(global.state.totalSubscribers, 'amount') }}
                <span class="text-base -ml-1">
                    {{ abbreviateNumber(global.state.totalSubscribers, 'abbreviate') }}
                </span>
            </p>
            <p class="text-lg">Total Subscribers</p>
        </div>
        <div class="flex flex-col items-end relative">
            <p class="mb-1 leading-none font-semibold">${{ abbreviateNumber(global.state.totalBalance, 'amount') }}
                <span class="text-base -ml-1">
                    {{ abbreviateNumber(global.state.totalBalance, 'abbreviate') }}
                </span>
            </p>
            <p class="text-lg">Balance</p>
        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue';
import abbreviateNumber from "../functions/abbreviateNumber";
import global from "@/global";

export default defineComponent({
    name: 'Header',
    setup() {
        return {
            abbreviateNumber
        }
    },
    inject : ["global"]
});
</script>


