function claudio(dia) {
    switch (dia) {
        case 1: case 7:
            return 'Fim de Semana'
        case 2: case 3: case 4: case 5: case 6:
            return 'Dias úteis'
        default:
            return 'Dia Inválido'
        }   
 
    }

console.log(claudio(2))
console.log(claudio(1))
console.log(claudio(123))