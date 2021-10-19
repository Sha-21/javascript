/**
 * Le manège dispose d'un certain nombre de places assises. ("places")
 * Le manège ne peut effectuer qu'un certain nombre de tours pendant une journée ("tours")
 * La file d'attente est une liste de groupes de visiteurs. ("file")
 * Avec les informations du contexte et les données (places, tours, file), écrivez un programme permettant de calculer les profits du Roller Coaster sur une journée.
 * PAS FINI
 */

let read = require("readline-sync");
var profitTotal=0;
var count=0;
var nbTours = read.questionInt("Veuillez introduire un nombre de tour: ");
var nbPlace = read.questionInt("Veuillez introduire un nombre de place: ");
var nbGroupe = read.questionInt("Veuillez introduire un nombre de groupe: ");
var nbPersonne=0;
var file = [];
askUserPersonPerGroup(file);
startFun();
function askUserPersonPerGroup(file)
{
    for(let i=0; i<nbGroupe;i++)
    {
        while(file[i] > nbPlace || file[i] <1)
        {
            console.log("Veuillez introduire un nombre de personne valide(min1, max ", nbPlace + ")")
        }
        file.push(read.questionInt("Veuillez introduire le nombre de personne dans le groupe " + (i+1) + ": "));
    }
}
function startFun()
{
    console.log("Let the fun begin!");
    for(let i=0; i<nbTours; i++)
    {
        console.log("Tour numero : " + (i+1));
        for(let j=0; i<file.length;j++)
        {
            count++;
            nbPersonne += file[j];
            if( (j==file.length-1) || (nbPersonne+file[j+1])>nbPlace )
            {
                break;
            }
        }
    }
    for(let k=0; k<count; k++)
    {
        file=firstToLast(file);
    }
    console.log("Profit sur ce tour: " + nbPersonne);
    profitTotal += nbPersonne; 
    count=0;
    nbPersonne=0;
}
function firstToLast(tab)
{
    let temp1 = [];
    let temp2 = tab[tab.lenght-1];
    let temp3 = 0;
    let number = 1;
    for( let i = tab.lenght-1; i>=0; i--)
    {
        if(i==0)
        {
            tab[tab.lenght-1] = temp1;
            tab[i] = temp3;
            break;
        }
        temp3= tabl[tab.lenght-number];
        tab[tab.lenght-number]=temp2;
        temp2=temp3;
        number++;
    }
    return tab;
}
console.log("Profit total :" + profitTotal);