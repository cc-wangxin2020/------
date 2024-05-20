
export default function (defaultData = null) {
    return {
        data() {
            return {
                loading: true,
                data: defaultData
            }
        },
        async created() {
            this.loading = true
            this.data = await this.getData()
            this.loading = false
        }
    }
}