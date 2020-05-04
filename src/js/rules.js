export default class Rules{
    static checkWin(options){
        let win = 0;
        let uniqueColors = [... new Set(options)];
        for(let i=0; i < uniqueColors.length; i++){
            let sameColor = options.filter(color => {
                return color === uniqueColors[i]
                })
                if(sameColor.length === 3){
                    win += 1.2
                } else if(sameColor.length === 4){
                    win += 1.5
                } else if(sameColor.length === 5){
                    win += 2
                } else if(sameColor.length === 6){
                    win += 3
                }
            }
            console.log(win);
            return win;
        }
}