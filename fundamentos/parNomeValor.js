const saudacao = 'Opa' // contexto léxico 1


function exec() {
    const saudacao = 'Falaa' // contexto  léxico 2
    return saudacao
}

// Objetos são grupos alinhados de pares nome/valor

const clientes = {
    nome: 'Pedro',
    idade: 32, 
    peso: 90,
    endereco: {
        logadouro: 'Rua aaa',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(clientes)