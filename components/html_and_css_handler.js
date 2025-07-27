export default class HtmlAndCssHandler {
    constructor(startButtonsCallback) {
        this.startButtonsText = "Start"
        this.startButtonsCallback = startButtonsCallback
    }
    setTitle() {
        document.title = "Classic Snake 2D"
    }
    attachCSS() {
        const style = document.createElement("style")
        style.innerHTML = `
            body {
                background: #0f0f0f;
            }
            #game-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 120px;
                /* position: relative; */
            }
            #start-button {
                /* position: absolute;
                top: 50%;
                left: 50%; */
            }
            #moniter {
                display: flex;
                border: white 4px solid;
            }
            #score {
                color: #fff;
                font-size: 25px;
            }
        `
        document.head.appendChild(style)
    }
    attachHTML() {
        const root = document.createElement('div')
        const gamesContainerDiv = document.createElement('div')
        gamesContainerDiv.setAttribute('id', "game-container")

        const startButton = document.createElement('button')
        startButton.setAttribute('id', 'startButton')
        startButton.innerHTML = this.startButtonsText
        gamesContainerDiv.appendChild(startButton)
        const score = document.createElement('div')
        score.setAttribute('id', 'score')
        gamesContainerDiv.appendChild(score)
        const moniter = document.createElement('div')
        moniter.setAttribute('id', 'moniter')
        gamesContainerDiv.appendChild(moniter)

        root.setAttribute('id', 'root')
        root.appendChild(gamesContainerDiv)

        document.body.appendChild(root)
    }
    attachStartButtonsEventHandler() {
        startButton.addEventListener('click', this.startButtonsCallback)
    }
    main() {
        this.setTitle()
        this.attachCSS()
        this.attachHTML()
        this.attachStartButtonsEventHandler()
    }
}