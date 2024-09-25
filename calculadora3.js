const ask = require("readline-sync")
let querContinuar = true
let usarOsMesmosNume
let num1Cop
let num2Cop
let numero1
let numero2
function somar(num1, num2) {
    let resultado = num1 + num2
    return resultado
}
function subtrair(num1, num2) {
    let resultado = num1 - num2
    return resultado
}
function multiplicar(num1, num2) {
    let resultado = num1 * num2
    return resultado
}
function dividir(num1, num2) {                                
    let resultado = num1 / num2
    return resultado
}
function mod(num1, num2) {
    let resultado = num1 % num2
    return resultado
}
function calculadora(){
while (querContinuar) {                                                      //inicio do loop
    if (usarOsMesmosNume === true) {
        numero1 = num1Cop
        numero2 = num2Cop
    } else {
        numero1 = Number(ask.question(`Qual o primeiro numero: `))
        numero2 = Number(ask.question(`Qual o segundo numero: `))
    }
    console.clear()
    let operacao = Number(ask.question(`
Seus numeros sao: ${numero1} e ${numero2}
Qual sera a operacao?    
-----------------------------------------------------
Soma                    - 1
Subtracao               - 2
Multiplicacao           - 3
Dividir                 - 4
Calculo de mod          - 5
Reinserir novos numeros - 6
Sair                    - 0
-----------------------------------------------------
Resposta: `))
    console.clear()
    switch (operacao) {                                                               //switch do menu
        case 1:                                                                       //soma
            console.log(`${numero1} + ${numero2} = ${somar(numero1, numero2)}`)
            console.log(`
-----------------------------------------------------
Seus numeros sao: ${numero1} e ${numero2}
-----------------------------------------------------
            `)
            usarOsMesmosNume = ask.question(`Quer usar os mesmo numeros (Sim ou Nao): `)
            if (usarOsMesmosNume.toUpperCase() === `SIM`) {
                num1Cop = numero1
                num2Cop = numero2
                usarOsMesmosNume = true
            }
            break
        case 2:                                                                           //subtração
            console.log(`${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`)
            console.log(`
-----------------------------------------------------
Seus numeros sao: ${numero1} e ${numero2}
-----------------------------------------------------
            `)
            usarOsMesmosNume = ask.question(`Quer usar os mesmo numeros (Sim ou Nao): `)
            if (usarOsMesmosNume.toUpperCase() === `SIM`) {
                num1Cop = numero1
                num2Cop = numero2
                usarOsMesmosNume = true
            }
            break
        case 3:                                                                            //multiplicacao
            console.log(`${numero1} * ${numero2} = ${multiplicar(numero1, numero2)}`)
            console.log(`
-----------------------------------------------------
Seus numeros sao: ${numero1} e ${numero2}
-----------------------------------------------------
            `)
            usarOsMesmosNume = ask.question(`Quer usar os mesmo numeros (Sim ou Nao): `)
            if (usarOsMesmosNume.toUpperCase() === `SIM`) {
                num1Cop = numero1
                num2Cop = numero2
                usarOsMesmosNume = true
                
            }
            break
        case 4:                                                                           //divisao
            console.log(`${numero1} / ${numero2} = ${dividir(numero1, numero2)}`)
            console.log(`
-----------------------------------------------------
Seus numeros sao: ${numero1} e ${numero2}
-----------------------------------------------------
            `)
            usarOsMesmosNume = ask.question(`Quer usar os mesmo numeros (Sim ou Nao): `)
            if (usarOsMesmosNume.toUpperCase() === `SIM`) {
                num1Cop = numero1
                num2Cop = numero2
                usarOsMesmosNume = true
            }
            break
        case 5:                                                                           //calculo de mod
            console.log(`${numero1} % ${numero2} = ${mod(numero1, numero2)}`)
            console.log(`
-----------------------------------------------------
Seus numeros sao: ${numero1} e ${numero2}
-----------------------------------------------------
            `)
            usarOsMesmosNume = ask.question(`Quer usar os mesmo numeros (Sim ou Nao): `)
            if (usarOsMesmosNume.toUpperCase() === `SIM`) {
                num1Cop = numero1
                num2Cop = numero2
                usarOsMesmosNume = true
            }
            break
        case 6:                                                                            //reinserir os numeros
            querContinuar = true
            usarOsMesmosNume = false
            break
        case 0:                                                                           //sair
            querContinuar = false
            break
        default:                                                                          //operacao inesistente
            console.log(`Operacao invalida`)
            break
    }
    console.clear()
}
}
calculadora()
