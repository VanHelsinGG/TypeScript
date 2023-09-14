// 13/09/23

/* ---- TIPOS BÁSICOS DE DADOS ---- */

/** Number: Representa números flutuantes ou inteiros */ 
let idade: number = 30;
let preco: number = 19.50;

/** String: Representa uma sequência de caracteres */
let nome: string = "Victor";

/** Boolean: Define valores como verdadeiro ou falso*/
let ativo: boolean = true;

/** Array: Vetor/Matriz sem número fixo de elementos */
let numeros: number[] = [1,2,3,4];
let numeros2: Array<number> = [1,2,3,4];

/** Tuple: Array com número fixo de elementos */
let pessoa: [string, number] = ["Victor", 17];

/** Enum: Conjunto de valores nomeados */
enum DiasDaSemana{
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo
}

/** Any: Pode representar qualquer tipo de dado */
let valor: any = 42;

/** Void: Indica funções sem retorno */
function mostrarMensagem(): void{
    return console.log("Olá, mundo!");
}

/** Null e Undefined: Representam ausência de valor */
let nulo: null = null;
let indefinido: undefined = undefined;