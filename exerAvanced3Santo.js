/* Escreva uma função que retorne todos os subconjuntos de um conjunto
de números. A função deve permitir os seguintes parâmetros opcionais:
● max_size (inteiro): Limita o tamanho máximo dos subconjuntos.
● min_size (inteiro): Define o tamanho mínimo dos subconjuntos.
● distinct_only (booleano): Se definido como True, a função deve
garantir que os subconjuntos não contenham elementos duplicados.
● sort_subsets (booleano): Se definido como True, os subconjuntos e
os elementos dentro dos subconjuntos devem ser retornados em
ordem crescente. */



function subconjuntos(conjunto, { max_size = Infinity, min_size = 0, distinct_only = false, sort_subsets = false } = {}) {
    const subconjuntos = [[]];

    for (let num of conjunto) {
        const tamanhoAtual = subconjuntos.length;

        for (let i = 0; i < tamanhoAtual; i++) {
            const subconjuntoAtual = subconjuntos[i].slice();
            subconjuntoAtual.push(num);

            if (subconjuntoAtual.length <= max_size) {
                subconjuntos.push(subconjuntoAtual);
            }
        }
    }

    let resultado = subconjuntos.filter(subconjuntos => subconjuntos.length >= min_size);

    if (distinct_only) {
        resultado = resultado.filter(subconjuntos => new Set(subconjuntos).size === subconjuntos.length);

        if (sort_subsets) {
            resultado = resultado.map(subconjuntos => subconjuntos.sort((a, b) => a - b));
            resultado.sort((a, b) => a.length - b.length || a.toString().localeCompare(b.toString()));           
        }

        return resultado;
    }
}

const conjunto = [1, 2, 2];
console.log(subconjuntos(conjunto, { max_size: 2, min_size: 1, distinct_only: true, sort_subsets: true }));