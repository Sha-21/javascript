/**
 * Vous disposez d'une liste de températures (°C).
 * Parcourez cette liste et affichez la température la plus proche de 0°C. 
 * Si une température négative est aussi proche de 0 qu'une température positive, la valeur négative prend le dessus.
 */


let tempTab = [2, -2, 6, 12, -24, 1, 56, -0.5, 0.5, -0.1, 0]
let closestNumber = tempTab[0];
function positif(nombre)
{
    if(nombre<0)
    return (-nombre);
    else
    return nombre;
}
for(let i=0; i<tempTab.length;i++)
{
    if(positif(tempTab[i]) == positif(closestNumber) && tempTab[i]<0)
    {
        closestNumber = tempTab[i];
    }
    else if(positif(tempTab[i])<positif(closestNumber))
    {
        closestNumber = tempTab[i];
    }
}
console.log(closestNumber);