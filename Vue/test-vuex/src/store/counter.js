export default {
    state: {
        count: 0
    },
    mutations: {
        increase(state) {
            state.count++
        },
        decrease(state) {
            state.count--;
        },
        power(state, payload) {
            state.count = state.count ** payload
        }
    },
    actions: {
        ansyIncrease(context) {
            setTimeout(() => {
                context.commit('increase')
            }, 1000)
        }
    }
}