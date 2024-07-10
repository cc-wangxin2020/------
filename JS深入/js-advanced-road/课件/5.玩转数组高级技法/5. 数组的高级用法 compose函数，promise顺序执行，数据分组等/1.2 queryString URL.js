const urlObj = new URL(location.href);
function getQueryString(key){
    return urlObj.searchParams.get(key)
}

console.log("words:", getQueryString("words")); // vue
console.log("words:", getQueryString("words")); // null