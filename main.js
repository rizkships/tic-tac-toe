const Gameboard = (function () {
   // represent Gameboard as a 2D array
    board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]

})();

const Player = (name, marker) => {

    return {name, marker}
}

const player1 = Player("Omar", "X")
const computer = Player("Computer", "O")

console.log(player1.name)