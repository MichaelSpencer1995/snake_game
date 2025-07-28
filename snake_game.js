import HtmlAndCssHandler from './components/html_and_css_handler.js'


export default class SnakeGame {
    constructor(dimensions) {
        this.htmlAndCssHandler = new HtmlAndCssHandler(dimensions[0], dimensions[1], () => this.startGame())
        this.matrix = []
    }
    nextFrame() {
        console.log('frame counter')
    }
    startGame() {
        setInterval(() => {
            this.nextFrame()
        }, 150)
    }
    main() {
        this.matrix = this.htmlAndCssHandler.main()
    }
}