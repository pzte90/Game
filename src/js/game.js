import Draw from './draw.js';
import Rules from './rules.js';

export default class Game{
    constructor(){
        this.accountValue = document.querySelector('.general__info-value span'),
        this.gameCount = document.querySelector('.general__info-count span'),
        this.wins = document.querySelector('.general__info-win span'),
        this.loses = document.querySelector('.general__info-lose span'),
        this.cards = document.querySelectorAll('.cards__container')
        this.draw = new Draw;
        this.addColors();
        // this.show();
    }
    show(){
        console.log(this.accountValue, this.gameCount, this.wins, this.loses,this.cards.length, this.draw.drawColors(), Rules.checkWin());
    }
    addColors(){
        let colors = this.draw.drawColors(this.cards.length);
        this.cards.forEach((card, index) => {
            card.style.backgroundColor = colors[index];
        })
        this.accountValue.textContent = ` Bid x${Rules.checkWin(colors)}`
    }
};