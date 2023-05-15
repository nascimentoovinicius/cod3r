function calc(num1, op, num2) {
    switch (op) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '/':
            return num1 / num2
        case '*':
            return num1 * num2
        default:
            return 'Ta errado irmão'

    }
}

console.log(calc(2, '+', 2), calc(2, '-', 2), calc(2, '/', 2), calc(2, '*', 2), calc(2, '%', 2))