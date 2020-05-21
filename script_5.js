/////////////////////////////////////////////////////////////////////
// 2.3. Analyses de données
/////////////////////////////////////////////////////////////////////

// 2.3.2. Bibliothécaire

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
let allHaveBeenRented = true;
for (let index in books) {
  if (books[index].rented === 0) {
    allHaveBeenRented = false;
  }
}
console.log(allHaveBeenRented);


console.log("\nQuel est livre le plus emprunté ?");
let booksSortedByRentedRatio = books.sort((a,b) => (a.rented > b.rented) ? 1 : ((b.rented > a.rented) ? -1 : 0));
console.log(booksSortedByRentedRatio[booksSortedByRentedRatio.length - 1].title);

console.log("\nQuel est livre le moins emprunté ?");
console.log(booksSortedByRentedRatio[0].title);

console.log("\nLe livre avec l'ID 873495 :");
console.log(books.find(book => book.id === 873495).title);

console.log("\nVoici les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé) :");
// Suppression du livre avec l'ID 133712
let booksSortedByName = books.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
booksSortedByName.splice((booksSortedByName.indexOf(booksSortedByName.find(book => book.id === 133712))), 1);
for (let index in books) {
  console.log(booksSortedByName[index].title);
}