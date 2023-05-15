// factory Simples
function criarPessoa() {
    return {
        nome: 'Ana', 
        idade: 32
    }
}

console.log(criarPessoa())

function criarProduto(nome, preco, desconto = 0.1) {
    return {
        nome, 
        preco, 
        desconto
    }
}

console.log(criarProduto('iphone', 200))