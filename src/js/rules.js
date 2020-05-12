const checkWin = (colors) => {
    let win = 0;
    [...new Set(colors)].forEach(uniqueColor => {
        let winColors = colors.filter(color => {
            return color === uniqueColor
        })
        if(winColors.length === 3){
            win += 1
        } else if(winColors.length === 4){
            win += 2
        } else if(winColors.length === 5){
            win += 3
        } else if(winColors.length === 6){
            win += 4
        }
    })
    return win
}


export { checkWin };