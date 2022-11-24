/*
PROGRAMMA 2 - Mail
    - CHIEDERE all'utente la sua mail;
    - CONTROLLARE se la mail è nella lista delle mail presenti
    - STAMPARE un messaggio per l'esito
*/

//Lista di email nel presunto DB
const listEmail = ["alessio.napoletano@cosaguardi.com", "alessio.napoli@ancoracheguardi.net"];


const button = document.querySelector("a.btn");
//test for button
//button.innerHTML = "fozza napoli";

//Prendo la mail dal campo input
const inputEmail = document.getElementById("userEmail");

button.addEventListener("click", function () {

    //prendo il valore del campo input
    const mail = inputEmail.value;
    console.log(mail);

    for (let i = 0; i<listEmail.length; i++){
        
        if(mail === listEmail[i]){
            document.getElementById("output").innerHTML = "Valida!";
        }else{
            document.getElementById("output").innerHTML = "Mail non trovata!";
        }
    }

    /*
        if (mail == mailDemo) {
            document.getElementById("output").innerHTML = "Valida!";
        } else {
            document.getElementById("output").innerHTML = "Mail non trovata!";
        }
    */

});



