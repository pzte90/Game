export default class Statistics {
    constructor(){
        this.gameStats = {
                games: 0,
                wins: 0,
                loses: 0,
            };
        this.historyCards = [];
        this.countCards = -1;
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
        let historyCard = document.createElement('div');
        historyCard.classList.add('statistics__history');
        historyCard.style.left = `${(this.historyCards.length)*100}%`;
        const newDot = document.createElement('span');
        newDot.classList.add('dot');
        newDot.dataset.number = `${this.historyCards.length}`;
        this.historyCards.push(historyCard);
        if(newDot.dataset.number === '0'){
            newDot.classList.add('active');
        };
        return { historyCard, newDot }
    }

    showStats(bid, bonus, moneyWon, moneyLose, accountMoney){
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