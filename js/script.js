/* CONSEGNA:
PROGRAMMA 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/


//Prendo il link con classe bottone
const button = document.querySelector("a.btn");

let count1 = 0;
let count2 = 0;
let count3 = 0;

//Prova che il link con classe bottone è stato selezionato correttamente
//button.innerHTML = "ciao";

//In realtà qui cè solo il confronto, i dadi sono gia stati lanciati
button.addEventListener("click", function () {
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
    let giocatore1 = ["Alessio", dado];
    let giocatore2 = ["Axel", dado2];

    //Stampo in index html il valore di player1
    const playerInput1 = document.getElementById("player1");
    const player1 = giocatore1[0];
    playerInput1.innerHTML = player1;

    //stampo in index html il valore di player2
    const playerInput2 = document.getElementById("player2");
    const player2 = giocatore2[0];
    playerInput2.innerHTML = player2;

    //Prendo il paragrafo in cui poi stampo il risultato
    const result = document.getElementById("resultGameDice");


    //confronto (prendo il valore del dado "giocatore1[1]" e lo confronto con il valore del dado del giocatore2[1])
    if (giocatore1[1] > giocatore2[1]) {
        console.log(giocatore1[0] + " HA VINTO");
        result.innerHTML = giocatore1[0] + " HA VINTO";
        count1++;
        console.log(count1);
    } else if (giocatore1[1] == giocatore2[1]) {
        console.log(giocatore1[0] + " e " + giocatore2[0] + " hanno pareggiato");
        result.innerHTML = giocatore1[0] + " e " + giocatore2[0] + " hanno pareggiato";
        count3++;
    } else {
        console.log(giocatore2[0] + " HA VINTO");
        result.innerHTML = giocatore2[0] + " HA VINTO";
        count2++;
    }

    const diceResult = document.getElementById("dice_result");
    diceResult.innerHTML = giocatore1[0] + " Lancia il dado: " + giocatore1[1] + "</br>"
        + giocatore2[0] + " Lancia il dado: " + giocatore2[1];

    console.log(count1);
    const finalResult = document.getElementById("final_result");
    finalResult.innerHTML = giocatore1[0] + " Ha totalizzato: " + count1 + " Vittorie"
        + "</br>" + giocatore2[0] + " Ha totalizzato: " + count2 + " Vittorie" 
        + "</br>" + "Pareggi Totali: " + count3;

    //Stampo in console i risultati    
    console.log(giocatore1);
    console.log(giocatore2);
});



