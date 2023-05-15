function calc() { 
    let dentro = 0
    let fora = 0
    let vetor = [1, 2, 3, 4, 10, 11, 12, ,13, 20]
    for (let i = 0; i < vetor.length; i++) { 
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentro++
        }else {
            fora++
        }
    }
    console.log(`Inteiro: ${dentro} Não Inteiro: ${fora}`)
}

calc()