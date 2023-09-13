/** FUNÇÕES
 * Seguem o mesmo padrão JS, mas com a tipagem de dados
 */

/** FUNÇÕES DE TIPAGEM ANY
 * Defini-se uma "tipagem personalizada" utilizando o paradigma <>
 * Utilizado quando a tipagem dos argumentos é igual a tipagem do retorno, mas não sabe-se seu tipo
 * ex:
 * - function foo<t>(a: t) : t {}
*/

/** FUNÇÕES DE CLASSE 1
 * Quando se utiliza uma função como argumento
 * ex:
 * - console.log(function mensagem(): string{});
*/

// ---- DECLARAÇÃO ---- //

// Declaração clássica
function foo(): string{
    return "bar";
}

var fooo: string = foo();
console.log(`foo: ${fooo}`);

// Função Anônima
var soma = function(a: number, b: number) : number{
    return a + b;
}

var resultado: number = soma(2,2);
console.log(`soma: ${resultado}`);


// Arrow function
var mult = (a: number, b: number): number => a + b;

var resultado: number = mult(2,5);
console.log(`mult: ${resultado}`);


// Expressão de Função com Tipo de Função
var div: (a: number, b: number) => number = function(a, b) {
    return a / b;
}

var resultado: number = div(50,3);
console.log(`div: ${div}`);


// Expressão de Função com Tipo de Função usando Arrow Function

var ping: () => string = () => "pong";
console.log(ping());


// Função com Tipo de Função usando Interface

interface Strings{
    (a: string, b: string) : string;
}

var concatenar: Strings = function(a,b){
    return a+b;
}

console.log(concatenar("Type","Script"));


console.log("\n-------------------------------------\n")

// Tipagem ANY
function Generic<t>(arg: t): t{
    return arg;
}
console.log(Generic(1))