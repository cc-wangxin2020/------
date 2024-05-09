for (var i = 0; i < 3; i++) {
    help(i)
}

function help(a) {
    setTimeout(function () {
        console.log(a);
    }, 1000)
}  