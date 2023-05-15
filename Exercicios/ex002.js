const tri = function(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        console.log('Equilatero')
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        console.log('Isósceles')
    }else {
        console.log('Escaleno')
    } 
}

tri(1, 1, 1)
tri(1, 1, 2)
tri(1, 2, 3)