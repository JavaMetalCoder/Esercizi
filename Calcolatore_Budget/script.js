// Selezioniamo il form
const form = document.getElementById("calcolatore-budget");

// Aggiungiamo un listener per l'evento submit
form.addEventListener("submit", function(event) {
    // Blocca il comportamento predefinito (ricaricamento della pagina)
    event.preventDefault();

    // Inserisci il codice per il calcolo del budget qui
    const budgetInput = document.getElementById("budget");
    const speseInput = document.getElementById("spese");
    const saldoOutput = document.getElementById("saldo");

    // Converti i valori in numeri
    const entrate = parseFloat(budgetInput.value) || 0;
    const uscite = parseFloat(speseInput.value) || 0;

    // Mostra un avviso se le spese sono maggiori delle entrate
    if (uscite > entrate) {
        alert("Attenzione! Le spese sono maggiori delle entrate.");
    }

    // Calcola e mostra il saldo
    const saldo = entrate - uscite;
    saldoOutput.textContent = saldo.toFixed(2); // Mostra il saldo con 2 decimali
});
