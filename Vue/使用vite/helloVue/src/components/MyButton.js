export default {
    data(){
        return {
            count:0
        }
    },
    template:`
        <div>
        <button @click='count++'>点击</button><span>{{count}}</span>
        <hr>
        </div>
    `
}