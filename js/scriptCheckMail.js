/*
PROGRAMMA 2 - Mail
    - CHIEDERE all'utente la sua mail;
    - CONTROLLARE se la mail è nella lista delle mail presenti
    - STAMPARE un messaggio per l'esito
*/

//Lista di email nel presunto DB
const listEmail = ["alessio.napoletano@cosaguardi.com" , "alessio.napoli@ancoracheguardi.net"];

const button = document.querySelector("a.btn");
//test for button
//button.innerHTML = "fozza napoli";

const mailDemo = "ciao";

const inputEmail = document.getElementById("userEmail");
button.addEventListener("click" , function(){
    const mail = inputEmail.value;

    if(mail == mailDemo){
        document.getElementById("output").innerHTML = "Valida!";
    } else{
        document.getElementById("output").innerHTML = "Mail non trovata!";
    }

});



