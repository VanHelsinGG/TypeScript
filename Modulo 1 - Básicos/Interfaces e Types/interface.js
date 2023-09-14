// 13/09/23
var PessoaFisica = /** @class */ (function () {
    function PessoaFisica(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    PessoaFisica.prototype.getValues = function () {
        console.log("Nome: ".concat(this.nome, "\nIdade: ").concat(this.idade, "\nCPF: ").concat(this.cpf));
    };
    return PessoaFisica;
}());
var PessoaJuridica = /** @class */ (function () {
    function PessoaJuridica(nome, idade, cnpj) {
        this.nome = nome;
        this.idade = idade;
        this.cnpj = cnpj;
    }
    PessoaJuridica.prototype.getValues = function () {
        console.log("Nome: ".concat(this.nome, "\nIdade: ").concat(this.idade, "\nCPF: ").concat(this.cnpj));
    };
    return PessoaJuridica;
}());
var fisica = new PessoaFisica("Victor", 17, "543.123.123-43");
var juridica = new PessoaJuridica("Victor", 17, "543.123.123-43");
