const escola = "Cod3r"

console.log(escola.charAt(4)) // mostra oque está na 4 posição da variável 
console.log(escola.charCodeAt(3)) // pega o valor dentro da tabela unicode
console.log(escola.indexOf('3')) // pega qual a posição do que está procurando dentro da string
console.log(escola.substring(1)) // mostra a partir do indice pedido
console.log(escola.substring(0, 3)) // mostra do indice 0 ao indice 3 sem mostrar o 3º 
console.log('Escola'.concat(escola).concat('!')) // adiciona novas strings dentro da string
console.log(escola.replace(3, 'e')) // subistitua os numeros pela letra E
console.log('Ana, Maria, Pedro'.split(',')) // coloca em um array separado por virgula 

