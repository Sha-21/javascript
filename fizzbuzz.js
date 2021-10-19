/**
 * Demandez à l'utilisateur de saisir un nombre "N" .
 * Afficher tous les nombres allant de 1 à "N", avec les particularités suivantes : 
 * Remplacez tous les multiples de 3 par "FIZZ"
 * Remplacez tous les multiples de 5 par "BUZZ"
 * Remplacez tous les multiples de 3 ET 5 par "FIZZBUZZ"
 */

let read = require("readline-sync");
let nb = read.questionInt("Veuillez introduire un nombre entier positif: ");

for(let i=1;i<=nb;i++)
{
    if(i%3==0&&i%5==0)
    console.log("FizzBuzz");
    else if(i%3==0)
    console.log("Fizz");
    else if(i%5==0)
    console.log("Buzz");
    else
    console.log(i);
}
