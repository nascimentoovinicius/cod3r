const jurosSimples = function(cap, tx, tmp) {
    return cap + (cap * tx * tmp)
}

const jurosCompostos = function(cap, tx, tmp) {
    return cap * (1 + tx) ** tmp
}

console.log(jurosCompostos(1000, 10/100, 2))
console.log(jurosSimples(1000, 10/100, 2))