export function formatData(tamp) {
    const data = new Date(+tamp)
    const month = data.getMonth() + 1 < 10 ? '0' + (data.getMonth() + 1) : data.getMonth() + 1
    const day = data.getDay() < 10 ? '0' + data.getDay() : data.getDay()
    return `${data.getFullYear()}-${month}-${day}`
}