/* CONSEGNA:
PROGRAMMA 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/


//Prendo il link con classe bottone
const button = document.querySelector("a.btn");

let winPlayer1 = 0;
let winPlayer2 = 0;
let balance = 0;

//Prova che il link con classe bottone è stato selezionato correttamente
//button.innerHTML = "ciao";

//In realtà qui cè solo il confronto, i dadi sono gia stati lanciati
button.addEventListener("click", function () {
    //Inserisco il valore nelle varibiali dado e dado2
    let dado = Math.floor((Math.random() * 6) + 1);
    let dado2 = Math.floor((Math.random() * 6) + 1);


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
        winPlayer1++;
        console.log(winPlayer1);
    } else if (giocatore1[1] == giocatore2[1]) {
        console.log(giocatore1[0] + " e " + giocatore2[0] + " hanno pareggiato");
        result.innerHTML = giocatore1[0] + " e " + giocatore2[0] + " hanno pareggiato";
        balance++;
    } else {
        console.log(giocatore2[0] + " HA VINTO");
        result.innerHTML = giocatore2[0] + " HA VINTO";
        winPlayer2++;
    }

    const diceResult = document.getElementById("dice_result");
    diceResult.innerHTML = giocatore1[0] + " Lancia il dado: " + giocatore1[1] + "</br>"
        + giocatore2[0] + " Lancia il dado: " + giocatore2[1];

    console.log(winPlayer1);
    const finalResult = document.getElementById("final_result");
    finalResult.innerHTML = giocatore1[0] + " Ha totalizzato: " + winPlayer1 + " Vittorie"
        + "</br>" + giocatore2[0] + " Ha totalizzato: " + winPlayer2 + " Vittorie"
        + "</br>" + "Pareggi Totali: " + balance;

    //Stampo in console i risultati    
    console.log(giocatore1);
    console.log(giocatore2);
});



