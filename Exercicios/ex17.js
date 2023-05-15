function mane(salario, plano) {
    let novoSalario

    switch (plano){
        case 'A':
            novoSalario = salario * 1.1
            break
        case 'B':
            novoSalario = salario * 1.15
            break
        case 'C':
            novoSalario = salario * 1.2
            break
        default:
             console.log('Ta errado Brother')
              return
          
        }
    console.log(`Novo salário: R$${novoSalario.toFixed(2)}`)    
    }
mane(2000, 'A'), mane(2000, 'B'), mane(2000, 'C'), mane(2000, 'H')