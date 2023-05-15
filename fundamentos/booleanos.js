let isAtivo = false
console.log(isAtivo) //mostra false pois está falso

isAtivo = true
console.log(isAtivo) // mostra verdadeiro pois está verdadeiro

isAtivo = 1
console.log(!!isAtivo) // ! = não, !! = não, não ou seja, sim

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos... ')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!(''|| null|| 0 || ' ')) // verdadeiro pois usamos o || = ou

let nome = 'Vinicius'
console.log(nome || 'Desconhecido')
