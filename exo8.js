/**
 * Écrivez un programme qui demande à un utilisateur un nombre puis qui génère un escalier d'étoiles.
 */

let read = require("readline-sync");

let nombre = read.questionInt("Veuillez introduire un nombre entier positif: ");
let string = '*';
for(let i=0; i<nombre; i++)
{
    console.log(string);
    string += '*';
}