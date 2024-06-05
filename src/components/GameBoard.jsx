import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  /*const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleGamePosition(rowIndex, markIndex) {
    setGameBoard((prevGameBoard) => {
      const updateBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updateBoard[rowIndex][markIndex] = activePlayerMark;
      return updateBoard;
    });
    onSelectSquare();
  }*/
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerMark, markIndex) => (
              <li key={markIndex}>
                <button onClick={() => onSelectSquare(rowIndex, markIndex)}>
                  {playerMark}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
