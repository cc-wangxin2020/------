export default function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        const that = this
        timer = setTimeout(() => {
            fn.call(that, args)
        }, delay);
    }
}