const divisaoComResto = function(dividendo, divisor) {
    let divisao =  dividendo / divisor
    let resto = dividendo % divisor
    console.log(`O resultado é ${divisao.toFixed(2)} e o resto é ${resto.toFixed(2)}`)
    
}

divisaoComResto(10, 3)
divisaoComResto(20, 7)