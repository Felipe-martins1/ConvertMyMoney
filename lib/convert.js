const convert = (cotacao, quantidade) => {
    return cotacao * quantidade
}

const toMoney = valor => {
    return parseFloat(valor).toFixed(2)
}

const toTodayBr = () => {
    const todayBR = new Date()
    return todayBR.getDate() + '/' + (todayBR.getMonth() + 1) + '/' + todayBR.getFullYear()

}

module.exports = {
    convert,
    toMoney,
    toTodayBr
}