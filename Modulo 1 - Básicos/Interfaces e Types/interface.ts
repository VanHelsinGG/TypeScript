// 13/09/23

/** INTERFACES */

/* Definem propriedades e seus tipos para serem utilizados comumente por varios objetos */

interface Pessoa{
    nome: string;
    idade: number;
}

class PessoaFisica implements Pessoa{
    nome: string;
    idade: number;

    cpf: string;

    constructor(nome: string, idade: number, cpf: string){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    public getValues(): void{
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nCPF: ${this.cpf}`);
    }
}

class PessoaJuridica implements Pessoa {
    nome: string;
    idade: number;

    cnpj: string;

    constructor(nome: string, idade: number, cnpj: string){
        this.nome = nome;
        this.idade = idade;
        this.cnpj = cnpj;
    }

    public getValues(): void{
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nCPF: ${this.cnpj}`);
    }
}

let fisica = new PessoaFisica("Victor",17,"543.123.123-43");
let juridica = new PessoaJuridica("Victor",17,"543.123.123-43");
//fisica.getValues();
//jurifica.getValues();


/** ---- EXTENSÃO DE INTERFACES ---- */

/** É possivel extender uma interface à outra interface */

interface Aluno{
    nome: string;
    idade: number;
    instituicao: string;
}

interface AlunoUniversitario extends Aluno{
    curso: string;
    semestre: number;
}


/** ---- PROPRIEDADES OPCIONAIS ---- */

/** Define propriedades que não são obrigatórias nos objetos (incrementada com ?) */

interface Veiculo{
    marca: string;
    modelo?: string; // modelo opcional
}


/** ---- PROPRIEDADES READ-ONLY ---- */

//** Define propriedades cujo valor não pode ser alterado após a inicialização */

interface Ponto{
    readonly x: number;
    readonly y: number;
}


/** ---- FUNÇÕES EM INTERFACES ---- */

/** Define funções comuns aos objetos */

interface Calculadora{
    somar(a: number, b: number): number;
}

