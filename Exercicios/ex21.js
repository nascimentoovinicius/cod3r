function calcular(idade) {
    valorfinal = 0
    valorInicial = 100
    if (idade < 10) {
       valorfinal = valorInicial += 80 
    }
    if (idade >= 10 && idade <= 30) {
       valorfinal =  valorInicial += 50
    }
    if (idade > 30 && idade <= 60) {
        valorfinal = valorInicial += 95
    }
    if (idade > 60 ) {
       valorfinal = valorInicial += 130
    }

    console.log(`O valor final do seu plano é: ${valorfinal}`)
}

calcular(5)
calcular(10)
calcular(55)
calcular(76)
