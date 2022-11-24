/* CONSEGNA:
PROGRAMMA 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.


PROGRAMMA 2 - Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/


//variabili giocatore1, giocatore2
//variabile dado, Generare numero da 1 a 6,
//confronto tra dado del giocatore 1 e dado del giocatore 2

//Inserisco il valore nelle varibiali dado e dado2
let dado = Math.round(Math.random() * 6);
let dado2 = Math.round(Math.random() * 6);

//Se dado ha valore 0, allora aggiungo 1 a dado, cosi che il conteggio vada da 1 a 6
if (dado == 0) {
    dado++;
    console.log("dado1 = " + dado);
} else {
    console.log("dado1 = " + dado);
}

if (dado2 == 0) {
    dado2++;
    console.log("dado2 = " + dado2);
} else {
    console.log("dado2 = " + dado2);
}

//Dichiaro le variabili giocatore1 e giocatore2
let giocatore1 = ["Alessio" , dado];
let giocatore2 = ["Axel", dado2];

//confronto (prendo il valore del dado "giocatore1[1]" e lo confronto con il valore del dado del giocatore2[1])
if (giocatore1[1] > giocatore2[1]) {
    console.log(giocatore1[0] + " HA VINTO");
} else if (giocatore1[1] == giocatore2[1]) {
    console.log(giocatore1[0] + " e " + giocatore2[0] + " hanno pareggiato");
} else {
    console.log(giocatore2[0] + " HA VINTO");
}


console.log(giocatore1);
console.log(giocatore2);
