/**
 * Écrivez un programme qui simulera une calculatrice et demande à l'utilisateur de saisir un premier opérande, un opérateur et un second opérande.
 * Ce programme exécutera des opérations arithmétiques de base (addition, soustraction, multiplication et division selon l'opérateur saisi
 */

let read = require("readline-sync");
let premierNombre = read.questionInt("Premier nombre : ");
let operande = read.question("operande : ");
let deuxiemeNombre = read.questionInt("Deuxieme nombre : ");

if(operande === "/")
{
    console.log(premierNombre/deuxiemeNombre);
}
else if(operande === "*" || operande === "x" || operande === "X")
{
    console.log(premierNombre*deuxiemeNombre);
}
else if(operande === "+")
{
    console.log(premierNombre+deuxiemeNombre);
}
else if(operande === "-")
{
    console.log(premierNombre-deuxiemeNombre);
}
else
{
    console.log("Erreur : Operande invalide !");
}