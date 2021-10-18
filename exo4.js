/**
 * Si le prix de fabrication est supérieur au prix de vente, il y a perte sinon profit.
 */

let read = require("readline-sync");
let num1 = read.questionInt("Veuillez introduire un premier nombre ");
let num2 = read.questionInt("Veuillez introduire un deuxieme nombre ");
let num3 = read.questionInt("Veuillez introduire un troisieme nombre ");
if(num1>num2)
{
    if(num1>num3)
    {
        console.log(`Le plus grand des trois nombres est ${num1}`);
    }
    else
    {
        console.log(`Le plus grand des trois nombres est ${num3}`);
    }
}
else
{
    if(num2>num3)
    {
        console.log(`Le plus grand des trois nombres est ${num2}`)
    }
    else
    {
        console.log(`Le plus grand des trois nombres est ${num3}`);
    }
}