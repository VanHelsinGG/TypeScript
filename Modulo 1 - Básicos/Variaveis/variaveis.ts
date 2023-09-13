// 12/09/2023

/** METODOS DE DECLARAÇÃO
 * - let: escopo local
 * - var: escopo global // Não recomendado
 * - const: escopo local imutável
 */

/** TIPAGEM DE VARIAVEIS
 * - number: números flutuantes
 * - string: textos
 * - bool: boleanos
 * - any: tipagem automática
 * - array
 */

/** DECLARAÇÃO 
 * (metodo) (nome da variavel) : (tipagem);
 * exemplos:
 * let nome:string = "victor";
 * var idade:number = 10;
 * const saudacao = "olá mundo" // Nesse caso, a tipagem any está implícita
*/

var PROJETO: string = "TypeScript";
var DEV: string = "Victor";
var array: number[] = [];
var array2: Array<number> = []

var numeroAleatorio: number;

numeroAleatorio = Math.floor(Math.random() * 100);

console.log(
    "Projeto: " + PROJETO + "\n",
    "DEV: " + DEV + "\n",
    "Numero Aleatório: " + numeroAleatorio + "\n",
);

console.log("\n-------------------------------------------------------\n");
// Exemplo do escopo global de var

var nome: string = "Victor" 
var numero: number = 10;

if(numero === numero){
    let nome: string = "Marcos";
    var numero: number = 20;
}

console.log(
    "Nome: " + nome + "\n",
    "Numero: " + numero + "\n"
);
