
/*====================Exercício I========================================
Escreva uma função que, dado um número inteiro n, retorne uma lista
de n strings de tal forma que a string i contém i asteriscos. Por exemplo,
para n=5, a lista retornada seria ["*", "**", "***", "****", "*****"].*/


function retornoAsteriscos(n) {
    return Array.from({ length: n}, (_, i) => '*' .repeat(i+1));
}


//Chamando o uso.
const n = 5;
const resultado = retornoAsteriscos(n);
console.log(resultado);





/*===================Exercício II==================================
Dado um array de números inteiros, escreva uma função que retorne o
par de números com a menor diferença absoluta. Se houver mais de um
par com a mesma diferença, retorne todos eles em uma lista.*/


function encontrarParesMenorDiferenca(par) {
    if (par.length < 2) return [];

    //Ordenando o Array.
    par.sort((a, b) => a - b);


    let menorDiferenca = Infinity;
    let resultado = [];

    //Comparando pares seguidos pra encontrar a menor diferença.
    for (let i = 0; i < par.length - 1; i++) {
        let diferenca = Math.abs(par[i + 1] - par[i]);

        if (diferenca < menorDiferenca) {
            menorDiferenca = diferenca;
            resultado = [[par[i], par[i + 1]]];
        } else if (diferenca === menorDiferenca) {
            resultado.push([par[i], par[i + 1]]);
        }
    }

    return resultado;
}

//Chamando o uso.
const par = [4, 2, 1, 3, 6, 7, 8];
console.log(encontrarParesMenorDiferenca(par));





/*===================Exercício III=========================================
Escreva uma função que retorne todos os subconjuntos de um conjunto
de números. Por exemplo, se a entrada for [1, 2], a saída deve ser [[], [1],
[2], [1, 2]].*/


function subconjuntos(conjunto) {
    const subconjuntos = [[]];

    //Detalhe sobre cada numero no conjunto.
    for (let num of conjunto) {
        const tamanhoAtual = subconjuntos.length;

        //Cada subconjunto existente, recebe o atual.
        for (let i = 0; i < tamanhoAtual; i++) {
            const subconjuntoAtual = subconjuntos[i];
            subconjuntos.push([...subconjuntoAtual, num]);
        }
    }

    return subconjuntos;
}

//Chamando o uso.
const conjunto = [1, 2];
console.log(subconjuntos(conjunto));