import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Kofi" symbol="X" />
          <Player initialName="Ama" symbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
