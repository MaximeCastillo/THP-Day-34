/////////////////////////////////////////////////////////////////////
// 2.4. Creusons-nous la tête
/////////////////////////////////////////////////////////////////////

// 2.4.1. Code la vie

function transformInProtein(myARN) {

  console.log(`Décodage de l'ARN "${myARN}" :`)
  let protein = [];

  for (i = 0; i <= 15; i += 3) {
    let aminoAcid = "";
    let codon = myARN.slice(i,i + 3);
    switch (codon) {
    case "UCU": case "UCC": case "UCA": case "UCG": case "AGU": case "AGC":
      aminoAcid = "Sérine";
      break;
    case "CCU": case "CCC": case "CCA": case "CCG":
      aminoAcid = "Proline";
      break;
    case "UUA": case "UUG":
      aminoAcid = "Leucine";
      break;
    case "UUU": case "UUC":
      aminoAcid = "Phénylalanine";
      break;
    case "CGU": case "CGC": case "CGA": case "CGG": case "AGA": case "AGG":
      aminoAcid = "Arginine";
      break;
    case "UAU": case "UAC":
      aminoAcid = "Tyrosine";
      break;

    default:
      console.log(`Le codon suivant n'a pas pu être décodé : ${codon}`);
      break;
    }
    protein.push(aminoAcid);
  }

  console.log(protein.join("-"));

}


transformInProtein("CCGUCGUUGCGCUACAGC");
transformInProtein("CCUCGCCGGUACUUCUCG");
