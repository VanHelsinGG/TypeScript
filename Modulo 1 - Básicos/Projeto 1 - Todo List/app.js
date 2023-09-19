"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var tarefas = [];
$(function () {
    var btnCriarTarefa = $("#criar-tarefa");
    var textArea = $("#text-area");
    var btnExcluir = $(".btn-excluir");
    var btnConcluir = $(".btn-concluir");
    btnCriarTarefa.on("click", function () {
        var _a;
        var texto = (_a = textArea.val()) === null || _a === void 0 ? void 0 : _a.toString();
        var objeto = { descricao: texto, status: "Pendente" };
        tarefas.push(objeto);
    });
    btnConcluir.each(function () {
        $(this).on("click", function () {
            var _a;
            var tarefa = (_a = $(this).closest(".tarefa").val()) === null || _a === void 0 ? void 0 : _a.toString();
            var index = acharIndex(tarefa);
            switch (tarefas[index].status) {
                case "Concluido": tarefas[index].status = "Pendente";
                case "Pendente": tarefas[index].status = "Concluido";
            }
        });
    });
    btnExcluir.each(function () {
        $(this).on("click", function () {
            var _a;
            var tarefa = (_a = $(this).closest(".tarefa").val()) === null || _a === void 0 ? void 0 : _a.toString();
            var index = acharIndex(tarefa);
            tarefas.splice(index, 1);
        });
    });
    function acharIndex(nome) {
        var match = -1;
        tarefas.forEach(function (tarefa, index) {
            if (tarefa.descricao === nome) {
                match = index;
            }
        });
        return match;
    }
});
