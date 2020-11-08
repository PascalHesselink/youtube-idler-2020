import {reactive, toRefs} from 'vue';

export default function user() {
    const state = reactive({
        totalSubscribers: 2324423,
        totalBalance: 34324234,
    });

    return toRefs(state);
}
