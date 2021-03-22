let nota = 6.7

let situacao

/*if (nota>=6){
    situacao='Aprovado'
} else{
    situacao = 'Reprovado'
}

*/

/*if (nota >=) situacao = 'Aprovado'
else situacao = 'Reprovado'*/

situacao = nota >= 6 ? 'Aprovado' : 'Reprovado'
console.log({ nota, situacao })

let user = 'zemane'
let msg

msg = (user ==='root'|| user ==='admin'? 'Superusuário':'Usuário comum')

console.log({user,msg})



