//executar: node teste2.js

//função para realizar a verificação
function verificaFibonacci(numero){
    let a = 0
    let b = 1
    let temp

    while(b <= numero){
        if(b === numero){
            return true // o numero pertence 
        }
        temp = a + b
        a = b
        b = temp
    }

    return false // o numero nao pertence
}


//altere o numero para testar
const numero = 13

//condicional para verficiar se o numero pertence ou nao a sequencia
if(verificaFibonacci(numero)){
    console.log(`${numero} pertence à sequência de Fibonacci`)
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci`)
}
