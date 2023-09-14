var db = [];
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
    }
    Biblioteca.prototype.cadastrarLivro = function (nome, editora, autor) {
        if (nome.trim() === "" || editora.trim() === "" || autor.trim() === "") {
            console.log("[Cadastro] Os valores não podem estar vazios");
        }
        else {
            var cadastro = { nome: nome, editora: editora, autor: autor, status: "Disponivel" };
            db.push(cadastro);
            console.log("[Cadastro] Livro ".concat(nome, " cadastrado com sucesso!"));
        }
    };
    Biblioteca.prototype.pegarLista = function () {
        db.forEach(function (livro, index) {
            console.log("[LIVRO ".concat(index, "]\nNome: ").concat(livro.nome, "\nAutor: ").concat(livro.autor, "\nEditora: ").concat(livro.editora, "\nStatus: ").concat(livro.status, "\n\n"));
        });
    };
    Biblioteca.prototype.alugarLivro = function (nome) {
        var index = this.acharCorrespondente(nome);
        if (index === -1) {
            console.log("[Aluguel] Livro não encontrado!");
        }
        db[index].status = "Indisponivel";
        console.log("[Aluguel] Livro alugado com sucesso!");
    };
    Biblioteca.prototype.excluirLivro = function (nome) {
        var index = this.acharCorrespondente(nome);
        if (index === -1) {
            console.log("[Excluir] Livro não encontrado!");
        }
        db.splice(index, 1);
        console.log("[Excluir] Livro excluido com sucesso!");
    };
    Biblioteca.prototype.acharCorrespondente = function (nome) {
        var correspondente = -1;
        db.forEach(function (livro, index) {
            if (livro.nome.trim().toLowerCase() === nome.trim().toLowerCase()) {
                correspondente = index;
            }
        });
        return correspondente;
    };
    return Biblioteca;
}());
var sistema = new Biblioteca();
sistema.cadastrarLivro("Don Quixote", "Arqueiro", "Miguel de Cervantes");
sistema.alugarLivro("Don Quixote");
sistema.pegarLista();
sistema.excluirLivro("don quix o te");
sistema.pegarLista();
