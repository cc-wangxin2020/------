const urlSP = new URLSearchParams(location.search);
function getQueryString(key) {
    return urlSP.get(key)
}


console.log("words:", getQueryString("words"));  // vue
console.log("words:", getQueryString("wordss"))  // null