/* Dado um array de números inteiros, escreva uma função que retorne o
par de números com a menor diferença absoluta. Se houver mais de um
par com a mesma diferença, retorne todos eles em uma lista. Além
disso, a função deve permitir os seguintes parâmetros opcionais:
● allow_duplicates (booleano)
Se definido como False, os pares de números não podem conter
valores duplicados.
● sorted_pairs (booleano)
Se definido como True, os pares no resultado devem estar
ordenados em ordem crescente.
● unique_pairs (booleano)
Se definido como True, a função deve retornar apenas pares
únicos (ou seja, (a, b) e (b, a) são considerados o mesmo par). */


function encontrarParesComMenorDiferenca(par, { allow_duplicates = true, sorted_pairs = false, unique_pairs = false } = {}) {
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

    if (!allow_duplicates) {
        resultado = resultado.filter(parr => parr[0] !== parr[1]);
    }

    if (sorted_pairs) {
        resultado = resultado.map(parr => parr.sort((a, b) => a - b));
    }

    if (unique_pairs) {
        const conjuntoUnico = new Set();
        resultado = resultado.filter(parr => {
            const parString = JSON.stringify(parr);
            if (conjuntoUnico.has(parString)) {
                return false;
            } else {
                conjuntoUnico.add(parString);
                return true;
            }
        });
    }

    return resultado;
}

const par = [4, 2, 1, 3, 6, 7, 8];
console.log(encontrarParesComMenorDiferenca(par, { allow_duplicates: true, sorted_pairs: true, unique_pairs: true }));