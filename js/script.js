/*
Calcolo del prezzo del biglietto del treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// Input utente
const kmPercorrenza = prompt('Quanti chilometri vuoi percorrere?');
const etaPasseggero = prompt('Qual è la tua età?');

// Calcolo prezzo standard
let prezzoBiglietto = 0.21 * kmPercorrenza;

// Applicazione dello sconto
if (etaPasseggero < 18) {
    // sconto 20%
    prezzoBiglietto *= 0.8;
} else if (etaPasseggero >= 65) {
    // sconto 40%
    prezzoBiglietto *= 0.6;
}

// Output
document.getElementById('ticket-price').innerHTML = (Math.round(prezzoBiglietto * 100) / 100).toFixed(2);