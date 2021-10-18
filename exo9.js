/**
 * Adaptez l'exercice 8 pour faire descendre l'escalier dans l'autre sens afin de former une pyramide
 */

 let read = require("readline-sync");

 let nombre = read.questionInt("Veuillez introduire un nombre entier positif: ");
 let string = '*';
 for(let i=0; i<nombre; i++)
 {
     console.log(string);
     string += '*';
 }
 for(let i=string.length; i>0; i--)
 {
     string = string.slice(0,i);
     console.log(string);
 }