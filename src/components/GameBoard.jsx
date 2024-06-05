import { useState } from "react";

export default function GameBoard({ onSelectSquare, board }) {
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
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerMark, markIndex) => (
              <li key={markIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, markIndex)}
                  disabled={playerMark !== null}
                >
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
