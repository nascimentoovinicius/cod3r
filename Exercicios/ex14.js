function marcos(fruta) {
    switch(fruta) {
        case 'maca':
            return 'Não vendemos a fruta'
        case 'kiwi': 
            return 'Estamos sem essa fruta'
        case 'melancia': 
            return 'Aqui está'
        default:
            return 'Digitou errado brother'
    }
}

console.log(marcos('maca'), marcos('kiwi'), marcos('melancia'), marcos('julio'))