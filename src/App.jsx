import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare() {
    setActivePlayer((currPlayer) => (currPlayer === "X" ? "0" : "X"));
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
            isActive={activePlayer === "0"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerMark={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
