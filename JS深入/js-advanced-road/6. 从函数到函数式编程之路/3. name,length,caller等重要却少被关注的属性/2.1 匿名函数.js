const person = {
    name: "Tom"
};

person.getName =  () => {
    return this.name
}

console.log("name:", person.getName.name);
