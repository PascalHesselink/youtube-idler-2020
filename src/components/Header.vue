<template>
    <div class="bg-primary text-white px-5 pt-5 pb-8 text-2xl tracking-wider py-4 flex justify-between relative">
        <div class="absolute inset-0 opacity-10 pointer-none"
             :style="{ backgroundImage: 'url(' + require('@/assets/header.png') + ')' }"
        />
        <div class="flex flex-col items-start relative">
            <p class="mb-1 leading-none font-semibold">{{ abbreviateNumber(totalSubscribers, 'amount') }}
                <span class="text-base -ml-1">
                    {{ abbreviateNumber(totalSubscribers, 'abbreviate') }}
                </span>
            </p>
            <p class="text-lg">Total Subscribers</p>
        </div>
        <div class="flex flex-col items-end relative">
            <p class="mb-1 leading-none font-semibold">{{ abbreviateNumber(totalBalance, 'amount') }}
                <span class="text-base -ml-1">
                    {{ abbreviateNumber(totalBalance, 'abbreviate') }}
                </span>
            </p>
            <p class="text-lg">Balance</p>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import abbreviateNumber from "@/functions/abbreviateNumber";

export default defineComponent({
    name: 'Header',
    setup() {
        const totalSubscribers = ref(423423);
        const totalBalance = ref(34324234);

        return {
            totalSubscribers,
            totalBalance,
            abbreviateNumber
        }
    }
});
</script>


