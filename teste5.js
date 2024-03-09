//criando a função para inverter os caracteres de uma string

function inverterCaracteres(string){
    let novaString = ''
    for(let i = string.length -1; i >=0; i--){
        novaString += string[i]
    }
    return novaString
}

//troque a string conforme deseja
const texto = "Adoraria entrar para a target sistemas"
const stringInvertida = inverterCaracteres(texto)
console.log(`String original: ${texto}`)
console.log(`String invertida: ${stringInvertida}`)

//use no terminal node teste5.js para testar