// PREMIER JAVASCRIPT //

/////////////////////////////////////////////////////////////////////
// DEFINITION ET AFFICHAGE D'UNE VARIABLE ET DE SON TYPE
/////////////////////////////////////////////////////////////////////

let myVariable = 4;
console.log(myVariable);
console.log(typeof myVariable);

/////////////////////////////////////////////////////////////////////
// DIFFERENCES ENTRE LET ET VAR
/////////////////////////////////////////////////////////////////////

let data1 = "variable en let définie dans le bloc principal";

{ //début du sous-bloc

  data1 = "variable en let modifiée dans le sous-bloc";
  var data2 = "variable en var définie dans le sous-bloc";
  let data3 = "variable en let définie dans le sous-bloc";

} //fin du sous-bloc

console.log(data1); // "variable let modifiée dans le sous-bloc"
console.log(data2); // "variable var définie dans le sous-bloc"
//console.log(data3); // On aura une erreur : data3 n'est pas visible dans le bloc principal

// On peut aussi déclarer des variables en const (var dont on ne peut modifier la valeur)

/////////////////////////////////////////////////////////////////////
// OPERATIONS DE BASES
/////////////////////////////////////////////////////////////////////

{
  let a = 1, b = 1;
  a++
  console.log(a);
  console.log(b += 2);
}

{
  let a = "Bonjour", b = "Monde";
  console.log(a + " " + b);
}

{
  let variableNumber5 = Number("5");
  let variableString36 = String(36);
}

/////////////////////////////////////////////////////////////////////
// LES ARRAYS
/////////////////////////////////////////////////////////////////////

{
let statusDeTHP = ["Moussaillon", "Corsaire", "Renégat"];
console.log(statusDeTHP.length);
console.log(statusDeTHP[0]);
statusDeTHP.push("Flibustier");
statusDeTHP.unshift("Pirate");
// Autres fonctions : statusDeTHP.pop() supprime le dernier élément tandis que statusDeTHP.shift() supprimera le premier
// Tu peux aussi enlever plusieurs éléments avec statusDeTHP.splice(0,2) qui enlèvera 2 éléments à partir de l'indice 0
console.log(statusDeTHP);
console.log(statusDeTHP.slice(2,4)); // Ses valeurs seront celles comprises entre l'index 2 (inclus) et 4 (exclus)
}

/////////////////////////////////////////////////////////////////////
// LES STRINGS
/////////////////////////////////////////////////////////////////////

{
  let a = 3;
  console.log("Bonjour à tous les "+ a);
  console.log(a + "3");
}

{
  let numStudent = 4;
  let statement = `Dans mon groupe on est ${numStudent} moussaillons`;
  console.log(statement);
}

{
  console.log("The Hacking Project".indexOf("Hack"));
}

// Les fonctions suivantes permettent de passer en minuscule / majuscule un string : toLowerCase() et toUpperCase()

{
  const contentOfTHP = "Git-Ruby-Rails-HTML-CSS-JS";
  const lesson = contentOfTHP.split("-");
  console.log(lesson[0]); // "Git"
  console.log(lesson[5]); // "JS"
}

/* La fonction join(",") fait l'exact inverse de split(",") :
elle produit un string en concaténant tous les éléments d'un tableau et en rajoutant,
entre chaque élément, un séparateur (une virgule ici) */

/////////////////////////////////////////////////////////////////////
// LES OBJETS LITTERAUX
/////////////////////////////////////////////////////////////////////

{
  let THPSessionNum2 = {
    numOfMouss: 80,
    cities: ["Paris", "Lyon", "Montpellier"],
    successRate: 0.80,
    sessionMoto: "keep pushing to the top"
  };

  console.log(THPSessionNum2.numOfMouss);
  console.log(THPSessionNum2.sessionMoto);

  THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
  console.log(THPSessionNum2.numOfMouss);
  THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
  console.log(THPSessionNum2); //j'imprime tout l'objet pour voir

  let attributName = "successRate";
  console.log(THPSessionNum2[attributName]);
}

/////////////////////////////////////////////////////////////////////
// LES CONDITIONS
/////////////////////////////////////////////////////////////////////

console.log("36" == 36); // va retourner TRUE car le contenu est identique
console.log("36" === 36); // va retourner FALSE car d'un côté on a un string et de l'autre un number
// De même, on a un opérateur != (compare le contenu) et un !== (compare le contenu et le type)

let number = 0; //fais ensuite le test avec d'autres valeurs (positives et négatives)
if(number > 0) {
  console.log("number est positif");
} else if(number === 0) {
  console.log("number est nul");
} else {
  console.log("number est négatif");
}

if (true && true) {
  console.log("ce message s'affiche car avec un ET, si les deux conditions sont à TRUE, le résultat est TRUE");
}
if (true || false) {
  console.log("ce message s'affiche car avec un OU, si l'une des conditions est à TRUE, le résultat est TRUE");
} 
if (!false) {
  console.log("ce message s'affiche car un NON sur FALSE donne TRUE");
}

weekNum = 7; //teste avec plusieurs valeurs
switch (weekNum) {
  case 1:
    console.log("Semaine 1 - Introduction au Code");
    break;
  case 2:
    console.log("Semaine 2 - Découverte de Ruby");
    break;
  case 3:
    console.log("Semaine 3 - Programmation Orientée Objet");
    break;
  case 4:
    console.log("Semaine 4 - Initiation à Rails");
    break;
  case 5:
    console.log("Semaine 5 - Rails intermédiaire");
    break;
  case 6:
    console.log("Semaine 6 - Rails avancé");
    break;
  case 7:
    console.log("Semaine 7 - HTML / CSS et intro au JS");
    break;
  case 8:
    console.log("Semaine 8 - JavaScript de front");
    break;

  default:
    console.log("Cette entrée n'est pas reconnue");
    break;
}

let aNumber = 0; //fais aussi le test avec un chiffre non nul
if (aNumber) {
  console.log("ce message ne s'affiche que si number est non nul ");
}

let string = ""; //fais aussi le test avec un mot non vide
if (string) {
  console.log("ce message ne s'affiche que si string est non vide");
}

let aVariable // ici, myVariable sera undefined. Fais aussi le test en lui donnant une valeur: number, string, array ou autre.
if (aVariable) {
  console.log("ce message ne s'affiche que si myVariable contient une valeur ");
}

/////////////////////////////////////////////////////////////////////
// LES BOUCLES
/////////////////////////////////////////////////////////////////////

for(let count = 0; count <=5; count++){
  console.log(`on va compter jusqu'à 5 : ${count}`);
}

let answer = "";
while(answer !== "oui") {
  console.log("alors ?")
  answer = prompt("Tu kiffes THP ?");
} 

console.log("haaa, tu nous fais plaisir !") // Qui se lassera le premier entre toi et ton ordi ? :D

let word = "";
let letter;

while (true) {
    letter = prompt('Tape UNE lettre stp :');

    if (letter) {
        word += letter; //on rajoute la lettre saisie à la suite du mot
        console.log(word);
    } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
        break; // On quitte la boucle
    }
}
console.log(`voilà ce que tu as tapé : ${word}`);