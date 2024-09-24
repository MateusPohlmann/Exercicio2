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
    let operacao = Number(ask.question(`Qual sera a operacao?    
-----------------------------------------------------
Seus numeros sao: ${numero1} e ${numero2}
Digite:
1 - Soma
2 - Subtracao
3 - Multiplicacao
4 - Dividir
5 - Calculo de mod
6 - Reinserir novos numeros
0 - Sair
-----------------------------------------------------
Resposta: `))
    console.clear()
    switch (operacao) {                                                               //switch do menu
        case 1:                                                                       //soma
            console.log(`${numero1} + ${numero2} = ${somar(numero1, numero2)}`)
            usarOsMesmosNume = ask.question(`Quer usar os mesmo numeros (Sim ou Nao): `)
            if (usarOsMesmosNume.toUpperCase() === `SIM`) {
                num1Cop = numero1
                num2Cop = numero2
                usarOsMesmosNume = true
                console.log(`
-------------------------------------------
Seus numeros sao: ${num1Cop} e ${num2Cop}
-------------------------------------------
                    `)
            }
            break
        case 2:                                                                           //subtração
            console.log(`${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`)
            usarOsMesmosNume = ask.question(`Quer usar os mesmo numeros (Sim ou Nao): `)
            if (usarOsMesmosNume.toUpperCase() === `SIM`) {
                num1Cop = numero1
                num2Cop = numero2
                usarOsMesmosNume = true
                console.log(`
-------------------------------------------
Seus numeros sao: ${num1Cop} e ${num2Cop}
-------------------------------------------
                    `)
            }
            break
        case 3:
            console.log(`${numero1} * ${numero2} = ${multiplicar(numero1, numero2)}`)
            usarOsMesmosNume = ask.question(`Quer usar os mesmo numeros (Sim ou Nao): `)
            if (usarOsMesmosNume.toUpperCase() === `SIM`) {
                num1Cop = numero1
                num2Cop = numero2
                usarOsMesmosNume = true
                console.log(`
-------------------------------------------
Seus numeros sao: ${num1Cop} e ${num2Cop}
-------------------------------------------
                    `)
            }
            break
        case 4:
            console.log(`${numero1} / ${numero2} = ${dividir(numero1, numero2)}`)
            usarOsMesmosNume = ask.question(`Quer usar os mesmo numeros (Sim ou Nao): `)
            if (usarOsMesmosNume.toUpperCase() === `SIM`) {
                num1Cop = numero1
                num2Cop = numero2
                usarOsMesmosNume = true
                console.log(`
-------------------------------------------
Seus numeros sao: ${num1Cop} e ${num2Cop}
-------------------------------------------
                    `)
            }
            break
        case 5:
            console.log(`${numero1} % ${numero2} = ${mod(numero1, numero2)}`)
            usarOsMesmosNume = ask.question(`Quer usar os mesmo numeros (Sim ou Nao): `)
            if (usarOsMesmosNume.toUpperCase() === `SIM`) {
                num1Cop = numero1
                num2Cop = numero2
                usarOsMesmosNume = true
                console.log(`
-------------------------------------------
Seus numeros sao: ${num1Cop} e ${num2Cop}
-------------------------------------------
`)
            }
            break
        case 6:
            querContinuar = true
            usarOsMesmosNume = false
            break
        case 0:
            querContinuar = false
            break
        default:
            console.log(`Operacao invalida`)
            break
    }
    console.clear()
}
}
calculadora()