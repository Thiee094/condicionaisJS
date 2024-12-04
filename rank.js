function vitoriaJogador(vit1) {
    // Definindo a quantidade de vitórias
    let qtdeVitoria = vit1;

    // Atribuindo a categoria conforme a quantidade de vitórias
    let categoria;
    if (qtdeVitoria <= 10) {
        categoria = 'Ferro';
    } else if (qtdeVitoria >= 11 && qtdeVitoria <= 20) {
        categoria = 'Bronze';
    } else if (qtdeVitoria >= 21 && qtdeVitoria <= 50) {
        categoria = 'Prata';
    } else if (qtdeVitoria >= 51 && qtdeVitoria <= 80) {
        categoria = 'Ouro';
    } else if (qtdeVitoria >= 81 && qtdeVitoria <= 90) {
        categoria = 'Diamante';
    } else if (qtdeVitoria >= 91 && qtdeVitoria <= 100) {
        categoria = 'Lendário';
    } else if (qtdeVitoria >= 101) {
        categoria = 'Imortal';
    }

    // Retorna a quantidade de vitórias e a categoria
    return { qtdeVitoria, categoria };
}

// Função para derrotas
function derrota(der1) {
    // Define a quantidade de derrotas
    let qtdeDerrota = der1;

    // Retorna o número de derrotas
    return qtdeDerrota;
}

// Chamando as funções
let win = vitoriaJogador(76); // Quantidade de vitórias
let lost = derrota(20); // Quantidade de derrotas

// Calculando o saldo de vitórias e derrotas
let rank = win.qtdeVitoria - lost;

// Exibindo o resultado
console.log('O Herói tem de saldo de ' + rank + ' vitórias e está no nível de ' + win.categoria);
