import { isMe, login, logout } from "@/api/login"

export default {
    namespaced: true,
    state: {
        loading: false,
        user: null
    },
    getters: {
        getStatus: (state) => {
            if (state.loading) {
                return 'loading'
            }
            else if (state.user) {
                return 'login'
            } else {
                return 'unlogin'
            }
        }
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        async login(context, payload) {
            if(context.user) {
                return
            }
            context.commit('setLoading', true)
            const resp = await login(payload)
            context.commit('setUser', resp.data)
            context.commit('setLoading', false)
            return resp
        },
        async logout(context) {
            context.commit('setLoading', true)
            const resp = await logout()
            context.commit('setUser', null)
            context.commit('setLoading', false)
        },
        async isMe(context) {
            context.commit('setLoading', true)
            const resp = await isMe()
            context.commit('setUser', resp.data)
            context.commit('setLoading', false)
        }
    }
}