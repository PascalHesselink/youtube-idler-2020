<template>
    <div class="bg-primary text-white px-5 pt-5 pb-8 text-2xl tracking-wider py-4 flex justify-between relative">
        <div class="absolute inset-0 opacity-10 pointer-none"
             :style="{ backgroundImage: 'url(' + require('@/assets/header.png') + ')' }"
        />
        <div class="flex flex-col items-start relative">
            <p class="mb-1 leading-none font-semibold">2332213å
                <span class="text-base -ml-1">
                    K
                </span>
            </p>
            <p class="text-lg">Lorem Ipsum</p>
        </div>
        <div class="flex flex-col items-end relative">
            <p class="mb-1 leading-none font-semibold">$1.5
                <span class="text-base -ml-1">
                    M
                </span>
            </p>
            <p class="text-lg">Lorem Ipsum</p>
        </div>
    </div>
</template>

<script lang="ts">
import abbreviateNumber from "../functions/abbreviateNumber";

import {Vue} from 'vue-class-component';

export default class Header extends Vue {
    setup() {
        return { abbreviateNumber };
    }

    mounted() {
        console.log(abbreviateNumber(234423243));
    }
}
</script>
