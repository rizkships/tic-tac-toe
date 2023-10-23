

const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
let game;

startButton.addEventListener("click", ()=>{
    game = new Game();
    game.start();
})

restartButton.addEventListener('click', () => {
    if (game) {
    game.restart()
    };
})


class Player {
    constructor(name, marker) {
        this.name = name;
        this.marker = marker;
    };
}



class DisplayController {
     renderMessage(message) {
        document.getElementById("message").innerHTML = message;
    }

    clearMessage() {
        document.getElementById('message').innerHTML = "";
      }
}

class Gameboard {
    constructor(handleClick) {
      this.gameboard = ["", "", "", "", "", "", "", "", ""];
      this.handleClick = handleClick;
    }
  
    render() {
      let boardHTML = "";
      this.gameboard.forEach((square, index) => {
        boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
      });
  
      document.getElementById('gameboard').innerHTML = boardHTML;
      const squares = document.querySelectorAll(".square");
      squares.forEach((square, index) => {
        square.addEventListener("click", () => this.handleClick(index));
      });
    }
  
    update(index, value) {
      this.gameboard[index] = value;
      this.render();
    }
  
    getGameboard() {
      return this.gameboard;
    }
  
    reset() {
      this.gameboard = ["", "", "", "", "", "", "", "", ""];
      this.render();
    }
  }


    class Game {
        constructor() {
          this.players = [];
          this.currentPlayerIndex = 0;
          this.gameOver = false;
          this.gameboard = new Gameboard(this.handleSquareClick.bind(this));
          this.displayController = new DisplayController();
        }
      
        start() {
          this.players = [
            new Player(document.getElementById('player1').value, "X"),
            new Player(document.getElementById('player2').value, "O")
          ];
          this.currentPlayerIndex = 0;
          this.gameOver = false;
          this.gameboard.render();
        }
      
        handleSquareClick(index) {
          if (this.gameOver) return;
          if (this.gameboard.getGameboard()[index] !== "") return;
      
          this.gameboard.update(index, this.players[this.currentPlayerIndex].marker);
      
          if (this.checkForWin()) {
            this.gameOver = true;
            this.displayController.renderMessage(`${this.players[this.currentPlayerIndex].name} won!`);
          } else if (this.checkForTie()) {
            this.gameOver = true;
            this.displayController.renderMessage(`It's a tie!`);
          }
      
          this.currentPlayerIndex = this.currentPlayerIndex === 0 ? 1 : 0;
        }
      
        checkForWin() {
          const board = this.gameboard.getGameboard();
          const marker = this.players[this.currentPlayerIndex].marker;
      
          for (const condition of winConditions) {
            const [a, b, c] = condition;
            if (board[a] === marker && board[b] === marker && board[c] === marker) {
              return true;
            }
          }
          return false;
        }
      
        checkForTie() {
          return this.gameboard.getGameboard().every(cell => cell !== "");
        }
      
        restart() {
          this.gameboard.reset();
          this.gameOver = false;
          this.displayController.clearMessage();
        }
      }
      



const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  function checkForWin(board, marker) {
    // Iterate through each win condition (e.g., rows, columns, diagonals)
    for (const condition of winConditions) {
      // Destructure the current win condition into three indices$
      const [a, b, c] = condition;
  
      // Check if the board has the same marker (X or O) at the specified indices
      if (board[a] === marker && board[b] === marker && board[c] === marker) {
        return true; // If all three squares have the same marker, the player has won
      };
    };
  
    // If no win condition is met, return false (no win)
    return false;
  }

  function checkForTie(board) {
    return board.every(cell => cell !== "");
  }


  // const gameboard = new Gameboard();
  













/*
const createPlayer = (name, marker) => {

    return {name, marker}
}
*/

/*
const displayController = (() => {
    const renderMessage = (message) => {
        document.getElementById('message').innerHTML = message
    }
    return {
        renderMessage
    }
})()

*/

/*
const handleClick = (event) => {
    if (gameOver){
        return;
    }
    let index = parseInt(event.target.id.split("-")[1])
    // prevent player from clicking on same cell twice
    if (Gameboard.getGameboard()[index] !== "")
        return;

    Gameboard.update(index, players[currentPlayerIndex].marker)

    if (checkForWin(Gameboard.getGameboard(), players[currentPlayerIndex].marker)) {
        gameOver = true;
        displayController.renderMessage(`${players[currentPlayerIndex].name} won!`)
      
    } else if (checkForTie(Gameboard.getGameboard())) {
        gameOver = true
        displayController.renderMessage(`It's a tie!`)
    }

    

    currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
}
*/


/*
const Gameboard = (() => {
    let gameboard = ["","","","","","","","",""]

    const render = () => {
        let boardHTML = ""
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square}</div>` // the value from gameboard[index] is fed into square 
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



const restart = () => {
    for (let i = 0; i < 9; i++){
        Gameboard.update(i, "");
    }
    Gameboard.render()
    gameOver = false;
    document.getElementById(message).innerHTML = ""

}
return {
    start,
    handleClick,
    restart
}
})()

*/
