console.log(Math.min(5,4,7,8,6,2,4,8,4)) // Retornar o menor número da lista.
console.log(Math.max(20,15,78,45,78,95))//Retorna o maior número da lista.

let numeros = [15,74,5,2,57,80,12]

//Fazedno espaalhamento do vetor para conseguir parâmetros soltos.
console.log(Math.min(...numeros)) // Retornar o menor número da lista.
console.log(Math.max(...numeros))//Retorna o maior número da lista.

//usar espalhamento
let maisNumeros= [19,7,8,6,...numeros,0,-5]
console.log(maisNumeros)






