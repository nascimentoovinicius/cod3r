const n = 7 / 0 

console.log(n) // números dividos por 0 dao inifinity
console.log(typeof n)
console.log("10" / 2) // Isso é possível pois o JS reconhece o 10 como número
console.log("Show!" * 2) // Isso vai dar NaN(not a number)
console.log(0.1 + 0.7) // Isso vai dar 0.799999 imprecisão 
// console.log(10.toString())