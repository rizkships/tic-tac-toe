const startButton = document.getElementById('start-button')
const restartButton = document.getElementById('restart-button');

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

    if (checkForWin(Gameboard.getGameboard(), players[currentPlayerIndex].marker)) {
        gameOver = true;
        alert(`${players[currentPlayerIndex].name} won!`)
    } else if (checkForTie(Gameboard.getGameboard())) {
        gameOver = true
        alert(`It's a tie!`)
    }

    

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

const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  function checkForWin(board, marker) {
    // Iterate through each win condition (e.g., rows, columns, diagonals)
    for (const condition of winConditions) {
      // Destructure the current win condition into three indices
      const [a, b, c] = condition;
  
      // Check if the board has the same marker (X or O) at the specified indices
      if (board[a] === marker && board[b] === marker && board[c] === marker) {
        return true; // If all three squares have the same marker, the player has won
      }
    }
  
    // If no win condition is met, return false (no win)
    return false;
  }

  function checkForTie(board) {
    return board.every(cell => cell !== "")
  }


restartButton.addEventListener('click', () => {
    Game.restart()
})