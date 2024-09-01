/*==========Exercício II (Avançado)================================
Dado um array de números inteiros, escreva uma função que retorne o
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
únicos (ou seja, (a, b) e (b, a) são considerados o mesmo par).*/




function encontrarParesComMenorDiferenca(par, { allow_duplicates = true, sorted_pairs = false, unique_pairs = false } = {}) {
    if (par.length < 2) return [];

    // Ordenando o array.
    par.sort((a, b) => a - b);

    let menorDiferenca = Infinity;
    let resultado = [];

    // Comparando pares para encontrar a menor diferença.
    for (let i = 0; i < par.length - 1; i++) {
        let diferenca = Math.abs(par[i + 1] - par[i]);

        if (diferenca < menorDiferenca) {
            menorDiferenca = diferenca;
            resultado = [[par[i], par[i + 1]]];
        } else if (diferenca === menorDiferenca) {
            resultado.push([par[i], par[i + 1]]);
        }
    }

    // Remover pares duplicados se allow_duplicates for false.
    if (!allow_duplicates) {
        resultado = resultado.filter(parr => parr[0] !== parr[1]);
    }

    // Ordenar os pares se sorted_pairs for true.
    if (sorted_pairs) {
        resultado = resultado.map(parr => parr.sort((a, b) => a - b));
    }

    // Remover pares duplicados se unique_pairs for true.
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

// Chamando o uso.
const par = [4, 2, 1, 3, 6, 7, 8];
console.log(encontrarParesComMenorDiferenca(par, { allow_duplicates: true, sorted_pairs: true, unique_pairs: true }));





/*=========================Exercício III (Avançado)==================
Escreva uma função que retorne todos os subconjuntos de um conjunto
de números. A função deve permitir os seguintes parâmetros opcionais:
● max_size (inteiro): Limita o tamanho máximo dos subconjuntos.
● min_size (inteiro): Define o tamanho mínimo dos subconjuntos.
● distinct_only (booleano): Se definido como True, a função deve
garantir que os subconjuntos não contenham elementos duplicados.
● sort_subsets (booleano): Se definido como True, os subconjuntos e
os elementos dentro dos subconjuntos devem ser retornados em
ordem crescente.*/



function subconjuntos(conjunto, { max_size = Infinity, min_size = 0, distinct_only = false, sort_subsets = false } = {}) {
    const subconjuntos = [[]];

    //Detalhe sobre cada numero no conjunto.
    for (let num of conjunto) {
        const tamanhoAtual = subconjuntos.length;

        //Cada subconjunto existente, recebe o atual. E cópia do subconjunto.
        for (let i = 0; i < tamanhoAtual; i++) {
            const subconjuntoAtual = subconjuntos[i].slice();
            subconjuntoAtual.push(num);


            //Novo subconjunto se respeiar o tamanho máximo.
            if (subconjuntoAtual.length <= max_size) {
                subconjuntos.push(subconjuntoAtual);
            }
        }
    }


    //Filtrando tamanho minimo
    let resultado = subconjuntos.filter(subconjuntos => subconjuntos.length >= min_size);


    //Removendo duplicados, se distinct_only for true.
    if (distinct_only) {
        resultado = resultado.filter(subconjuntos => new Set(subconjuntos).size === subconjuntos.length);

        //Ordenando subconjuntos caso sort_subesets for true.
        if (sort_subsets) {
            resultado = resultado.map(subconjuntos => subconjuntos.sort((a, b) => a - b));
            resultado.sort((a, b) => a.length - b.length || a.toString().localeCompare(b.toString()));           
        }

        return resultado;
    }
}

//Chamando o uso.
const conjunto = [1, 2, 2];
console.log(subconjuntos(conjunto, { max_size: 2, min_size: 1, distinct_only: true, sort_subsets: true }));