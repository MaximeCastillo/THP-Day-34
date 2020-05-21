/////////////////////////////////////////////////////////////////////
// 2.4. Creusons-nous la tête
/////////////////////////////////////////////////////////////////////

// 2.4.2. Acné-Bot

let input = prompt("Yo ! Tu veux quoi ?");

// RegEx pour : String se termine par "?"
regexQuestion = /[?]$/

// Passe tout en majuscule pour comparer dans le else if
inputInUpperCase = input.toUpperCase()

if (regexQuestion.test(input)) {
  console.log("Ouais Ouais...")
}
else if ((input !== "") && (inputInUpperCase === input)) {
  console.log("Pwa, calme-toi...")
}
else if (input.includes("Fortnite")) {
  console.log("on s' fait une partie soum-soum ?")
}
else if (input === "") {
  console.log("t'es en PLS ?")
}
else {
  console.log("balek.")
}
