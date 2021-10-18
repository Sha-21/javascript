/**
 * Écrivez un programme qui demande à l'utilisateur de saisir un nombre "N".
 * Calculer la somme de tous les nombres entre 1 et N
 */

let read = require("readline-sync");

let nNombre = read.questionInt("Veuillez introduire un nombre entier positif : ");
let sum = 0;
for(let i=1; i<=nNombre;i++)
{
    sum+=i;
}
console.log("La sommes des " + nNombre + " premiers nombres est egale à : " + sum)