/*function calc(mes) { //mes vai ser int
   let anuidadeAntiga = 1000
   let anuidadeNova
    switch (mes) {
        case 1:
            anuidadeNova = anuidadeAntiga * 1.05
            break
        case 2:
            anuidadeNova = anuidadeAntiga * 1.06
            break
        default:
            return 'ta errado brother'
            
    }
        
    console.log(`Você pagou no Mês ${mes} e sua anuidade passou de R$${anuidadeAntiga} para R$${anuidadeNova}`) 
}

calc(1)
calc(2)
*/

function calc(mes, valor) {
    if (mes > 0 && mes < 13) {
        let atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    }else {
        return 'Mes errado brother'
    }
}

console.log(calc(4, 100))



