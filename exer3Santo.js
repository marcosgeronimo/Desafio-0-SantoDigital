/* Escreva uma função que retorne todos os subconjuntos de um conjunto
de números. Por exemplo, se a entrada for [1, 2], a saída deve ser [[], [1],
[2], [1, 2]]. */



function subconjuntos(conjunto) {
    const subconjuntos = [[]];

    for (let num of conjunto) {
        const tamanhoAtual = subconjuntos.length;

        for (let i = 0; i < tamanhoAtual; i++) {
            const subconjuntoAtual = subconjuntos[i];
            subconjuntos.push([...subconjuntoAtual, num]);
        }
    }

    return subconjuntos;
}

const conjunto = [1, 2];
console.log(subconjuntos(conjunto));