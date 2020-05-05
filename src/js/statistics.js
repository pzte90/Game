export default class Statistics {
    constructor(){
        this.gameStats = [
            {
                games: 0,
                wins: 0,
                loses: 0,
            },
        ]
        this.gameHistory = []
    }
    countMoney(accountValue, bid){
        let temporaryAccountValue = accountValue - bid;
        return temporaryAccountValue;
    }
    countGames(win){
        this.gameStats[0].games ++
        win ? this.gameStats[0].wins++ : this.gameStats[0].loses++;
    }
    collectHistroy(games = 0, wins = 0, loses = 0, bid = 0, bonus = 0, moneyWin = 0, moneyLose = 0 , accountValue = 0){
        bonus ? bonus : moneyLose = bid;

        let history = {
            games: games,
            wins: wins,
            loses: loses,
            bid: bid,
            bonus: bonus,
            moneyWin: moneyWin,
            moneyLose: moneyLose,
            accountValue: accountValue,
        }
        
        this.gameHistory.push(history)
    }
}