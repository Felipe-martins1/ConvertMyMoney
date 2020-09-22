const axios = require('axios')

const getUrl = data => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${data}'&$top=3&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
const getCotacaoApi = data => axios.get(getUrl(data))
const extractCotacao = res => res.data.value[0].cotacaoCompra
const getToday = () => {
    const today = new Date()
    return (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear()

}
const getCotacao = async () => {
    try {
        const today = getToday()
        const res = await getCotacaoApi(today)
        const cotacao = extractCotacao(res)
        return cotacao
    } catch (err) {
        return ''
    }
}


module.exports = {
    getCotacao,
    extractCotacao,
    getCotacaoApi
}