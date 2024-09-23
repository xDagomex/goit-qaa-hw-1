//Tworzenie obiektu
const maciej = {
    username: "Maciej",
    //Metoda, która zapisuje właściwość username w konsoli, używając słowa kluczowego this
    showName() {
        console.log(this.username);
    },
};
// Przetestowanie obiektu wywołując metodę showName()
maciej.showName();

//////////////////////////////////////////////////////////////////

// Tworzenie obiektu
const bookshelf = {
    // Tworzenie tablicy do przechowywania autorów
    authors: [], 
    // Metoda zwracająca tablicę autorów przechowywanych na półce z książkami
    getAuthors: function() {
      return this.authors; // Odnoszę się do autorów w tym obiekcie: this.authors
    },
    // Metoda, która przyjmuje imię autora jako argument i dodaje je do tablicy autorów na półce z książkami
    addAuthor: function(authorName) {
      this.authors.push(authorName); // Dodaję autorów do tego obiektu: this.authors.push
    }
  };
  
  // Przykładowi autorzy dodani do obiektu
  bookshelf.addAuthor("Tolkien");
  bookshelf.addAuthor("Sapkowski");
  bookshelf.addAuthor("Sanderson");
  bookshelf.addAuthor("Dukaj");
  bookshelf.addAuthor("Gaiman");
  // Sprawdzenie, czy autorzy zostali dodani do obiektu
  console.log(bookshelf.getAuthors());
  