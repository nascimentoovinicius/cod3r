function calcularMedia(vetor) {
    var soma = 0;
    for(var i = 0; i < vetor.length; i++) {
      soma += vetor[i];
    }
    var media = soma / vetor.length;
    return media;
  }
  
  
  var meuVetor = [1, 2, 3, 4, 5];
  var mediaDoVetor = calcularMedia(meuVetor);
  console.log(mediaDoVetor);
  