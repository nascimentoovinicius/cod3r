function concessionaria(tipo) {
    switch (tipo) {
        case 'hatch':
            return 'Compra efetuada'
        case 'caminhonete': case 'motocicleta': case 'sedans':
            return 'Tem certeza? '
        default:
            return 'Não vendemos isso aqui não Brother'
    }
}

console.log(concessionaria('hatch'), concessionaria('caminhonete'), concessionaria('motocicleta'), concessionaria('sedans'), concessionaria('busao'))