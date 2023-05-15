function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2)) // certo
console.log(area(2)) // só com um parametro
console.log(area()) // sem parametro
console.log(area(2, 3, 17, 22, 44)) // muitos parametros
console.log(area(5, 5)) // mais que o permitido
