import Vue from 'vue';
export function getComponentRootCom(comp, props) {
    const vm = new Vue({
        render: (h) => h(comp, { props })
    })
    vm.$mount();
    return vm.$el;
}