import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  //const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = derivedActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner;
  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareMark =
      gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareMark =
      gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareMark =
      gameBoard[combinations[2].row][combinations[2].column];

    if (
      firstSquareMark &&
      firstSquareMark === secondSquareMark &&
      firstSquareMark === thirdSquareMark
    ) {
      winner = firstSquareMark;
    }
  }

  function handleSelectSquare(rowIndex, markIndex) {
    //setActivePlayer((currPlayer) => (currPlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      // let currentPlayer = "X";
      // if (prevTurns.length > 0 && prevTurns[0].player === "X") {
      //   currentPlayer = "O";
      // }
      const currentPlayer = derivedActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: markIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Kofi"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Ama"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {winner && <p> You won, {winner}!</p>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
