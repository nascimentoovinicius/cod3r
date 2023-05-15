function calcularEstatisticasPontuacoes(pontuacoes) {
    const pontos = pontuacoes.split(' ').map(Number);
    let min = pontos[0];
    let max = pontos[0];
    let recordes = 0;
    let piorJogo = 1;

    pontos.forEach((pontuacao, index) => {
        if (index === 0) return; 
        if (pontuacao > max) {
          max = pontuacao;
          recordes++;
        } else if (pontuacao < min) {
          min = pontuacao;
          piorJogo = index + 1;
        }
      });
    
      return [recordes, piorJogo];
    }
    