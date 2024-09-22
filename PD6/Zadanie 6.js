//Tworzenie obiektu
const maciej = {
    username: "Maciej",
    //Metoda showName używająca this
    showName() {
        console.log(this.username);
    },
};
// Przetestowanie obiektu używając metody showName()
maciej.showName();

const authors = {
    [
    { name: "Tolkien" },
    { name: "Sapkowski" },
    { name: "Sanderson" },
    { name: "Dukaj" },
    { name: "Gaiman"}
    ]
    showName() {
        console.log(this.name);
    }
}

authors.showName();