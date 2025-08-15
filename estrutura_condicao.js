// Estrutura de condições: Permite executar diferentes ações com base em uma condição

// Operador condicional ternário

let age = 21
console.log 
(age >=18 // condição
    ? " você pode dirigir." // se verdadeiro
    : "Você não pode dirigir." // se falso
)


/* falsy: quando um valor é considerado false. 
thruty: quando é considerado verdadeiro em contextos onde um booleano é obrigatório (condicionais e loops).*/

console.log ("EXEMPLOS DE FALSY")
console.log(false ? "VERDADEIRO" : "FALSO")
console.log(0 ? "VERDADEIRO" : "FALSO")
console.log(-0 ? "VERDADEIRO" : "FALSO")
console.log("" ? "VERDADEIRO" : "FALSO")
console.log(null ? "VERDADEIRO" : "FALSO")
console.log(undefined ? "VERDADEIRO" : "FALSO")
console.log(NaN ? "VERDADEIRO" : "FALSO")

console.log ( "EXEMPLO DE THRUTY")
console.log(true ? "VERDADEIRO" : "FALSO")
console.log({} ? "VERDADEIRO" : "FALSO")
console.log([] ? "VERDADEIRO" : "FALSO")
console.log(1 ? "VERDADEIRO" : "FALSO")
console.log(3.23? "VERDADEIRO" : "FALSO")
console.log("Renan" ? "VERDADEIRO" : "FALSO")
console.log(" " ? "VERDADEIRO" : "FALSO")
console.log(-1 ? "VERDADEIRO" : "FALSO")
console.log(Infinity ? "VERDADEIRO" : "FALSO")

// IF (SE)

let hour = 11
/* if: comando (definir uma condição){
instruções que quer executar se as condições foram atendidas 
}*/
if (hour <= 12){
console.log("Bom dia")
}  // só vai executar se a condição dentro do parênteses for verdadeira

if (hour <= 12){
console.log("Bom dia")
console.log("Seja Bem-vindo")
} 

if (age < 18){
    console.log("Você não pode dirigir")
} else {
    console.log("Você pode dirigir")
}

// IF ELSE IF: exclui as outras opções

let hora = 13

if (hora <= 12){
    console.log("Bom dia")
}
else if (hora > 18){
    console.log ("Boa noite")
}
else if (hora > 12){
    console.log("Boa tarde")
}

// SWITCH: usada para analisar caso a caso.
let options = 1

switch (options){
    case 1:
        console.log("Consultar pedido")
        break
    case 2:
        console.log("Falar com atendente")
        break
    case 3:
        console.log("Cancelar pedido")
        break
    default: //  Quando for selecionada uma opção que não esteja dentro dos parâmetros.
        console.log("Opção Inválida")
}

//Tratamento de exceções: evento que interrompe o fluxo normal das operações.
/*
try {
    //TENTA executar algo
    console.log(result)
}   catch(error) {
    // Captura o erro para tratar

    //console.log("Não foi possível executar o seu pedido. Tente novamente.")

    console.log(error)
}   finally {
        console.log("Fim")
    }

*/

let result = 0

try {
    if (result === 0) {
throw new Error ("O valor é igual a zero.")
    }
} catch (error) {
    console.log(error)
} finally {
    console.log("Fim")
}