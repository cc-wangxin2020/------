class MyQuery {
    constructor(className) {
        this.docs = document.querySelectorAll(className)
    }
    addClass(name) {
        console.log(name);
        console.log(this.docs);
        if (!name && this.docs.length > 0) {
            for (let i = 0; i < this.docs.length; i++) {
                this.docs[i].classList.push(name)
            }
        }
        return this
    }
    style(obj) {
        if (obj !== null && this.docs.length > 0) {
            for (let i = 0; i < this.docs.length; i++) {
                for (const o of Object.keys(obj)) {
                    this.docs[i].style[o] = obj[o]
                }
            }
        }
        return this
    }
    attr(key, value) {
        if (key) {
            for (let i = 0; i < this.docs.length; i++) {
                this.docs[i].setAttribute(key, value)
            }
        }
        return this
    }
}

const e = new MyQuery(".myclass")
    .addClass("classA")
    .style({ height: "100px" })
    .attr("title", "哈哈")

console.log(e);
