
type estado = "Disponivel" | "Indisponivel";
var db: Livros[] = [];

interface Livros{
    nome: string,
    editora: string,
    autor: string,
    status: estado
}

class Biblioteca implements Livros{
    nome: string;
    editora: string;
    autor: string;
    status: estado;

    public cadastrarLivro(nome:string, editora: string, autor: string): void{
        if(nome.trim() === "" || editora.trim() === "" || autor.trim() === ""){
            console.log("[Cadastro] Os valores não podem estar vazios");
        }else{
            let cadastro: Livros = {nome:nome, editora:editora, autor:autor, status: "Disponivel"};
            
            db.push(cadastro);
            
            console.log(`[Cadastro] Livro ${nome} cadastrado com sucesso!`);
        }
    }

    public pegarLista(): void{
        db.forEach((livro,index)=> {
            console.log(`[LIVRO ${index}]\nNome: ${livro.nome}\nAutor: ${livro.autor}\nEditora: ${livro.editora}\nStatus: ${livro.status}\n\n`);
        });
    }

    public alugarLivro(nome: string): void{
        let index = this.acharCorrespondente(nome);

        if(index === -1){
            console.log("[Aluguel] Livro não encontrado!");
        }

        db[index].status = "Indisponivel";
        console.log("[Aluguel] Livro alugado com sucesso!");
    }

    public excluirLivro(nome: string): void{
        let index = this.acharCorrespondente(nome);

        if(index === -1){
            console.log("[Excluir] Livro não encontrado!");
        }

        db.splice(index,1);

        console.log("[Excluir] Livro excluido com sucesso!");
    }

    private acharCorrespondente(nome: string): number{
        let correspondente: number = -1;
        db.forEach((livro,index) => {
            if(livro.nome.trim().toLowerCase() === nome.trim().toLowerCase()){
                correspondente = index;
            }
        });

        return correspondente;
    }
}

var sistema = new Biblioteca();

sistema.cadastrarLivro("Don Quixote", "Arqueiro", "Miguel de Cervantes");

sistema.alugarLivro("Don Quixote");
sistema.pegarLista();

sistema.excluirLivro("don quixote");
sistema.pegarLista();