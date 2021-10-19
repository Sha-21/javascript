/**
 * Écrivez un programme qui demande à l'utilisateur de saisir un nombre décimal.
 * Le programme doit renvoyer exactement le nombre de billets et de pièces qu'il faut pour obtenir ce nombre
 */

let read = require("readline-sync");
let argent = read.questionFloat("INTRODUIRE ARGENT !! ");

function afficherBillet(moneyMoneyMoney)
{
    if(moneyMoneyMoney/500>=1)
    {
        console.log("Billet(s) 500€ : " + ((moneyMoneyMoney-(moneyMoneyMoney%500))/500));
        moneyMoneyMoney -= ((moneyMoneyMoney-(moneyMoneyMoney%500))/500)*500;
    }
    if(moneyMoneyMoney/200>=1)
    {
        console.log("Billet(s) 200€ : " + ((moneyMoneyMoney-(moneyMoneyMoney%200))/200));
        moneyMoneyMoney -= ((moneyMoneyMoney-(moneyMoneyMoney%200))/200)*200;
    }
    if(moneyMoneyMoney/100>=1)
    {
        console.log("Billet(s) 100€ : " + ((moneyMoneyMoney-(moneyMoneyMoney%100))/100));
        moneyMoneyMoney -= ((moneyMoneyMoney-(moneyMoneyMoney%100))/100)*100;
    }
    if(moneyMoneyMoney/50>=1)
    {
        console.log("Billet(s) 50€ : " + ((moneyMoneyMoney-(moneyMoneyMoney%50))/50));
        moneyMoneyMoney -= ((moneyMoneyMoney-(moneyMoneyMoney%50))/50)*50;
    }
    if(moneyMoneyMoney/20>=1)
    {
        console.log("Billet(s) 20€ : " + ((moneyMoneyMoney-(moneyMoneyMoney%20))/20));
        moneyMoneyMoney -= ((moneyMoneyMoney-(moneyMoneyMoney%20))/20)*20;
    }
    if(moneyMoneyMoney/10>=1)
    {
        console.log("Billet(s) 10€ : " + ((moneyMoneyMoney-(moneyMoneyMoney%10))/10));
        moneyMoneyMoney -= ((moneyMoneyMoney-(moneyMoneyMoney%10))/10)*10;
    }
    if(moneyMoneyMoney/5>=1)
    {
        console.log("Billet(s) 5€ : " + ((moneyMoneyMoney-(moneyMoneyMoney%5))/5));
        moneyMoneyMoney -= ((moneyMoneyMoney-(moneyMoneyMoney%5))/5)*5;
    }
    if(moneyMoneyMoney/2>=1)
    {
        console.log("Pièce(s) 2€ : " + ((moneyMoneyMoney-(moneyMoneyMoney%2))/2));
        moneyMoneyMoney -= ((moneyMoneyMoney-(moneyMoneyMoney%2))/2)*2;
    }
    if(moneyMoneyMoney/1>=1)
    {
        console.log("Pièce(s) 1€ : " + ((moneyMoneyMoney-(moneyMoneyMoney%1))/1));
        moneyMoneyMoney -= ((moneyMoneyMoney-(moneyMoneyMoney%1))/1)*1;
    }
    if(moneyMoneyMoney/0.5>=1)
    {
        console.log("Pièce(s) 0.50€ : " + ((moneyMoneyMoney-(moneyMoneyMoney%0.5))/0.5));
        moneyMoneyMoney -= ((moneyMoneyMoney-(moneyMoneyMoney%0.5))/0.5)*0.5;
    }
    if(moneyMoneyMoney/0.2>=1)
    {
        console.log("Pièce(s) 0.20€ : " + ((moneyMoneyMoney-(moneyMoneyMoney%0.2))/0.2));
        moneyMoneyMoney -= ((moneyMoneyMoney-(moneyMoneyMoney%0.2))/0.2)*0.2;
    }
    if(moneyMoneyMoney/0.1>=1)
    {
        console.log("Pièce(s) 0.10€ : " + ((moneyMoneyMoney-(moneyMoneyMoney%0.1))/0.1));
        moneyMoneyMoney -= ((moneyMoneyMoney-(moneyMoneyMoney%0.1))/0.1)*0.1;
    }
    if(moneyMoneyMoney/0.05>=1)
    {
        console.log("Pièce(s) 0.05€ : " + ((moneyMoneyMoney-(moneyMoneyMoney%0.05))/0.05));
        moneyMoneyMoney -= ((moneyMoneyMoney-(moneyMoneyMoney%0.05))/0.05)*0.05;
    }
    if(moneyMoneyMoney/0.02>=1)
    {
        console.log("Pièce(s) 0.02€ : " + ((moneyMoneyMoney-(moneyMoneyMoney%0.02))/0.02));
        moneyMoneyMoney -= ((moneyMoneyMoney-(moneyMoneyMoney%0.02))/0.02)*0.02;
    }
    if(moneyMoneyMoney/0.01>=1)
    {
        console.log("Pièce(s) 0.01€ : " + ((moneyMoneyMoney-(moneyMoneyMoney%0.01))/0.01));
        moneyMoneyMoney -= ((moneyMoneyMoney-(moneyMoneyMoney%0.01))/0.01)*0.01;
    }
}
afficherBillet(argent);