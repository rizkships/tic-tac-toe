const startButton = document.getElementById('start-button')

startButton.addEventListener("click", ()=>{
    Game.start();;
})


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
        const squares = document.querySelectorAll(".square")
        squares.forEach((square) => {
            square.addEventListener("click", Game.handleClick)
        })
        
    }

    const update = (index, value) => {
        gameboard[index] = value;
        render();
    }

    return {
      
        render,
        update
    }

})();

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
    const squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.addEventListener("click", handleClick)
    })
}

const handleClick = (event) => {
    let index = parseInt(event.target.id.split("-")[1])
    Gameboard.update(index, players[currentPlayerIndex].marker)

    currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
}
return {
    start,
    handleClick
}
})()