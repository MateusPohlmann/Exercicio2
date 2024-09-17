const ask = require("readline-sync")
let resultado
let querContinuar = true
while (querContinuar === true) {
    let numero1 = Number(ask.question(`Qual o primeiro numero: `))
    let numero2 = Number(ask.question(`Qual o segundo numero: `))
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
    switch (operacao) {
        case 1:
            resultado = numero1 + numero2
            console.log(resultado)
            break
        case 2:
            resultado = numero1 - numero2
            console.log(resultado)
            break
        case 3:
            resultado = numero1 / numero2
            console.log(resultado)
            break
        case 4:
            resultado = numero1 * numero2
            console.log(resultado)
            break
        case 5:
            resultado = numero1 % numero2
            console.log(resultado)
            break
        default:
            console.log(`Operacao invalida`)
            break
        }
            querContinuar = ask.question(`Voce quer continuar (Sim ou Nao): `)
            if (querContinuar.toUpperCase() === "SIM") {
                querContinuar = true
            }
            else if (querContinuar.toUpperCase() === "NAO") {
                querContinuar = false
            }
            console.clear()
}