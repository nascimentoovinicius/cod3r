const formatarMoeda = function(numero) { 
    const dinheiro = Number(numero)
    const opcoes = {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }
    return dinheiro.toLocalString('pt-BR', opcoes)
}

console.log(formatarMoeda(0.30000000000000004))