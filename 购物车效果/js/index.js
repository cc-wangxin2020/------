// 单个商品的数据
// function UIGoods(data) {
//     this.choose = 0
//     this.data = data
// }

// UIGoods.prototype.geTotalPrice = function(){
//     return this.data.price * this.choose
// }
// UIGoods.prototype.isChoose = function() {
//     return this.choose > 0
// }
// UIGoods.prototype.increase = function (){
//     this.choose++
// }
// UIGoods.prototype.decrease = function (){
//     if (this.choose === 0){
//         return
//     }
//     this.choose--
// }
// 单个商品的数据
class UIGoods {
    constructor(data) {
        this.choose = 0
        this.data = data
    }
    getTotalPrice() {
        return this.choose * this.data.price
    }
    isChoose() {
        return this.choose > 0
    }
    increase() {
        this.choose++
    }
    decrease() {
        if (this.choose === 0) {
            return
        }
        this.choose--
    }
}

// 整个页面的数据
class UIData {
    constructor(goods) {
        let data = []
        for (let i = 0; i < goods.length; i++) {
            let obj = new UIGoods(goods[i])
            data.push(obj)
        }
        this.data = data
        // 起送价和配送费
        this.deliveryThreshold = 30
        this.deliveryPrice = 5
    }
    increase(index) {
        this.data[index].increase()
    }
    decrease(index) {
        this.data[index].decrease()
    }
    getTotalPrice() {
        let sum = 0
        for (let i = 0; i < this.data.length; i++) {
            sum += this.data[i].getTotalPrice()
        }
        return sum
    }
    getTotalChooseNumber() {
        let sum = 0
        for (let i = 0; i < this.data.length; i++) {
            sum += this.data[i].choose
        }
        return sum
    }
    hasGoodsInCar(){
        return this.getTotalChooseNumber() > 0
    }
    hasCrossDeliveryThreshold(){
        return this.getTotalPrice() >= this.deliveryThreshold;
    }
    isChoose(index) {
        return this.data[index].choose > 0
    }
}

let uigoods = new UIData(goods)
console.log(uigoods);