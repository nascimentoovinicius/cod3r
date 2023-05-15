// Funcão em JS é First-Class Object (Citzens)

// High Ordem Class

//forma literal
function fun1() { }

// Armazenar em uma const
const fun2 = function () {} 

// Armazenar em um array
const array =[function() {}, fun1, fun2]

//Armazenar em aum atributo de Objeto
const obj = {}
obj.falar = function () {}

// Passar funcao como parametro
function run(fun) {
    fun()
}

// Uma função pode retornar/conter uma funcao
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)