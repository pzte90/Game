import { drawColors } from './draw.js';
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
        this.slider = document.querySelector('.statistics__container-slider');
        this.dots = document.querySelector('.statistics__container-dots');

        this.stats = new Statistics();
        this.startListener();
        this.renderColors();
        
        this.throttle = false;
        this.actuallHistoryCard;
    }


    play(){
        if(this.bidValue.value && !this.throttle){
            this.throttle = true;
            const colors = this.renderColors();
            const bonus = checkWin(colors);
            this.stats.countGames(bonus);

            let { games, wins, loses } = this.stats.gameStats;
            this.gameCount.textContent = games;
            this.wins.textContent = wins;
            this.loses.textContent = loses;
            
            const { temporaryAccountValue, bid } = this.refreshAccountValue();
            const moneyWon = bid * bonus;
            
            this.accountValue.textContent = `${temporaryAccountValue + moneyWon}$`;
            this.accountMoney = parseInt(this.accountValue.textContent);

            if(this.stats.countStatsLines >= this.stats.heightRatio){
                let { historyCard, historyDot } = this.stats.createHistoryCard()
                this.slider.appendChild(historyCard);
                this.dots.appendChild(historyDot)
                this.actuallHistoryCard = historyCard
            }

            this.actuallHistoryCard.appendChild(this.stats.renderStatsLine(bid, bonus, moneyWon, 0, this.accountMoney));
            this.stats.heightRatio = Math.floor(this.actuallHistoryCard.offsetHeight/this.actuallHistoryCard.children[0].offsetHeight)
     
            if(bonus){
                this.score.textContent = `+ ${moneyWon} $`;
                this.score.classList.add('score--win');
            } else{
                this.score.textContent = `- ${bid} $`;
                this.score.classList.add('score--lose');
            }

            setTimeout(() => {
                this.score.classList.remove('score--win', 'score--lose');
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
        let colors = drawColors(this.cards);
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
        this.slider.textContent = '';
        this.slider.style.left = '0';
        this.stats.countStatsLines = 0;
        this.stats.heightRatio = 0;
    }
    
    refreshAccountValue(){
        let bid = parseInt(this.bidValue.value, 10);
        if(bid <= this.accountMoney && bid > 0){
            let temporaryAccountValue = this.accountMoney - bid;
            this.accountValue.textContent = `${temporaryAccountValue}$`;
            return { temporaryAccountValue, bid }
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
        this.dots.addEventListener('click', (e)=> {
            if(e.target.classList.contains('dot')){
                [...this.dots.children].forEach(dot => dot.classList.remove('active'))
                this.slider.style.left = `-${e.target.dataset.number * 100}%`;
                e.target.classList.add('active')
            }
        })
        this.bidValue.addEventListener('input', () => this.refreshAccountValue());
        this.playButton.addEventListener('click', () => this.play());
    }
};