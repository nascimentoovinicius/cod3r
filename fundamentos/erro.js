function tratarErro(erro) {
    throw new Error('....')
}

function imprimirNome(obj) {
   try {
       console.log(obj.name.toUpperCase() + '!!!')
   }catch (e) {
        tratarErro(e)
   } finally {
    console.log('final')
   }

}

obj = {name: 'Roberto'}
imprimirNome(obj)