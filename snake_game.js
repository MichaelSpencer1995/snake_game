import Moniter from './components/moniter.js'
import HtmlAndCssHandler from './components/html_and_css_handler.js'


export default class SnakeGame {
    constructor(dimensions) {
        this.htmlAndCssHandler = new HtmlAndCssHandler(this.startGame)
        this.moniter = new Moniter(dimensions[0], dimensions[1])
    }
    startGame() {
        console.log('does this work ahhh')
    }
    main() {
        this.htmlAndCssHandler.main()
        this.moniter.main()
    }
}