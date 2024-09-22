const maciej = {
    username: "Maciej",
    showThis() {
        console.log(this);
    },
    showName() {
        console.log(this.username);
    },
};
// This pozwala wyciągnąć imię z obiektu Maciej, odnosi się on tylko do tego obiektu
maciej.showThis();
maciej.showName();