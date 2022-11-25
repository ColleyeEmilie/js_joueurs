class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
    incScore() {
        this.score++;
    }
}

const game = {
    buttons : document.getElementsByClassName('play'),
    players : [new Player('Luana'), new Player('Jordan')],

    init(){
        this.addEventListener();
    },
    addEventListener(){
        for (const button of this.buttons) {
            button.addEventListener('click', (event) => {
                this.play(event)
            })
        }
    },
    play(event){
        this.idx = parseInt(event.currentTarget.dataset.play);
        this.players[this.idx].incScore();
        event.currentTarget.textContent = `Le score de ${this.players[this.idx].name} est de ${this.players[this.idx].score}`;
    }
}
game.init();


const items = document.getElementById('items');
for (let i = 1; i <= 1000; i++) {
    items.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
}
window.addEventListener('scroll', (event) =>{
    console.log(window.screenY);
    /*hauteur de la fenêtre : window.screenY*/
    /*quantité de scroll : document.body.offsetHeight*/
    /* hauteur du document : scrollHeight*/
})