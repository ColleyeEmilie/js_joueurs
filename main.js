class Player{
    constructor(nom,score){
        this.nom = nom;
        this.score = score;
    }
    newScore(score){
        return this.score = score+1;
    }
}

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const joueur1 = new Player('Luana', 0);
const joueur2 = new Player('Jordan', 0);

button1.addEventListener('click', ()=>{
    joueur1.newScore(joueur1.score);
    button1.textContent = `Le score de ${joueur1.nom} est de ${joueur1.score}`;
})

button2.addEventListener('click', ()=>{
    joueur2.newScore(joueur2.score);
    button2.textContent = `Le score de ${joueur2.nom} est de ${joueur2.score}`;
})
