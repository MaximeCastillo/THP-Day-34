/////////////////////////////////////////////////////////////////////
// 2.2. Opérations & boucles
/////////////////////////////////////////////////////////////////////

// 2.2.2 Pyramide de Mario

let floors = Number(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));
let bricks = 1;

if ((floors >= 1) && (floors <= 40)) {
  while (floors > 0) {
    console.log(" ".repeat(floors-1) + "#".repeat(bricks));
    floors --;
    bricks ++;
  }
}