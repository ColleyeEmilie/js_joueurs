class Player{
    constructor(nom,score){
        this.nom = nom;
        this.score = score;
    }
    newScore(score){
        return this.score = score+1;
    }
}
const buttons = document.querySelectorAll('button');
const joueur1 = new Player('Luana', 0);
const joueur2 = new Player('Jordan', 0);

for (const button of buttons) {
    button.addEventListener('click', (event)=>{
        if(event.currentTarget.getElementById === 'button1') {
            joueur1.newScore(joueur1.score);
            event.currentTarget.textContent = `Le score de ${joueur1.nom} est de ${joueur1.score}`;
        } else {
            joueur2.newScore(joueur2.score);
            event.currentTarget.textContent = `Le score de ${joueur2.nom} est de ${joueur2.score}`;
        }
    })
}
