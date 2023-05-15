const nota = function(nota) {
    let notaCorrigia = arrendondar(nota)
    if (notaCorrigia >= 40) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}


function arrendondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

nota(100) // ok
nota(30) // ok 
nota(38) // ok
nota(88) // ok 
nota(61) // ok 


classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)

