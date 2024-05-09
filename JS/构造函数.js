// JS所有的对象 都是通过构造函数产生的

/**
 * 使用构造函数创建一副扑克牌
 */
function Poker(number, color) {
    if (number < 1 || number > 15 || color < 1 || color > 4) {
        throw Error('出错啦！')
    } else {
        this.number = number
        this.color = color
        this.print = function () {
            let colors = ['♥', '♠', '♣', '♦']
            let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'joker', 'JOKER']
            if (this.number === 14) {
                console.log(numbers[this.number - 1]);
                return
            }
            if (this.number === 15) {
                console.log(numbers[this.number - 1]);
                return
            }
            console.log(colors[this.color - 1] + '' + numbers[this.number - 1]);

        }
    }
}

/**
 * 构造一副扑克牌
 */
function Deck() {
    this.pockers = []
    for (let i = 1; i <= 13; i++) {
        for (let j = 1; j <= 4; j++) {
            let poker = new Poker(i, j)
            this.pockers.push(poker)
        }
    }
    this.pockers.push(new Poker(14, 1))
    this.pockers.push(new Poker(15, 1))
    this.length = this.pockers.length
    this.print = function () {
        for (let i = 0; i < this.pockers.length; i++) {
            this.pockers[i].print()
        }
    }
}
Deck.prototype.shuffle = function () {
    this.pockers.sort(function () {
        return Math.random() - 0.5
    })
}
// let poker = new Poker(15, 4)
// poker.print()
let deck = new Deck()
deck.shuffle()
deck.print()
// console.log(deck.length);