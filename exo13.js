/**
 * Vous disposez d'une liste de nombre.
 * Triez la liste du plus petit au plus grand
 */
let read = require("readline-sync");
let tailleTab = read.questionInt("Veuillez introduire un nombre entier permettant de determiner la taille du tableau a trier: ");
let tab = [];

for(let i=0; i<tailleTab; i++)
{
    tab.push(Math.floor(Math.random() * 100));
}
console.log("Tableau d'entree: ");
console.log(tab);

function tri(tab){
    for(var i = 0; i < tab.length; i++){
      var min = i; 
      for(var j = i+1; j < tab.length; j++){
        if(tab[j] < tab[min]){
         min = j; 
        }
      }
      var temp = tab[i];
      tab[i] = tab[min];
      tab[min] = temp;
    }
    return tab;
  };
tri(tab);
console.log("Tableau trie: ");
console.log(tab);