import {computed, reactive, readonly} from "vue";

let progressData = localStorage.getItem('progress-data') ? JSON.parse(localStorage.getItem('progress-data')) : null;

const state = reactive({
    totalSubscribers : progressData?.totalSubscribers || 0,
    totalBalance     : progressData?.totalBalance || 0,
    stats            : {
        subsPerClick        : progressData?.stats?.subsPerClick || 1,
        subsPerSecond       : progressData?.stats?.subsPerSecond || 0,
        moneyPerSecondRatio : progressData?.stats?.moneyPerSecondRatio || 0.02,
        moneyPerSecond      : computed(() => {
            return parseFloat(state.totalSubscribers * state.stats.moneyPerSecondRatio);
        })
    },
    market           : {
        subsPerClick          : {
            currentLevel            : progressData?.market?.subsPerClick?.currentLevel || 0,
            startingPrice           : 25,
            increaseMultiplierPrice : 1.25,
            prefix                  : "%value% subscribers per click"
        },
        subsPerSecond         : {
            currentLevel            : progressData?.market?.subsPerSecond?.currentLevel || 0,
            startingPrice           : 50,
            increaseMultiplierPrice : 1.45,
            prefix                  : "%value% subscribers per second"
        },
        moneyIncomePercentage : {
            currentLevel            : progressData?.market?.moneyIncomePercentage?.currentLevel || 0,
            startingPrice           : 25000,
            increaseMultiplierPrice : 6,
            prefix                  : "Increase income by 0.5%"
        }
    }
});

const updateTotalSubscribers = (newVal) => {
    state.totalSubscribers = newVal;
}

const updateTotalBalance = (newVal) => {
    state.totalBalance = newVal;
}

const triggerSubscribersIncrement = () => {
    state.totalSubscribers += state.stats.subsPerClick;
}

const getItemPrice = (item) => {
    let currentLevel = item.currentLevel + 1;
    let stage        = Math.ceil(currentLevel / 5);
    let price        = item.startingPrice;
    let multiplier   = (stage * item.increaseMultiplierPrice).toFixed(2);
    for (let i = 0; i < item.currentLevel; i++)
        price = (price * item.increaseMultiplierPrice);
    return price.toFixed(0);
}

const purchaseItem = (type) => {
    let item = state.market[type];

    if (state.totalBalance >= getItemPrice(item)) {
        state.totalBalance -= getItemPrice(item);

        switch (type) {
            case "subsPerClick":
                state.stats.subsPerClick += (item.currentLevel + 1);
                break;
            case "subsPerSecond":
                state.stats.subsPerSecond += (item.currentLevel + 1);
                break;
            case "moneyIncomePercentage":
                state.stats.moneyPerSecondRatio += 0.005;
                break;
        }

        item.currentLevel++;
    }
}

export default {
    state : readonly(state),
    updateTotalSubscribers,
    updateTotalBalance,
    triggerSubscribersIncrement,
    getItemPrice,
    purchaseItem
};




