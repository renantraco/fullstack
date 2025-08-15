console.log("Hello World!")
console.log("Essa mensagem é do JS conectado com o HTML")

/* 
Comentar com 
quebra de linha
*/


// let: não deixa criar uma nova variável como o mesmo nome. Mas permite alterar o valor atribuído.
// const: o valor não pode ser alterado
// escopo: parte do código onde trata uma determinada variável (global, bloco e variável)
// hoisting: usar uma variável função antes dela ser definida.

var user = "Renan"
console.log(user)

/* strings

Alternar aspas duplas e simples quando quiser usar.
Usar acento grave (`) quando quiser formatar uma string com quebra de página */

let username = "Renan"
let email = "renan.traco@gmail.com"
// Template literals
console.log(`Olá, ${username}. Você conectou com o e-mail ${email}.`)

// Number
console.log(5) //inteiro positivo
console.log(-5) // inteiro negativo
console.log(5.2) // reais ou float

// Booleano
console.log(true)
console.log(false)

let isloading = true

//undefined: variável não definida. Null: variável não definida propositalmente.

// type casting: quando mudamos o tipo de forma intencional
console.log(typeof "9")
console.log(typeof Number("9"))

let age = 18
console.log(age.toString())
console.log(typeof age.toString())
console.log(typeof String (age))

let option = 1 // option = 0 é False
console.log(Boolean(option))
console.log(typeof Boolean(option))

// Coerção de tipos

console.log ("10 " +5)
console.log (typeof ("10" +5))

// Operadores aritiméticos
console.log("soma: ", 12 + 8)
console.log("concatenação: ", "12 " + "8" )
console.log ("Subtração: ", 12 - 10)
console.log("multiplicação: ", 3 * 5.5)
console.log("divisão: ", 12 / 2) 
console.log("resto da divisão ", 13 % 2) // resto da divisão. Usado pra descobri se o número é impar ou par.

console.log("exponencial: ", 3 ** 3)

let number = 10

console.log(number = number + 1)
// incremento
console.log(number ++)
console.log(++number)

// decremento
console.log(number --)

// adicionar grandes valores mais de 1
console.log(number += 10)

// Ordem de precedência: define qual operação vai ser feito primeiro.

let total = 2 + 3 * 4
console.log(total) 

let total2 = (2 + 3) * 4
let average = (9.5 + 7 + 5) / 3
console.log(average)

let one = 1
let two = 2

// == igual a 
console.log(one == two)
console.log(one==1)
console.log(one == "1")

// !=
console.log(one!=two)
console.log(one!=1)


// estritamente igual a (tipo e valor)

let a = 1
let b = 2

console.log(a === 1)
console.log(a === "1")

// estritamente diferente de !==

console.log(b !== 1)
console.log(b !== "2")

/* maior que >
maior ou igual >=
menor que <
menor ou igual a <=
*/
// Operador de atribuição: =

let value

valeu = 1
console.log(valeu)

//incremento
value += 2
console.log(value)

//decremento
valeu -= 1
console.log(value)

// multiplicação
valeu *= 3
console.log(valeu)

//divisão
valeu /=2
console.log(value)

// resto da divisão 
valeu %=2
console.log(value)

// potência
value **= 2
console.log(value)

let login = true
let password = false
let isAdmin = true

// and (E) &&

console.log(login && password && isAdmin)

// or (ou) ||
console.log(login || password)

// not (negação !
console.log(!password)
