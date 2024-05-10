import { config } from "./config.js"
import { delay } from "./delay.js"

function print(index) {
    console.clear()
    const content = config.content.substring(0, index + 1)
    console.log(content);
}

async function run() {
    for (let i = 0; i < config.content.length; i++) {
        await delay(config.time)
        print(i)
    }
}
run()