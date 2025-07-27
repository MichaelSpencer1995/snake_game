export default class Moniter {
    constructor(gameSize, pixelSize) {
        this.gameSize = gameSize
        this.pixelSize = pixelSize
        this.matrix = []
    }

    main() {
        if(this.gameSize < 7 || this.gameSize > 31 || this.gameSize % 2 == 0) {
            console.error('invalid gameboard size, gameboard size must an odd numbered integer between 7 and 31')
            return
        }
        for(let i = 0; i < this.gameSize; i++) {
        let pixelRowContainer = document.createElement('div')
        this.matrix.push([])
            for(let j = 0; j < this.gameSize; j++) {
                let pixel = document.createElement('div')
                pixel.style.width = this.pixelSize + "px"
                pixel.style.height = this.pixelSize + "px"
                pixel.style.border = "white 1px solid"
                pixelRowContainer.appendChild(pixel)

                this.matrix[i].push({
                    color: null
                })
            }
            moniter.appendChild(pixelRowContainer)
        }
    }
}