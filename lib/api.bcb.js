const axios = require('axios')
const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='09-22-2020'&$top=3&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`


const getCotacaoApi = data => axios.get(url)
const extractCotacao = res => res.data.value[0].cotacaoCompra
const getCotacao = async () => {
    const res = await getCotacaoApi('')
    const cotacao = extractCotacao(res)
    return cotacao
}


module.exports = {
    getCotacao,
    extractCotacao,
    getCotacaoApi
}