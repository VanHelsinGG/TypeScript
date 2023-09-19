import * as $ from 'jquery';

type Status = "Pendente" | "Concluido";
type Descricao = string | undefined;

interface Tarefa {
    descricao: Descricao;
    status?: Status;
}

var tarefas: Tarefa[] = []

$(function () {
    const btnCriarTarefa = $("#criar-tarefa");
    const textArea = $("#text-area");
    const listaTarefas = $("#lista-tarefas");

    btnCriarTarefa.on("click", function () {
        let texto = textArea.val()?.toString();

        let objeto: Tarefa = { descricao: texto, status: "Pendente" };
        tarefas.push(objeto);
        renderizarTarefas();
    });

    function renderizarTarefas() {
        listaTarefas.empty();
        tarefas.forEach((tarefa, index) => {
            const li = $("<li>").addClass("tarefa");
            const descricao = tarefa.descricao;
            const status = tarefa.status || "Pendente";

            const btnConcluir = $("<button>").text("Concluir").on("click", function () {
                alternarStatusTarefa(index);
            });

            const btnExcluir = $("<button>").text("Excluir").on("click", function () {
                excluirTarefa(index);
            });

            li.text(`Tarefa: ${descricao}, Status: ${status}`);
            li.append(btnConcluir, btnExcluir);
            listaTarefas.append(li);
        });
    }

    function alternarStatusTarefa(index: number) {
        if (tarefas[index].status === "Pendente") {
            tarefas[index].status = "Concluido";
        } else {
            tarefas[index].status = "Pendente";
        }
        renderizarTarefas();
    }

    function excluirTarefa(index: number) {
        tarefas.splice(index, 1);
        renderizarTarefas();
    }
});