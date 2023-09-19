import * as readline from 'readline';
import { Moeda, transformarMoeda, getMoedaNome, obterCambio } from './moedas';

let base: Moeda | null = null;
let target: Moeda | null = null;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function obterMoedas() {
    while (base === null) {
        const baseInput = await perguntaAsync("Moeda base: ");
        base = transformarMoeda(baseInput);

        if (base === null) {
            console.log("Moeda base inválida. Tente novamente.");
        }
    }

    while (target === null) {
        const targetInput = await perguntaAsync("Moeda alvo: ");
        target = transformarMoeda(targetInput);

        if (target === null) {
            console.log("Moeda alvo inválida. Tente novamente.");
        }
    }

    console.log("Moeda base: " + getMoedaNome(base));
    console.log("Moeda alvo: " + getMoedaNome(target));

    await obterCambio(base, target);

    rl.close();
}

function perguntaAsync(pergunta: string): Promise<string> {
    return new Promise<string>((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(resposta.trim().toUpperCase());
        });
    });
}

obterMoedas();
