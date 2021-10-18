/**
 * Écrivez un programme pour un professeur flemmard.
 * Vous disposez d'une liste de notes comprises entre 0 et 20
 * Écrivez un commentaire pour chacune de ces copies d'élève
 */

let tabNote = [0, 10, 5, 20, 19, 2, 3, 7, 12, 16, 14, 1, 18, 4, 17, 13, 8, 9, 6, 11, 14];
let tabComment = [];
for(var i=0;i<tabNote.length;i++)
{
    tabComment.push(notation(tabNote[i]));
    console.log("Note: " + tabNote[i] + ", " + tabComment[i]);
}
function notation(note)
{
    if(note<5)
    {
        return "Catastrophique, il faut tout revoir";
    }
    else if(note < 11)
    {
        return "Insuffisant";
    }
    else if(note < 15)
    {
        return "Peut mieux faire";
    }
    else if(note<18)
    {
        return "Bien";
    }
    else
    {
        return "Excellent, bon travail";
    }
}