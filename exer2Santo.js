/* Dado um array de números inteiros, escreva uma função que retorne o
par de números com a menor diferença absoluta. Se houver mais de um
par com a mesma diferença, retorne todos eles em uma lista. */


function encontrarParesMenorDiferenca(par) {
    if (par.length < 2) return [];

    par.sort((a, b) => a - b);


    let menorDiferenca = Infinity;
    let resultado = [];

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

const par = [4, 2, 1, 3, 6, 7, 8];
console.log(encontrarParesMenorDiferenca(par));
