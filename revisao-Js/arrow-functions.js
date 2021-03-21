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
console.log(potencia2(2, 5))

//Funçao sem parâmetros
function megasena() {
    //esta função retorna um número aleatório entre 1 e 60
    //Math.random()->retorna um número aleatório entre 0 (inclusive) e 1 (exclusive)
    //*60 -> Ajusta a faixa de valores para entre 0 e 59
    //+1 ->Ajusta a faixa de valores para entre 1 e 60
    //Math.floor() -> retira a parte fracionaria(casas decimais) do resultado
    return Math.floor(Math.random() * 60 + 1)
}

//6 números de um jogo da megasena
console.log(megasena(), megasena(), megasena(), megasena(), megasena(), megasena())


//Em arrow functions sem parâmetros, é necesário deixar um par vazio de parênteses
//Para marcar o lugar dos parênteses
const megasena2 = () => Math.floor(Math.random() * 60 + 1)

//6 números de um jogo da megasena
console.log(megasena2(), megasena2(), megasena2(), megasena2(), megasena2(), megasena2())


// Função com mais de uma linha de código no corpo
function somaTudo(...nums){
    let soma = 0
    for (n  of nums) soma += n
    return soma
}
console.log(somaTudo(1,2,3,4,5,6,7,8,9))

//Em arrow functions com mais de uma linha no corpo, as chaves retornam e 
//também é necessário voltar a usar a palavra return para retornar um valor  

const somaTudo2 = (...nums)=>{
    let soma = 0
    //O parâmetro de resto, dentro de uma função, é interpretado como um vetor 
    for (n  of nums) soma += n
    return soma
} 

console.log(somaTudo2(1,2,3,4,5,6,7,8,9))




