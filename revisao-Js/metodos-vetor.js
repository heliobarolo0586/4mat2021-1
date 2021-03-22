let pets = [
    { nome: 'Mel', especie: 'Cão', sexo: 'F', peso: 5.5, idade: 2 },
    { nome: 'Carlos', especie: 'Gato', sexo: 'M', peso: 2.3, idade: 5 },
    { nome: 'Moises', especie: 'Cão', sexo: 'M', peso: 3.0, idade: 8 },
    { nome: 'Thor', especie: 'Peixe', sexo: 'M', peso: 0.3, idade: 15 }
]

let numeros = [2, 4, 8, -15, 7, 6, 9]

//find() -> encontra o primeiro elemento que coincide com critério
//Caso não encontre, retorna undefined
console.log(pets.find(elemento => elemento.nome === 'Thor'))
console.log(pets.find(x => x.especie === 'Gato' && x.sexo === 'F'))
console.log(pets.find(x => x.idade >= 4))

console.log('---------------------------------------------')

//some() -> Verifica se há algum elemento que coincide com o critério.
//Retorna true caso exista ou false se não existe.
console.log(pets.some(x => x.name === 'Mingau'))
console.log(pets.some(x => x.idade > 5))

//every() -> Verifica se todos os elementos passam no critério
console.log(pets.every(x => x.peso >= 1))
console.log(pets.every(x => x.especie === 'Cão'))
console.log(pets.every(x => x.peso <= 6))

console.log('---------------------------------------------')

//filter() -> Cria um novo vetor apenas com os elementos que passarem no critério
//Retorna um vetor vazio caso não haja nenhum elemento que coincida com critério
console.log(pets.filter(x => x.especie === 'Cão'))
console.log(pets.filter(x => x.peso <= 1))
console.log(pets.filter(x => x.especie === 'Gato' && x.sexo === "F"))

console.log('---------------------------------------------')

//map()-> cria novo vetor, do mesmo tamanho do original. Contendo alguma transformação dos elementos deste ultimo
//Separar apenas o nome dos pets
console.log(pets.map(x => x.nome))
console.log(pets.map(x => x.especie))
console.log(pets.map(x => x.nome.toLocaleUpperCase()))

//Novo vetor contendo números do vetor original elevados ao quadrado
console.log(numeros.map(x => x ** 2))

console.log('---------------------------------------------')

//reduce() -> reduz o vetor a apenas um valor, de acordo com função passada.



//Somando o peso dos pets
//O primeiro parâmetro é o acumulador, responsável por manter o resultado até o momento
//O segunda parâmetro é o valor atual, que deverá ser adicionado ao acumulador

//Soma
console.log(pets.reduce((acum, valor) => acum + valor))
//Multiplicação
console.log([2, 5, 4, 7].reduce((x, valor) => x * valor))
//Concatenação
console.log(['Bom ', 'dia,', 'galera!'].reduce((acum, valor) => acum + valor))

console.log('---------------------------------------------')

let pesos = pets.map(x => x.peso)//Criando um vetor apenas com os pesos dos pets
console.log(pesos)
console.log(pesos.reduce((acum, val) => acum + val))

//Fazendo tudo em um linha só 
console.log(pets.map(x=>x.peso).reduce((acum,val)=>acum+val))

//Calculando o peso médio
console.log(pets.map(x=>x.peso).reduce((acum,val)=>acum + val / pets.length))

// includes () => retorna true caso exista um elemento no vetor, igual o parâmetro passado.
console.log(numeros.includes(4))// true
console.log(numeros.includes(10))// false

console.log(pets.includes('Gato')) // False

//Diferença entre includes() e some()
//Includes() -> Procura um valor dentro de um vetor de valores simples
//some() -> procura por um critério, passado via arrow function, em um vetor simples








