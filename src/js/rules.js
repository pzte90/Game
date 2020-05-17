const checkWin = (colors) => {
    return [...new Set(colors)].reduce((total, currColor) => {
        let winColors = colors.filter(color => color === currColor);
        switch(winColors.length){
            case 3:
                return total + 1
            case 4:
                return total + 2
            case 5:
                return total + 3
            case 6:
                return total + 4
            default:
                return total
        }
    }, 0)
}

export { checkWin };