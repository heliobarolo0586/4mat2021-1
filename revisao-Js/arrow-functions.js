//No Js existe a função Math.pow() que faz isso
function quadrado(x) {
    return x * x
}

//Caractrristicas da função acima:
//(1) tem apenas um parâmetro
//(2) Tem apenas uma linha de código, com return

console.log(quadrado(7))

// Uma função com essas caracteristicas pode ser escrita de forma abreviada
// da seguinte forma
//1) A palavra function é substituida pelo sinal => depois do parâmetro
//2) Os parenteses em torno do parâmetro foram omitidos
//3) As chaves foram omitidas
//4) A palavra return foi omitida
let quadrado2 = x => x * x

//Função com dois parâmetros
function potencia(b, e) {
    return b ** e
}

console.log(potencia(2, 5))

//No formato arrow function, quando há mais de um parâmetro
//parânteses em volta deles retornam
let potencia2 = (b, e) => b ** e
console.log(potencia2(2,5))