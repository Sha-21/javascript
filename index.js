var texte = "voici \"du\" texte";
var prenom = 'Shahin';

console.log(texte);
console.log(`Mon prenom est ${prenom}`);

var a = 12;
var b = 9; //ALT + MAJ + flèche du bas = copie/coller la ligne. ALT + flèche déplace la ligne de code.

console.log(a + b);
console.log(a - b);
console.log(a * b);

var tab = [12, true, "Thomas", "Shahin", true, 15] //Tableau
var prenoms = ["Shahin", "Fethi", "Thomas"];

prenoms.push("Julie");
prenoms.splice(1, 1);

console.log("Taille du tableau");
console.log(prenoms.length);

// Voir les fonction map et filter sur les tableaux

/**
 * prendre les INPUT utilisateur
 * --> npm init
 * --> npm i readline-sync (permet d'installer la dépendance readline-sync)
 * --> npm install
 * --> optionnel : faire un gitignore pour ignorer les node modules
 */
let read = require("readline-sync");

let prenom = read.question("Quel est votre prénom ?");
let age = read.questionFloat("Entrez votre age :");
console.log(prenom);
console.log(age);