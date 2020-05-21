/////////////////////////////////////////////////////////////////////
// 2.2. Opérations & boucles
/////////////////////////////////////////////////////////////////////

// 2.2.1 Calculs rapides

let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
let result = 1;

for(let count = 0; count < number; count++){
  result = result * (number-count);
}

console.log(`Le résultat est : ${result}`);