/* Escreva uma função que, dado um número inteiro n, retorne uma lista
de n strings de tal forma que a string i contém i asteriscos. Por exemplo,
para n=5, a lista retornada seria ["*", "**", "***", "****", "*****"]. */



function retornoAsteriscos(n) {
    return Array.from({ length: n}, (_, i) => '*' .repeat(i+1));
}


const n = 5;
const resultado = retornoAsteriscos(n);
console.log(resultado);