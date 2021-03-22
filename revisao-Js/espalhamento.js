console.log(Math.min(5, 4, 7, 8, 6, 2, 4, 8, 4)) // Retornar o menor número da lista.
console.log(Math.max(20, 15, 78, 45, 78, 95))//Retorna o maior número da lista.

let numeros = [15, 74, 5, 2, 57, 80, 12]

//Fazedno espaalhamento do vetor para conseguir parâmetros soltos.
console.log(Math.min(...numeros)) // Retornar o menor número da lista.
console.log(Math.max(...numeros))//Retorna o maior número da lista.

//usar espalhamento
let maisNumeros = [19, 7, 8, 6, ...numeros, 0, -5]
console.log(maisNumeros)

//Usando o espalhamento em parâmetros de função (Parâmetros de resto)
function somaTudo(...nums) {//... significa que não ha quantidade fixa de parâmetros.
    let soma = 0
    //O parametro de resto, dentro de uma função, é interpretado como um vetor.
    for (let n of nums) soma += n
    return soma
}

console.log(somaTudo(15, 45, 78, 9, 7))//Quantidade de numeros é aletória.
console.log(somaTudo(15, -7, 9, 7))//Quantidade de numeros é aletória.

//Usando parametro de resto após um argumento obrigatório
function calcular(oper,...nums){
    let res
    switch(oper){
        case'+':
        res = 0
        for (let n of nums) res += n
        break
        case'*':
        res = 1 //Elemento neutro de mutiplicação.
        for (let n of nums) res *= n
        break
    }
    return res
}
console.log(calcular('+',15,19,12,32,-7,6))
console.log(calcular('*',15,19,12,32,-7,6))

//Como chamar a função somaTudo() passando a ela os números do vetor maisNumeros?
console.log(somaTudo(...maisNumeros))
console.log(calcular('+',...maisNumeros))
//console.log(calcular('*',...maisNumeros))













