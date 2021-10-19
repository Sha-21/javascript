/**
 * Demandez à l'utilisateur de saisir un nombre de tentative pour simuler les "30 secondes".
 * (Ce nombre de tentatives représentera le nombre d'échec possible)
 * Générez un nombre aléatoire entre 0 et "N" saisie par l'utilisateur.
 * Construisez le programme permettant de :
 * Saisir un nombre
 * Comparer le nombre avec le résultat attendu "N"
 * Afficher "Plus" ou "Moins"
 * Retirer une vie
 */

 let read = require("readline-sync");

let nbComp = Math.floor(Math.random()*101);
let vie = read.questionInt("Veuillez introduire un nombre de tentative: ");
let vieActuelle = vie;
let nbJoueur = -1;
while(vieActuelle>0 && nbJoueur!=nbComp)
{
    console.log(nbComp);
    nbJoueur = read.questionInt("Veuillez introduire un nombre compris entre 0 et 100: ");
    if(nbJoueur<=100 && nbJoueur>=0)
    {
        if(nbJoueur>nbComp)
        {
            console.log("C'est moins! ");
            console.log("Il vous reste " + --vieActuelle + " tentatives ");

        }
        else if(nbJoueur<nbComp)
        {
            console.log("C'est plus! ");
            console.log("Il vous reste " + --vieActuelle + " tentative s");
        }
        else
        {
            console.log("VICTOIRE !!!");
            break;
        }
    }
    else
    console.log("Qu'est ce que tu ne comprend pas dans ENTRE 0 ET 100 espece de singe! ");
}
if(vieActuelle<1)
console.log("LOSER!");