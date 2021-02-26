/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

// Funzione randomizer
function randomizer(v) {
    return v = parseInt((Math.random()*5+ 1).toFixed(0));
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
var userChoice = prompt("pari o dispari?").toLowerCase();
// Verifica che l'utente abbia inserito le informazioni opportune
if (userChoice == ("pari").toLowerCase() || userChoice == ("dispari").toLowerCase()) {
    document.getElementById("scelta_utente").innerHTML = "L'utente ha scelto " + userChoice ;
    // L'utente inserisce un numero da 1 a 5
    var userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
    if (userNumber > 0 && userNumber < 6) {
        var randomized = randomizer();
        document.getElementById("scelta_pc").innerHTML = "L'utente ha digitato " + userNumber + " ,il computer ha estratto " + randomized + ". Il risultato è " + ((userNumber) + (randomized));
        if (userChoice == sum(userNumber, randomized) ) {
            document.getElementById("somma").innerHTML = "L'utente ha vinto";
        }
        else {
            document.getElementById("somma").innerHTML = "L'utente ha perso";
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





