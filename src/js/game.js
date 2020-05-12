import Draw from './draw.js';
import { checkWin } from './rules.js';
import Statistics from './statistics.js';

export default class Game{
    constructor(){
        this.accountValue = document.querySelector('.general__info-value span');
        this.accountMoney = parseInt(this.accountValue.textContent, 10);
        this.score = document.querySelector('.score');
        this.statsBtn = document.querySelector('.statistics__btn');
        this.statsBtnText = document.querySelector('.statistics__btn-text');
        this.statsPanel = document.querySelector('.statistics');
        this.statsHistory = document.querySelector('.statistics__history');
        this.gameCount = document.querySelector('.general__info-count span');
        this.wins = document.querySelector('.general__info-win span');
        this.loses = document.querySelector('.general__info-lose span');
        this.cards = [...document.querySelectorAll('.cards__container')];
        this.bidValue = document.querySelector('.play__bid');
        this.playButton = document.querySelector('.play__btn');
        this.statsSlider = document.querySelector('.statistics__container-slider');
        this.dots = document.querySelector('.statistics__container-dots');

        this.stats = new Statistics();
        this.startListener();
        this.renderColors();
        
        this.throttle = false;
        this.statsHeight = 0;
    }


    play(){
        if(this.bidValue.value && !this.throttle){
            this.throttle = true;
            let colors = this.renderColors();
            const bonus = checkWin(colors);
            this.stats.countGames(bonus);
            
            let { games, wins, loses } = this.stats.gameStats;
            this.gameCount.textContent = `${games}`;
            this.wins.textContent = `${wins}`;
            this.loses.textContent = `${loses}`;
            
            const { temporaryAccountValue, bid } = this.refreshAccountValue();
            const moneyWon = bid * bonus;
            
            this.accountValue.textContent = `${temporaryAccountValue + moneyWon}$`;
            this.accountMoney = parseInt(this.accountValue.textContent);

            this.renderHistoryCard()
            this.stats.historyCards[this.stats.countCards].appendChild(this.stats.showStats(bid, bonus, moneyWon, 0, this.accountMoney));
            this.ckeckCardHeight();
            
            if(bonus){
                this.score.textContent = `+ ${moneyWon} $`;
                this.score.style.color = 'green';
                this.score.classList.add('score--show');
            } else{
                this.score.textContent = `- ${bid} $`;
                this.score.style.color = 'red';
                this.score.classList.add('score--show');
            }
            setTimeout(() => {
                this.score.classList.remove('score--show');
                this.throttle = false;
            },1000);

            this.bidValue.placeholder = 'Bid and push button';
            
        }else if(this.throttle){
            this.bidValue.placeholder = 'You bid to fast !';
        }else {
            this.bidValue.placeholder = 'You need to bid !';
        }

        this.bidValue.value = '';
    }
    
    renderColors(){
        const draw = new Draw();
        let colors = draw.drawColors(this.cards);
        this.cards.forEach((card, index) => {
            card.style.backgroundColor = colors[index];
        })
        return colors
    }

    resetGame(){
        this.accountValue.textContent = '1000$';
        this.accountMoney = parseInt(this.accountValue.textContent, 10);
        this.gameCount.textContent = '0';
        this.wins.textContent = '0';
        this.loses.textContent = '0';
        this.bidValue.value = '';
        this.bidValue.placeholder = 'Bid and push button';
        this.dots.textContent = '';
        this.stats.gameStats.games = 0;
        this.stats.gameStats.wins = 0;
        this.stats.gameStats.loses = 0;
        this.stats.historyCards = [];
        this.stats.countCards = -1;
        this.statsSlider.textContent = '';
        this.statsHeight = 0;
        this.statsSlider.style.left ='0';
    }
    
    refreshAccountValue(){
        let bid = parseInt(this.bidValue.value, 10);
        if(bid <= this.accountMoney && bid > 0){
            let temporaryAccountValue = this.accountMoney - bid;
            this.accountValue.textContent = `${temporaryAccountValue}$`;
            return { temporaryAccountValue, bid } // bid bedzie potrzebny - zmienia sie dynamicznie
        } else {
            this.bidValue.value = '';
            this.bidValue.placeholder = 'Wrong Bid !';
            this.accountValue.textContent =  `${this.accountMoney}$`;
            return {}
        }
    }    

    startListener(){
        this.resetBtn = document.querySelector('.statistics__reset-game').addEventListener('click', () => {
            this.resetGame();
            this.statsPanel.classList.toggle('statistics--show');
            this.statsBtnText.classList.toggle('statistics__btn-text--hide');
        });
        this.statsBtn.addEventListener('click', () => {
            this.statsPanel.classList.toggle('statistics--show');
            this.statsBtnText.classList.toggle('statistics__btn-text--hide');
        });
        this.bidValue.addEventListener('input', () => this.refreshAccountValue());
        this.playButton.addEventListener('click', () => this.play());
    }

    renderHistoryCard(){
        if(this.stats.historyCards.length === 0 || this.statsHeight >= this.stats.historyCards[this.stats.countCards].offsetHeight*0.5){
            let { historyCard, newDot } = this.stats.createHistoryCard();
            this.statsSlider.appendChild(historyCard);
            this.dots.appendChild(newDot);
            this.stats.countCards++;
            
            newDot.addEventListener('click', () => {
                this.statsSlider.style.left = `-${newDot.dataset.number * 100}%`;
                [...this.dots.children].forEach(dot => dot.classList.remove('active'));
                newDot.classList.add('active');
            } )
        }
    }

    ckeckCardHeight(){
        this.statsHeight = 0;
        [...this.stats.historyCards[this.stats.countCards].children].forEach( stat =>  this.statsHeight += stat.offsetHeight);
        this.statsHeight += this.stats.historyCards[0].firstChild.offsetHeight;

    }
};