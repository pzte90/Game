const options = ['blue', 'red', 'white'];

const drawColors = (cards) => {
    let colors = cards.map( card => {
        let randomColor = Math.floor(Math.random() * options.length);
        return options[randomColor]
    })
    return colors
}

export { drawColors };