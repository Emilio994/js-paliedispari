/* Palindroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

function palindroma(word) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == word[word.length -1 - i]) {
            // anna
            return "è una parola palindroma";
        }
        else {
            return "non è una parola palindroma";
        }
    }
}
function capitalization(word) {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
}

var userWord = prompt("Inserisci una parola").toLowerCase();
if (isNaN(userWord)) {
    palindroma(userWord);
    document.getElementById("parola").innerHTML= capitalization(userWord) + " " + palindroma(userWord);
}
else {
    alert("Utilizzare solo lettere")
}







