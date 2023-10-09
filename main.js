const gameBoard = (function () {
   // represent Gameboard as a 2D array
  const  board = [
        ["X", "", ""],
        ["", "O", ""],
        ["", "", ""]
    ]
return { board }
})();

const Player = (name, marker) => {

    return {name, marker}
}

const player1 = Player("Omar", "X")
const computer = Player("Computer", "O")

console.log(player1.name)

const displayController = (function() {
    // render the contents of the gameBoard array to the webpage 
    const gameBoardContainer = document.getElementById("game-board")

    function renderGameBoard() {
        // clear any previous content in the container 
        gameBoardContainer.textContent = ""

        // loop through the gameBoard array 
        for (let row = 0; row < gameBoard.board.length; row++){
            for (let col = 0; col < gameBoard.board[row].length; col++) {
                const cell = document.createElement("div")
                cell.classList.add("cell")
                cell.textContent = gameBoard.board[row][col]

                // add event listeners to cells for player moves here

                gameBoardContainer.appendChild(cell)

            }
        }

        
    }
    // expose the renderGameBoard function 
    return { renderGameBoard }

})()

renderGameBoard()