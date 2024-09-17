const ask = require("readline-sync")
let resultado
let querContinuar = true
while (querContinuar === true) {
    let operacao = Number(ask.question(`Qual sera a operacao?
-----------------------------
Digite:
1 - Soma
2 - Subtracao
3 - Divisao
4 - Multiplicacao
5 - Calculo de mod
-----------------------------
Resposta: `))
    let numero1 = Number(ask.question(`Qual o primeiro numero: `))
    let numero2 = Number(ask.question(`Qual o segundo numero: `))
    if (operacao === 1) {
        resultado = numero1 + numero2
    }
    else if (operacao === 2) {
        resultado = numero1 - numero2
    }
    else if (operacao === 3) {
        resultado = numero1 / numero2
    }
    else if (operacao === 4) {
        resultado = numero1 * numero2
    }
    else if (operacao === 5) {
        resultado = numero1 % numero2
    }
    console.log(resultado)
    querContinuar = ask.question(`Voce quer continuar (Sim ou Nao): `)
    if (querContinuar.toUpperCase() === "SIM") {
        querContinuar = true
    }
    else if (querContinuar.toUpperCase() === "NAO") {
        querContinuar = false
        console.log('Testar, calculo concluido')
    }
    console.clear()
}