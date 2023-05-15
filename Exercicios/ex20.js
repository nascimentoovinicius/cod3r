function sacar(valorSaque) {
    let notas100 = 0
    let notas50 = 0 
    let notas10 = 0
    let notas5 = 0
    let notas1 = 0
    let valorNota = calcularValorNota(valorSaque)

    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                notas100++
                break
            case 50:
                valorSaque -= 50
                notas50++
                break
            case 10:
                valorSaque -= 10
                notas10++
                break
            case 5:
                valorSaque -= 5
                notas5++
                break
            case 1:
                valorSaque -= 1
                notas1++
        }

        valorNota = calcularValorNota(valorSaque)
    }
    return resultado(notas100, notas50, notas10, notas5, notas1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100){
        return 100
    }else if (valorSaque >= 50) {
        return 50
    }else if (valorSaque >= 10) {
        return 10
    }else if (valorSaque >= 5) {
        return 5
    }else if (valorSaque >= 1) {
        return 1
    }
}

function resultado(notas100, notas50, notas10, notas5, notas1) {
    let claudio = ''
    if (notas100 > 0) {
        claudio += `${notas100} notas de R$ 100`
    }
    if (notas50 > 0) {
        claudio += `${notas50} notas de R$ 50`
    }
    if (notas10 > 0) {
        claudio += `${notas10} notas de R$ 10`
    }
    if (notas5 > 0) {
        claudio += `${notas5} notas de R$ 5`
    }
    if (notas1 > 0) {
        claudio += `${notas1} notas de R$ 1`
    }

    return claudio
}


console.log(sacar(153))