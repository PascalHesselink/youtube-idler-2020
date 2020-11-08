<template>
    <div class="bg-white rounded-t-3xl -mt-4 h-4 -mb-1 relative"/>
    <main class="px-5 pt-3 flex flex-col flex-1 relative"
    >
        <section class="mb-6 last:mb-0">
            <h3 class="text-lg mb-2 font-medium">
                <span class="text-primary mr-1">»</span>Your stats
            </h3>
            <div class="flex flex-wrap -mx-2 -my-2">
                <div v-for="item in 4"
                     class="w-1/2 px-2 py-2"
                >
                    <div class="bg-background shadow-sm rounded-lg py-3 px-2">
                        <div class="flex flex-col items-center">
                            <p class="mb-1 font-semibold leading-none text-lg text-primary">$1.5M</p>
                            <p class="text-base leading-none">Subs per click</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mb-6 last:mb-0">
            <h3 class="text-lg mb-2 font-medium">
                <span class="text-primary mr-1">»</span>Shop
            </h3>
            <div v-for="item in 4"
                 class="bg-background shadow-sm rounded-lg py-2 px-4 mb-3 last:mb-0 flex justify-between items-center"
            >
                <span>10 subscribers per click</span>
                <button class="bg-primary text-white py-0.5 px-3 rounded-lg">$25</button>
            </div>
        </section>
    </main>
    <div class="flex flex-col flex-1 justify-end p-5 mb-3">
        <button class="bg-primary text-white text-2xl px-4 py-2 tracking-wider rounded-lg shadow">
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
