function encontrarMaiorEMenor(vetor) {
    if (vetor.length === 0) {
      console.log("Vetor vazio");
      return;
    }
  
    let maior = vetor[0];
    let menor = vetor[0];
  
    for (let i = 1; i < vetor.length; i++) {
      if (vetor[i] > maior) {
        maior = vetor[i];
      }
      if (vetor[i] < menor) {
        menor = vetor[i];
      }
    }
  
    console.log(`O maior valor do vetor é: ${maior}`);
    console.log(`O menor valor do vetor é: ${menor}`);
  }
  

  encontrarMaiorEMenor([1, 2, 3, 4, 5, 6])