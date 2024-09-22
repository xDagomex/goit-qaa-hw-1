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
