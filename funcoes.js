function message (){
    console.log("Olá, que bom ter você aqui")
}

message() // a funcao precisa ser chamada
message()

/* Parâmetros é a variável (escopo da função) irá receber e essa variável que é passada para a função, ela só existe na função, ela tem o escopo da função */

function mensagem(username){ //username é o parâmetro
    console.log("Olá", username)
}
// Passando os argumentos
mensagem("Renan") //Renan é o argumento ou valor para a função dentro do parâmetro username que está sendo utilizado dentro da função.

function sum(a, b){
    console.log(a + b)
}

sum(10, 20)
sum(7, 3)

// a ordem da inserção dos parâmetros importam

function joinText (text1, text2, text3){
    console.log(text1, text2, text3)
}

joinText ("Renan", "Barbosa", "Traco")
joinText("Traco", "Barbosa", "Renan")

joinText("Renan") //aparece como valores não definidos

/*alteração da função para definir um valor padrão.
function joinText (text1, text2 = "", text3 = ""){
    console.log(text1, text2, text3)
}
*/

/* Retornando valores
function soma(a, b){
    let result = a + b
    console.log(result)
}

soma(7, 7)*/

//Mas às vezes vamos querer retornar valores para usar fora da função. Para isso, vamos usar o return

function soma(a, b){
    let result = a + b

    return result
}

// Desse jeito, eu não quero mostrar o resultado dentro da função. Agora eu estou retornando o resultado pra quem chamou a função, podendo usar esse valor fora da função.

let response = soma(7, 7)
console.log(response)

// Quando usamos o return, ele devolve o resultado pra quem chamou a função (ln 58) com os valores (7, 7). Então é possível recuperar o valor atribuindo a uma nova variável, no caso é "response". Ou também é possível

console.log(soma(5, 6))

//mudar os valores da função.

// função com hoisting

showMessage("Olá, Renan")
//É possível declarar a função é possível utilizar ela pois a função vai ser içada.
function showMessage(mensagem){
    console.log(mensagem)
    endLine() //Chamada da função abaixo criada dentro da função
    //Criando função dentro de função
    
    function endLine(){
        console.log(".............................")
    }
}

// tentar executar a função endLine fora do escopo da função, vai resultar num erro.

//Como documentar utilizando funções


/**
 * 
 * @param {String} email "user email" , é possível alterar a classe dos parâmetros aceitáveis dentro de {}
 * @param {String} password "More than 6 characters"
 * @returns {number} */
function signIn(email, password){
    // "Fuxo de autenticação do usuário" - comentário acima faz parte da aula.
    return 7
}

signIn // agora ao passar o mouse na chamada da função tem as informações e detalhar os parâmetros e o retorno.

// Função Anônima (função que não possui nome)

const mostrarMensagem = function(){
    return "Olá, Renan"
}

console.log(mostrarMensagem) // o que mostra é que dentro tem uma função

console.log(mostrarMensagem()) // se abrir e fechar parênteses, executa a função que tá dentro da constante, que também poderia ser uma variável.

// também é possível passar parâmetros.

const mostrarMensagem2 = function(name){
    return "Olá," + name
}

console.log(mostrarMensagem2("Traco"))

/*sempre que for passar mais de um parâmetro adicionar a vírgula. 
P. ex

const mostrarMensagem2 = function(message, name){
    return message + name
}

console.log(mostrarMensagem2("Olá", "João"))
*/

//Arrow function: fnção de seta

const recado = () =>{
    console.log("Olá")
}

console.log(recado)
recado()

const recado2 = (nome, telefone) =>{ 
    console.log("Olá," ,nome, ". Confirma o seu telefone:", telefone)

    //console.log("Olá, ${nome}. Seu telefone é:, ${telefone}.") //pode também interpolar, mas esse aqui não deu certo
}

recado2("Maria", "934023788") // Ou seja, também é possível passar parâmetros para a arrow functon

// callback function: É uma função passada para outra função como argumento

function execute(taskName, callback){
    console.log("Executando a tarefa: ", taskName)

    callback()
}

function callback (){
    console.log("Tarefa finalizada.")
}
execute("Download do arquivo...", callback)

// outra maneira: criando a função dentro do próprio parâmetro

execute("Upload do arquivo...", function(){
console.log("Função de callback com uma função anônima")

}) // chamando uma função anônima

//Utilizando arrow function

execute("Excluindo arquivo...", () => {

console.log("Arquivo excluído")
})


execute("Salvando arquivo...", () => console.log("Arquivo Salvo"))


