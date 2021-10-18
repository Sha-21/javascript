/**
 * Adaptez l'exercice 9 pour que la pyramide soit dans le bon sens (^)
 */

let read = require("readline-sync");
let nombre = read.questionInt("Veuillez introduire un nombre ");
function pyramide(lignes)
{
    for (let i = 0; i < lignes; i++) 
    {
        let output = '';
        for (let j =0; j<lignes-i; j++) 
        {
            output += ' ';
        }
        for (let k = 0; k <= i; k++) output += '* ';
        {
        console.log(output);  
        }
    } 
}
pyramide(nombre);