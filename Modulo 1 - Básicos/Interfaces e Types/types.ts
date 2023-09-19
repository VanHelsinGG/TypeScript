// 15/09/23

/** Utilizado para definir padrões a serem seguidos como valor ou retorno de variaveis e funções */

type Cor = "Vermelho" | "Verde" | "Azul"; // Define os valores como sendo válidos para a tipagem : Cor
type Coordenadas = [number,number] // Define a estrutura válida para o tipo



/** UNION TYPES (/) */

// Quando a variavel pode conter mais de um tipo de valor
// É possivel criar tipos de diferentes tipos de valores usando união de tipos
type NumeroOuString = number | string;


/** INTERSESSION TYPES (&) */

// Quando se deseja combinar varios tipos
type Ponto2D = {x:number, y:number};
type Ponto3D = {z:number};

type Ponto3DNoPlano = Ponto2D & Ponto3D;


/** TIPOS GENÉRICOS <t>*/

// Generaliza a tipagem, podendo assumir qualquer valor
// Permite especificar o tipo de atributos

type Caixa<t> = {
    valor: t;
}

const numeroCaixa: Caixa<number> = {valor:42};
const stringCaixa: Caixa<string> = {valor:"string"};


/** Tipagem de Função */

// Descreve assinaturas de funções

type FuncaoSoma = (a:number, b: number) => number;
const soma: FuncaoSoma = (a,b) => a + b;