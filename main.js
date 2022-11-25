class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
    incScore() {
        return this.score++;
    }
}

const buttons = document.getElementsByClassName('play');
const players = [
    new Player('Luana'),
    new Player('Jordan'),
];

for (const button of buttons) {
    button.addEventListener('click', (event) => {
        const idx = parseInt(event.currentTarget.dataset.play);
        players[idx].incScore();
        event.currentTarget.textContent = `Le score de ${players[idx].name} est de ${players[idx].score}`;
    })
}
