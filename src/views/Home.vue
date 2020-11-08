<template>
    <div class="bg-white rounded-t-3xl -mt-4 h-4 -mb-1 relative"/>
    <main class="px-5 pt-3 flex flex-col flex-1 relative"
    >
        <section class="mb-6 last:mb-0">
            <h3 class="text-lg mb-2 font-medium">
                <span class="text-primary mr-1">»</span>Your stats
            </h3>
            <div class="flex flex-wrap -mx-2 -my-2">
                <div class="w-1/2 px-2 py-2">
                    <div class="bg-background shadow rounded-lg py-3 px-2">
                        <div class="flex flex-col items-center">
                            <p class="mb-1 font-semibold leading-none text-lg text-primary">{{ abbreviateNumber(global?.state?.stats?.subsPerClick) }}</p>
                            <p class="text-base leading-none">Subs per click</p>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 px-2 py-2">
                    <div class="bg-background shadow rounded-lg py-3 px-2">
                        <div class="flex flex-col items-center">
                            <p class="mb-1 font-semibold leading-none text-lg text-primary">{{ abbreviateNumber(global?.state?.stats?.subsPerSecond) }}</p>
                            <p class="text-base leading-none">Subs per sec</p>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 px-2 py-2">
                    <div class="bg-background shadow rounded-lg py-3 px-2">
                        <div class="flex flex-col items-center">
                            <p class="mb-1 font-semibold leading-none text-lg text-primary">${{ abbreviateNumber(global?.state?.stats?.moneyPerSecond?.toFixed(2)) }}</p>
                            <p class="text-base leading-none">Money per second</p>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 px-2 py-2">
                    <div class="bg-background shadow rounded-lg py-3 px-2">
                        <div class="flex flex-col items-center">
                            <p class="mb-1 font-semibold leading-none text-lg text-primary">{{ abbreviateNumber((global?.state?.stats?.moneyPerSecondRatio * 100)?.toFixed(1)) }}%</p>
                            <p class="text-base leading-none">Monetizing ratio</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mb-6 last:mb-0">
            <h3 class="text-lg mb-2 font-medium">
                <span class="text-primary mr-1">»</span>Shop
            </h3>
            <div v-for="(item, type) in global.state.market"
                 class="bg-background shadow rounded-lg py-2 px-4 mb-3 last:mb-0 flex justify-between items-center"
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
    <div class="flex flex-col flex-1 justify-end p-5 mb-3">
        <button id="sub-button"
                class="bg-primary text-white text-2xl px-4 py-2 tracking-wider rounded-lg shadow border-b-6 border-primary-dark active:border-b-4 active:border-primary-darker active:bg-primary-dark active:mt-0.5"
                @click="global.triggerSubscribersIncrement"
        >
            Subscribe
        </button>
    </div>
    <nav class="border-t">
        <ul class="flex flex-row">
            <li v-for="item in 4"
                class="flex flex-col items-center justify-center w-full pt-3 pb-2 bg-background text-gray-400"
            >
                <div class="pb-1 border-b-2"
                     :class="[ item === 1 ? 'border-primary text-primary' : 'border-background' ]"
                >
                    <svg class="w-6 h-6 fill"
                         fill="none"
                         stroke="currentColor"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                        <path stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        ></path>
                    </svg>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
import {defineComponent} from 'vue';
import abbreviateNumber from "../functions/abbreviateNumber";
import global from "@/global";

export default defineComponent({
    name   : 'Header',
    setup() {
        return {
            abbreviateNumber
        }
    },
    inject : ["global"]
});
</script>
