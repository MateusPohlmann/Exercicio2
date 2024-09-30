console.log("Zawarudo") 
const ask = require("readline-sync")
//este comando imprime uma mensagem na tela

/*let novaVariavel = 100
//cria uma variavel alteravel

const idade = 23
// variavel inalteravel

const nome = "Fulano"
//tipo string, são textos recebe aspas

const idade = 21
//tipo number

console.log("Olá meu nome é" , nome, "e eu tenho" , idade , "de idade")

let meuNome = "Mateus"
let meuSobrenome = "Pohlmann"
let minhaIdade = 15
let éEstudante = true
//tipo boolean, só pode receber True ou False

console.log("Meu nome é" , meuNome , meuSobrenome , "e tenho" , minhaIdade , "de idade" , "estudo?" , éEstudante)

let variavel //variavel infefinida
let a = null
console.log(typeof variavel , typeof a) //fala o tipo da variavel

const ano = "2012"
const anoConvertidoParaNumber = Number(ano)//converto de String para Number usa Number()
console.log (typeof anoConvertidoParaNumber , ano)

const idadeNumero = 23
const idadeTexto = idadeNumero.toString() //coverte de Number para String usa toString()

console.log(typeof idadeNumero)
console.log(typeof idadeTexto)*/

/*let nome = "Mateus"
let sNome = "Pohlmann"
console.log(nome + sNome)

let mod = 80 % 7 
console.log(mod)

//exercicio 1
let n1 = 3
let n2 = n1 + 1
let n3 = n1 * 5 / 2
let n4 = (n2 - 5) * -1
let n5 = 234 % 5

console.log(n2, n3, n4, n5)

//execicio 2
let var1 = 5
let var2 = 6

let var3 = (var1 === var2)//false
let var4 = (var1 !== var2)//true
let var5 = (var1 >= var2)//false
let var6 = (var1 <= var2)//true

console.log(var3, var4, var5, var6)
//exrcicios 3 e 4
let a = true
let b = false 
let c = true 
console.log(a && b, b && c, a && c, a && b && c)//false false true false
console.log(a||b, b||c, a||c, a||b||c)//true true true true

let nome = "Mateus" 
let anodeNascimento = 2009
let anoAtual = 2024
let idade = anoAtual - anodeNascimento
console.log("Nome:",nome)
console.log("Idade:",idade)
console.log("É maior de idade?", 18 <= idade)
console.log("Idade em 2050", idade + (2050 - anoAtual))*/
/*
let nome = "Mateus" 
let cor = "Vermelho"
console.log(`Meu nome é ${nome} e minha cor favorita é ${cor}`)//template string
console.log("Meu nome é " + nome + " e minha cor favorita é " + cor)//concatenação
console.log("Meu nome é" , nome , "e minha cor favorita é" , cor)//string
//.length
//.toLowerCase()
//.toUpperCase()
//.trim()
//.includes(algo)
//.replaceAll(chars1, chars2)
const frase = "Entrarão na minha casa e roubarão tudo"
console.log(frase)
let novaFraseGrande = frase.toUpperCase()
console.log(novaFraseGrande)
let trocarOporI = novaFraseGrande.replaceAll("O", "I")
console.log(trocarOporI)
let caracteres = trocarOporI.length
console.log(caracteres)
//.length
//.push()
//.pop()
//.splice(i, n)
//.includes(algo)
let racasDeCachorros = ["dalmata" , "chitzo" , "pastor Alemão" , "vira-lata" , "poodle"]
let raca = 3
console.log(racasDeCachorros[raca])
let numeros = [1 , 2 , 3 , 4 , 5 , 6]
let tamanho = numeros.length
console.log(tamanho)
let add = numeros.push(7)
console.log(numeros)
let remove = numeros.splice(3, 2)
console.log(numeros)
tamanho = numeros.length
console.log(tamanho)*/
/*
let num1 = 20
let num2 = 20
let comparacao = num1 === num2 
if (comparacao === true){
    console.log(`Sucesso, os números são iguais`)
}

let num3 = 15
let num4 = 23
if(num3 !== num4){
    console.log(`Sim, são diferentes`)
}
else{
    console.log(`Não, não são diferentes`)
}

let num5 = 34
let num6 = 531
if(num5 === num6){
    console.log(`${num5} e ${num6} são iguais`)
}else if(num5 > num6){
    console.log(`${num5} é maior que ${num6}`)
}
else{
    console.log(`${num5} é menor que ${num6}`)
}

let pokemon = `Bulbassauro`
switch (pokemon){
    case `Charmander`:
        console.log(`O Charmander é tipo fogo`)
        break
    case `Squirtle`:
        console.log(`O Squirtle é tipo água`)
        break
    case `Bulbassauro`:
        console.log(`O Bulbassauro é tipo planta e veneno`)
        break
    case `Mudkip`:
        console.log(`Swampert`)
        break
    default:
        console.log(`Pokémon não encontrado`)
}

let concluiuOEM = false
let idade = 15
let estáCursandoOutraFacul = false

if((concluiuOEM === true) && (idade <= 18) && (estáCursandoOutraFacul === false)){
    console.log(`Pode entrar na faculdade`)
}else{
    console.log(`Não pode entrar na faculdade`)
}

let i = 0
while(i < 10){
    console.log(i)
    i++
}

let estomago = 0
while(estomago < 100){
    console.log(`Quero comer mais coxinhas`)
    estomago = estomago + 10
}
let inputDoUsuario
let soma = 0

while (inputDoUsuario !== 0){
    inputDoUsuario = Number(ask.question(`Insira um numero: `))
    soma = soma + inputDoUsuario
}
console.log(soma)

for (let i = 0; i < 10; i++){
    console.log(i)
}
let numeros = [11, 15, 18, 14, 12, 13, 65, 31, 232, 54, 543, 765, 31, 133, 52]
let maiorNumero = 0
for (let i = 0; i < numeros.length; i++){
    if(numeros[i] > maiorNumero){
        maiorNumero = numeros[i]
    }
}
console.log(`O maior numero e ${maiorNumero}`)
let palavras = ["Oi", "Sumido", "tudo", "bem?", "Saudades", "rs"]
let junto = ""
for(let palavra of palavras){
    junto = junto + palavra + " "
}
console.log(junto)*/
/*
function imprimaOlaMundo(){
    console.log(`Ola mundo`)    
}
imprimaOlaMundo()

function somar(numero1, numero2){
    let resultado = numero1 + numero2
    return resultado
}
console.log(somar(2, 3))

function olaPessoa(nome){
    console.log(`Ola ${nome}`)
}
olaPessoa("Mateus")
olaPessoa("Marcos")
olaPessoa("RedDragon")

function podeDirigir(idade, temHab){
    let podeDirigir 
    if((idade >= 18) && temHab){
        podeDirigir = true
    }else{
        podeDirigir = false
    }
    return podeDirigir
}
console.log(`Pode dirigir: ${podeDirigir(18,true)}`)*/
/*
const filme = {
    nome: `Ataque do tubarão`,
    diretor: `Richard`,
    anoDeLancamento: 1999,
    elenco: [`Neymar`,`Tubarão`,`Loreta`,`Briar`,`Exodia` ],
    voceViu: false
}
console.log(`
Nome: ${filme.nome}
Diretor: ${filme.diretor}
Ano de Lancamento: ${filme["anoDeLancamento"]}
Elenco: ${filme["elenco"]}
Voce viu: ${filme["voceViu"]}`
)

const pessoa = {
    nome: `Mateus`,
    idade: 15,
    generoMusicalPreferido: `Rock`
}
console.log(`O nome da pessoa é ${pessoa.nome}, ele tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusicalPreferido}`)

filme.personagens = [`Cai cai`, `Tubarão`, `Cavaleira`, `Vampira`, `Cara GRANDE aprisionado`]
console.log(`
Elenco e personagens:
${filme.personagens[0]} = ${filme.elenco[0]}
${filme.personagens[1]} = ${filme.elenco[1]}
${filme.personagens[2]} = ${filme.elenco[2]}
${filme.personagens[3]} = ${filme.elenco[3]} 
${filme.personagens[4]} = ${filme.elenco[4]}
`
)
filme.elenco[0] = `Xuxa`
console.log(`
    Nome: ${filme.nome}
    Diretor: ${filme.diretor}
    Ano de Lancamento: ${filme["anoDeLancamento"]}
    Elenco: ${filme["elenco"]}
    Personagens: ${filme["personagens"]}
    Voce viu: ${filme["voceViu"]}
    `)

function exibirPessoa(){
const novaPessoa = {
        ...pessoa,
        comidasPreferida: [`Strogonof`, `Pizza`, `Hamburguer`],
        melhorAmigo: {
            nome: `Eduardo`,
            idade: 14,
        }
    }
console.log(`O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.comidasPreferida[0]} , ${novaPessoa.comidasPreferida[1]} e ${novaPessoa.comidasPreferida[2]}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos`)
}
exibirPessoa()*/