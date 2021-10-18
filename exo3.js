/**
 * Écrivez un programme qui demande à l'utilisateur de saisir le prix de fabrication et le prix de vente d'un produit et vérifiez le profit ou la perte.
 * Si le prix de fabrication est supérieur au prix de vente, il y a perte sinon profit.
 */

 let read = require("readline-sync");
 let number1 = read.questionInt("Veuillez introduire le prix de fabrication du produit ");
 let number2 = read.questionInt("Veuillez introduire le prix de vente du produit ");
 let sum = number2 - number1;
 if(sum >= 0)
 {
     console.log(`Vous avez fait un profit de ${sum} euros`);
 }
 else
{
    console.log(`Vous avez fait une perte de ${sum} euros`);
}