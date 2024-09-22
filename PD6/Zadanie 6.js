const maciej = {
    username: "Maciej",
    showThis() {
        console.log(this);
    },
    showName() {
        console.log(this.username);
    },
};

maciej.showThis();
maciej.showName();