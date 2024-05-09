function sum(...args) {
    console.log(args);
    console.log(Array.isArray(arguments));
    console.log(arguments instanceof Array);
    for (let i of arguments) {
        console.log(i);
    }
}

sum(1, 2)
