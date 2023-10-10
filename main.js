const startButton = document.getElementById('start-button')

startButton.addEventListener("click", ()=>{
    Game.start();;
})
const Game = (() => {
    let players = []
    let currentPlayerIndex;
    let gameOver;

const start = () => {
     players = [
        createPlayer(document.getElementById('player1').value, "X"),
        createPlayer(document.getElementById('player2').value, "O")

    ]
    currentPlayerIndex = 0;
    gameOver = false;
    Gameboard.render();
}
return {
    start
}
})()



const createPlayer = (name, marker) => {

    return {name, marker}
}


const Gameboard = (() => {
    let gameboard = ["","","","","","","","",""]

    const render = () => {
        let boardHTML = ""
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square}</div>`
        })

        document.getElementById('gameboard').innerHTML = boardHTML

    }
    return {
      
        render,
    }

})();
