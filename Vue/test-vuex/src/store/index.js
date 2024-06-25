import Vue from 'vue';
import Vuex from 'vuex';
import loginUser from './loginUser';
import counter from './counter';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        loginUser,
        counter
    },
    strict: true
})
window.store = store
export default store;
