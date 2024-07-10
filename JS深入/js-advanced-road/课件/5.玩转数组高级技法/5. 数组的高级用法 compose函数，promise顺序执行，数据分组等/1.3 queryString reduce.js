const urtObj = location.search.slice(1)
    .split("&")
    .filter(Boolean)
    .reduce(function (obj, cur) {
        var arr = cur.split("=");
        if (arr.length != 2) {
            return obj;
        }
        obj[decodeURIComponent(arr[0])] = decodeURIComponent(arr[1]);
        return obj;
    }, {});

function getQueryString(key) {
    return urtObj[key]
}

