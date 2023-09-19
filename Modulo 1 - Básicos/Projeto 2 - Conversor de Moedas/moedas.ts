import axios from 'axios';

export type Moeda = "USD" | "BRL" | "EUR" | "GBP" | "JPY" | "CNY";

export function transformarMoeda(input: string): Moeda | null{
    const nome = input.trim().toUpperCase();

    if(nome === "USD" || nome === "BRL" || nome === "EUR" || nome === "GBP" || nome === "JPY" || nome === "CNY"){
        return nome as Moeda;
    }else{
        return null;
    }
}

export function getMoedaNome(moeda: Moeda): string {
    switch (moeda) {
        case "USD":
            return "Dolar";
        case "BRL":
            return "Real";
        case "EUR":
            return "Euro";
        case "GBP":
            return "Libra";
        case "JPY":
            return "Iene";
        case "CNY":
            return "Yuan";
        default:
            return "Moeda desconhecida";
    }
}

export async function obterCambio(moedaBase: Moeda, moedaAlvo: Moeda) {
    try {
        const response = await axios.get(`https://api.apilayer.com/exchangerates_data/latest?base=${moedaBase}`);

        const taxasDeCambio = response.data.rates[moedaAlvo];
        
        if(taxasDeCambio){
            console.log(`1 ${moedaBase} = ${taxasDeCambio} ${moedaAlvo}`)
        }else{
            console.log(`Taxa de câmbio de ${moedaBase} para ${moedaAlvo} não encontrada!`);
        }
    } catch (error) {
        console.log(`Não foi possível obter a taxa de câmbio: ${error.message}`)
    }
    
}