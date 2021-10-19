/**
 * Écrivez un programme qui simulera une calculatrice et demande à l'utilisateur de saisir un premier opérande, un opérateur et un second opérande.
 * Ce programme exécutera des opérations arithmétiques de base (addition, soustraction, multiplication et division selon l'opérateur saisi
 */

let read = require("readline-sync");
let premierNombre = read.questionInt("Premier nombre : ");
let operande = read.question("operande : ");
let deuxiemeNombre = read.questionInt("Deuxieme nombre : ");

function addition(nombre1, nombre2){
    return nombre1+nombre2;
}
function soustraction(nombre1, nombre2){
    return nombre1-nombre2;
}
function multiplication(nombre1, nombre2){
    return nombre1*nombre2;
}
function division(nombre1, nombre2){
    if(nombre2 == 0)
    {
        console.log("ERREUR_DIVIDE_BY_ZERO")
    }
    else
    {
        return nombre1/nombre2;
    }
}
if(operande === "/")
{
    console.log(division(premierNombre, deuxiemeNombre));
}
else if(operande === "*" || operande === "x" || operande === "X")
{
    console.log(multiplication(premierNombre, deuxiemeNombre));
}
else if(operande === "+")
{
    console.log(addition(premierNombre, deuxiemeNombre));
}
else if(operande === "-")
{
    console.log(soustraction(premierNombre, deuxiemeNombre));
}
else
{
    console.log("Erreur : Operande invalide !");
}