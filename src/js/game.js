import Draw from './draw.js';
import Rules from './rules.js';
import Statistics from './statistics.js';

export default class Game{
    constructor(){
        this.accountValue = document.querySelector('.general__info-value span'),
        this.accountMoney = parseInt(this.accountValue.textContent),

        this.gameCount = document.querySelector('.general__info-count span'),
        this.wins = document.querySelector('.general__info-win span'),
        this.loses = document.querySelector('.general__info-lose span'),
        this.cards = document.querySelectorAll('.cards__container'),
        this.bidValue = document.querySelector('.play__bid'),
        this.playButton = document.querySelector('.play__btn'),

        this.stats = new Statistics(),

        this.bidValue.addEventListener('input', () => {
            this.refreshAccountValue()}),

        this.playButton.addEventListener('click', () => {
            this.play()
        })

        this.render()

        // this.show()
    }
    // show(){
    //     console.log(parseInt(this.accountValue.textContent));
    //     console.log(this.playButton)
    // }

    play(){
        let colors = this.render()
        const bonus = Rules.checkWin(colors);
        this.stats.countGames(bonus);

        let { games, wins, loses } = this.stats.gameStats[0]
        this.gameCount.textContent = ` ${games}`;
        this.wins.textContent = ` ${wins}`;
        this.loses.textContent = ` ${loses}`;
        
        const [ temporaryAccountValue, bid ] = this.refreshAccountValue();
        const moneyWon = bid * bonus;

        this.accountValue.textContent = ` ${temporaryAccountValue + moneyWon}$`;
        this.accountMoney = parseInt(this.accountValue.textContent);
        this.bidValue.value = '';

        this.stats.collectHistroy(games, wins, loses, bid, bonus, moneyWon, 0, this.accountMoney);
        console.log(this.stats.gameHistory);
    }
    
    render(){
        const draw = new Draw();
        let colors = draw.drawColors(this.cards.length);
        this.cards.forEach((card, index) => {
            card.style.backgroundColor = colors[index];
        })
        return colors
    }
    
    refreshAccountValue(){
        let bid = this.bidValue.value;
        let temporaryAccountValue = this.stats.countMoney(this.accountMoney,bid);
        this.accountValue.textContent = ` ${temporaryAccountValue}$`;
        return [temporaryAccountValue, bid]
    }
    
};