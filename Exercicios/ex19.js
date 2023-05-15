function marcelo(codigo) {
    switch (codigo) {
        case '100':
            return 'R$3,00'
        case '200':
            return 'R$4,00'
        case '300':
            return 'R$5,50'
        case '400':
            return 'R$7,50'
        case '500':
            return 'R$3,50'
        case '600':
            return 'R$2,80'
        default:
            return 'Ta errado Brother'
    }

}

console.log(marcelo('100'), marcelo('200'), marcelo('300'), marcelo('400'), marcelo('500'), marcelo('600'), marcelo('1000'))