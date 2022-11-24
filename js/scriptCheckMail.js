/*
PROGRAMMA 2 - Mail
    - CHIEDERE all'utente la sua mail;
    - CONTROLLARE se la mail è nella lista delle mail presenti
    - STAMPARE un messaggio per l'esito
*/

//Lista di email nel presunto DB
const listEmail = [
    "alessio.napoletano@cosaguardi.com",
    "alessio.napoli@ancoracheguardi.net",
    "alessio.napoli@vabbuòUFratedavveroFai.org" , 
    "alessio.napoli@ammaFaETarantelle.org"
];

console.log("lista delle mail disponibili: " + listEmail);


const button = document.querySelector("a.btn");
//test for button
//button.innerHTML = "fozza napoli";

//Prendo la mail dal campo input
const inputEmail = document.getElementById("userEmail");

button.addEventListener("click", function () {
    //variabile con valore 0 o 1 se la varibile vale ' la mail non è stata trovata se vale 1 si
    let count = 0;
    //prendo il valore del campo input
    const mail = inputEmail.value;
    console.log(mail);

    for (let i = 0; i < listEmail.length; i++) {

        if (mail === listEmail[i]) {
            count++;
        } else{
            
        }

        if (count != 0) {
            document.getElementById("output").innerHTML = "Mail trovata!";
        } else {
            document.getElementById("output").innerHTML = "Mail non trovata!";
        }
    }

});



