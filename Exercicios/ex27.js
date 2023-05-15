function cal(altC1, altC2, txPerAnoC1, txPerAnoC2) { 
    if (altC1 < altC2) {
        console.log('Existe uma criança Menor!')
        if (txPerAnoC1 > txPerAnoC2) {
            console.log('Criança 1 vai passar a criança 2 em X anos')
        }else {
            console.log('Criança 1 nunca vai passar a criança 2')
        }
    }

    if (altC2 < altC1) {
        console.log('Existe uma criança Menor!')
        if (txPerAnoC2 > txPerAnoC1) {
            console.log('Criança 2 vai passar a Criança 1 em X anos')
        }else { 
            console.log('Criança 2 nunca vai passar a Criança 1')
        }
    }else if (altC1 == altC2) {
        console.log('As 2 crianças são do mesmo tamanho')
    }

}   


//  criança 1 menor, nunca vai passar criança 2 cal(1.50, 1.60, 1, 2)
// criança 1 menor, vai passar criança 2 cal(1.50, 1.60, 2, 1)

// criança 2 menor, nunca vai pasar criança 1 cal(1.60, 1.50, 2, 1)
// crinça 2 menor, vai passar a criança 1 cal(1.60, 1.50, 1, 2)

// as duas do mesmo tamanho! cal(1.60, 1.60, 2, 2)