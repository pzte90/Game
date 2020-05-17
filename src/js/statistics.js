export default class Statistics {
    constructor(){
        this.gameStats = {
                games: 0,
                wins: 0,
                loses: 0,
            };
        this.historyCards = [];
        this.countStatsLines = 0;
        this.heightRatio = 0;
    }

    countGames(win){
        this.gameStats.games = this.gameStats.games + 1;
        if(win){
            this.gameStats.wins = this.gameStats.wins + 1;
        } else{
            this.gameStats.loses = this.gameStats.loses + 1;
        }
    }

    createHistoryCard(){
            this.countStatsLines = 0;
            let historyCard = document.createElement('div');
            historyCard.classList.add('statistics__history');
            historyCard.style.left = `${(this.historyCards.length)*100}%`;
            const historyDot = document.createElement('span');
            historyDot.classList.add('dot');
            historyDot.dataset.number = `${this.historyCards.length}`;
            this.historyCards.push(historyCard);
            if(historyDot.dataset.number === '0'){
                historyDot.classList.add('active');
            }
            return { historyCard, historyDot }
    }

    renderStatsLine(bid, bonus, moneyWon, moneyLose, accountMoney){
        this.countStatsLines = this.countStatsLines + 1
        let newLine = document.createElement('p');
        newLine.classList.add('statistics__history-element');
        newLine.textContent = (`
        Games: ${this.gameStats.games} | 
        Wins: ${this.gameStats.wins} | 
        Loses: ${this.gameStats.loses} | 
        Bid: ${bid} | Bonus: ${bonus} | 
        Money won: ${moneyWon} | 
        Money Lose: ${bonus ? 0 : moneyLose = bid} | 
        Account Value: ${accountMoney}
        `);
        return newLine
    }













}