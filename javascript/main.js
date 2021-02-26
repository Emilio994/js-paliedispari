/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


// Funzione randomizer
function randomizer(v) {
    return v = (Math.random()*5+ 1).toFixed(0);
}
// Funzione pari o dispari
function sum(v1, v2) {
    if ((v1 + v2) % 2 == 0) {
        return "pari";
    }
    else {
        return "dispari";
    }
}
// Pari o dispari ?
var userChoice = prompt("pari o dispari?");
// Verifica che l'utente abbia inserito le informazioni opportune
if (userChoice == "pari" || userChoice == "dispari") {
    console.log("L'utente ha scelto " + userChoice);
    // L'utente inserisce un numero da 1 a 5
    var userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
    if (userNumber > 0 && userNumber < 6) {
        var randomized = randomizer();
        console.log("L'utente ha digitato " + userNumber + " ,il computer ha estratto " + randomized + ". Il risultato è " + (parseInt(userNumber) + parseInt(randomized)));
        if (userChoice == sum(userNumber, randomized) ) {
            console.log("L'utente ha vinto");
        }
        else {
            console.log("L'utente ha perso");
        }
    }
    else {
        alert("Inserire un numero compreso tra 1 e 5!")
        location.reload();
    }
}
else {
    alert("Digitare solo pari o dispari")
    location.reload();
}




