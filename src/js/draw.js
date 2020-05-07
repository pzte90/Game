export default class Draw{
    constructor(){
        this.options = ['blue', 'red', 'white'];
    }
    drawColors(cards){
        let colors = [];
        for(let i = 0; i < cards; i++ ){
            let randomColor = Math.floor(Math.random() * this.options.length);
            colors.push(this.options[randomColor]);
        }
        return colors
    }
    showWin(){
        
    }
}