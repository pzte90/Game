export default class Draw{
    constructor(){
        this.options = ['blue', 'red', 'white'];
    }
    drawColors(cards){
        let colors = cards.map( card => {
            let randomColor = Math.floor(Math.random() * this.options.length);
            return this.options[randomColor]
        })
        return colors
    }
}