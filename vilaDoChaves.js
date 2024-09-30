const ask = require("readline-sync")
let listaDeMoradores = []
let objetosRoubados = []
//cadastro de moradores
function cadastrarMorador() {
    console.clear()
    let novoMorador = ask.question(`Qual o nome do novo morador: `)
    let novoPersonagem = {
        nome: novoMorador,
        ladrao: false,
        objetoRoubado: null,
    }
    listaDeMoradores.push(novoPersonagem)
    ask.question(`Morador cadastrado, precione ENTER para continuar.`)
    console.clear()
}
//cadastro de objetos
function cadastrarObjeto() {
    console.clear()
    let novoObjeto = ask.question(`Qual o nome do novo objeto: `)
    let novoPersonagem = {
        nome: novoObjeto,
        roubado: false,
    }
    objetosRoubados.push(novoPersonagem)
    ask.question(`Objeto cadastrado, precione ENTER para continuar.`)
    console.clear()
}
//escolhe o ladrao/objeto
function escolherMoradorEObjeto() {
    for (let morador of listaDeMoradores) {
        morador.ladrao = false
        morador.objetoRoubado = null
    }
    if (listaDeMoradores.length > 0 && objetosRoubados.length > 0) {
        let rngMoradores = Math.floor(Math.random() * listaDeMoradores.length)
        listaDeMoradores[rngMoradores].ladrao = true
        let rngObjetos = Math.floor(Math.random() * objetosRoubados.length)
        objetosRoubados[rngObjetos].roubado = true
        listaDeMoradores[rngMoradores].objetoRoubado = objetosRoubados[rngObjetos].nome
    }
    ask.question(`Precione ENTER para continuar.`)
}
//Visualisar moradores
function listarMoradores() {
    if (listaDeMoradores.length > 0) {
        for (let morador of listaDeMoradores) {
            console.log(`
${morador.nome}
-------------------------------------
                `)
        }
        ask.question(`Precione ENTER para continuar.`)
    } else {
        ask.question(`Nenhum objeto cadastrado, precione ENTER para continuar.`)
    }
}
//Visualisar objetos
function listarObjetos() {
    if (listaDeMoradores.length > 0) {
        for (let objeto of objetosRoubados) {
            console.log(`
${objeto.nome}
-------------------------------------
            `)
        }
        ask.question(`Precione ENTER para continuar.`)
    }
}
//Verificar qual o ladrao/objeto
function qualOLadrao() {
    let ladraoSorteado
    let objetoRoubado
    for (let morador of listaDeMoradores) {
        if (morador.ladrao) {
            ladraoSorteado = morador
        }
    }
    for (let objeto of objetosRoubados) {
        if (objeto.roubado) {
            objetoRoubado = objeto
        }
    }
    ask.question(`O ladrao e ${ladraoSorteado.nome} e roubou ${objetoRoubado.nome}, precione ENTER para continuar.`)
}
let funciona = true
//inicio do loop
while (funciona) {
    let resposta = Number(ask.question(`
------------------------------------
Alguem roubou um objeto
------------------------------------
1 - Sortear o ladrao/objeto
2 - Cadastrar novo morador
3 - Adicionar novo objeto roubado
4 - Visualisar os moradores da vila
5 - Visualisar os objetos roubados
6 - Investigar
0 - Sair
------------------------------------
Resposta: `))
    console.clear()
    switch (resposta) {
        case 1:
            escolherMoradorEObjeto()
            console.clear()
            break
        case 2:
            cadastrarMorador()
            console.clear()
            break
        case 3:
            cadastrarObjeto()
            console.clear()
            break
        case 4:
            listarMoradores()
            console.clear()
            break
        case 5:
            listarObjetos()
            console.clear()
            break
        case 6:
            qualOLadrao()
            console.clear()
            break
        case 0:                                                  //finalizar programa
            funciona = false
            break
    }
}