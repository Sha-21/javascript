/**
 * Écrivez un programme pour saisir deux nombres de l'utilisateur et calculer leur somme. L'utilisateur doit donc entrer deux valeurs, puis le programme calcule leur somme.
 */

let read = require("readline-sync");
let number1 = read.questionInt("Veuillez introduire un premier nombre ");
let number2 = read.questionInt("Veuillez introduire un deuxieme nombre");
console.log(number1+number2); 