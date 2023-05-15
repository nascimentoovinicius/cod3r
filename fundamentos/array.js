const valores = [7.7, 8.9, 7.4, 4.3]
console.log(valores[0], valores[3])
console.log(valores[4]) // da undefined

valores[4] = 10 // adicionar um item 
console.log(valores)
console.log(valores.length) // tamanho do array 

valores.push({id: 3}, false, null, 'teste') // pode, mas não é uma boa prática.
console.log(valores)

console.log(valores.pop()) // deletar o último 
delete valores[0] // deletar um escolhido
console.log(valores)
console.log(typeof valores) // object