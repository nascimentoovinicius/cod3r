function calc(vetor) { 
    let negativos = 0
    
    for (i = 0; i < vetor.length; i++) { 
            if (vetor[i] < 0) { 
                negativos++
            }
    }

    console.log(`Negativos: ${negativos}`) 
}

calc([-1, -2, -3])
