const array_citazioni = [
    'Sii il cambiamento che vuoi vedere nel mondo.',
    'La semplicità è la suprema sofisticazione.',
    'Non sognare la vita, vivi il tuo sogno.',
    "Il successo è andare da un fallimento all'altro senza perdere entusiasmo.",
    'La vita è quello che accade mentre sei impegnato a fare altri piani.',
    'Chi non osa nulla, non ottiene nulla.',
    'La conoscenza è potere.',
    'Tutto ciò che puoi immaginare è reale.',
    'Non smettere mai di essere curioso.',
    "L’unico limite è quello che poni a te stesso."
];
const button = document.getElementById('btn-cit');
const citazione = document.getElementById('value-cit');


button.onclick = function() {
        let random = Math.floor(Math.random() * array_citazioni.length);
        citazione.innerHTML = array_citazioni[random];
    }

