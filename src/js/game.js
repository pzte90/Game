import Draw from './draw.js';
import Rules from './rules.js';
import Statistics from './statistics.js';

export default class Game{
    constructor(){
        this.accountValue = document.querySelector('.general__info-value span'),
        this.accountMoney = parseInt(this.accountValue.textContent),

        this.score = document.querySelector('.score'),
        this.statsBtn = document.querySelector('.statistics__btn'),
        this.statsBtnText = document.querySelector('.statistics__btn-text'),
        this.statsPanel = document.querySelector('.statistics'),
        this.statsHistory = document.querySelector('.statistics__history');
        this.gameCount = document.querySelector('.general__info-count span'),
        this.wins = document.querySelector('.general__info-win span'),
        this.loses = document.querySelector('.general__info-lose span'),
        this.cards = document.querySelectorAll('.cards__container'),
        this.bidValue = document.querySelector('.play__bid'),
        this.playButton = document.querySelector('.play__btn'),
        
        this.stats = new Statistics(),
        
        this.resetBtn = document.querySelector('.statistics__reset-game').addEventListener('click', () => {
            this.resetGame();
            this.statsPanel.classList.toggle('statistics--show');
            this.statsBtnText.classList.toggle('statistics__btn-text--hide')
        }),

        this.statsBtn.addEventListener('click', () => {
            this.statsPanel.classList.toggle('statistics--show');
            this.statsBtnText.classList.toggle('statistics__btn-text--hide');
        }),

        this.bidValue.addEventListener('input', () => this.refreshAccountValue()),  
        this.playButton.addEventListener('click', () => this.play())
            
        this.render()

        this.throttle = false;
        // this.show()
    }
    // show(){
    //     console.log(parseInt(this.accountValue.textContent));
    //     console.log(this.playButton)
    // }

    
    play(){
        if(!this.bidValue.value == '' && !this.throttle){
            this.throttle = true;
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
            this.bidValue.placeholder = 'Bid and push button'
            
            this.stats.collectHistroy(games, wins, loses, bid, bonus, moneyWon, 0, this.accountMoney);
            console.log(this.stats.gameHistory);
            
            this.stats.showStats(this.statsHistory, games, wins, loses, bid, bonus, moneyWon, 0, this.accountMoney);
            
            if(bonus){
                this.score.textContent = `+ ${moneyWon} $`;
                this.score.classList.add('score--show');
            } else{
                this.score.textContent = `- ${bid} $`
                this.score.classList.add('score--show');
            }
            setTimeout(() => {
                this.score.classList.remove('score--show');
                this.throttle = false;
            },1000);

        } else if(this.throttle){
            this.bidValue.value = '';
            this.bidValue.placeholder = 'You play to fast !'
        }else{
            this.bidValue.value = '';
            this.bidValue.placeholder = 'You need to bid !';
        }
    }
    
    render(){
        const draw = new Draw();
        let colors = draw.drawColors(this.cards.length);
        this.cards.forEach((card, index) => {
            card.style.backgroundColor = colors[index];
        })
        return colors
    }

    resetGame(){
        this.accountValue.textContent = ' 1000$'
        this.accountMoney = parseInt(this.accountValue.textContent);
        this.gameCount.textContent = ' 0';
        this.wins.textContent = ' 0';
        this.loses.textContent = ' 0';
        this.bidValue.value = '';
        this.bidValue.placeholder = 'Bid and push button';
        this.statsHistory.textContent = '';

    }
    
    refreshAccountValue(){
        if(this.bidValue.value <= this.accountMoney && this.bidValue.value > 0){
            let bid = this.bidValue.value;
            let temporaryAccountValue = this.stats.countMoney(this.accountMoney,bid);
            this.accountValue.textContent = ` ${temporaryAccountValue}$`;
            return [temporaryAccountValue, bid]
        } else {
            this.bidValue.value = '';
            this.bidValue.placeholder = 'Wrong Bid !';
            this.accountValue.textContent =  ` ${this.accountMoney}$`
        }
    }    
};