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

    const getGameboard = () => gameboard

    return {
      
        render,
        update,
        getGameboard
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
    if (Gameboard.getGameboard()[index] !== "")
        return;

    Gameboard.update(index, players[currentPlayerIndex].marker)

    

    currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
}

const restart = () => {
    for (let i = 0; i < 9; i++){
        Gameboard.update(i, "");
    }
    Gameboard.render()
}
return {
    start,
    handleClick,
    restart
}
})()

const restartButton = document.getElementById('restart-button');

restartButton.addEventListener('click', () => {
    Game.restart()
})