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
function foo() {
    return "bar";
}
var fooo = foo();
console.log("foo: ".concat(fooo));
// Função Anônima
var soma = function (a, b) {
    return a + b;
};
var resultado = soma(2, 2);
console.log("soma: ".concat(resultado));
// Arrow function
var mult = function (a, b) { return a + b; };
var resultado = mult(2, 5);
console.log("mult: ".concat(resultado));
// Expressão de Função com Tipo de Função
var div = function (a, b) {
    return a / b;
};
var resultado = div(50, 3);
console.log("div: ".concat(div));
// Expressão de Função com Tipo de Função usando Arrow Function
var ping = function () { return "pong"; };
console.log(ping());
var concatenar = function (a, b) {
    return a + b;
};
console.log(concatenar("Type", "Script"));
console.log("\n-------------------------------------\n");
// Tipagem ANY
function Generic(arg) {
    return arg;
}
console.log(Generic(1));
