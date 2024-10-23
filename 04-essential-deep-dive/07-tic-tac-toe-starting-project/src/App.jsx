import { Players } from './components/Players.jsx'
import { GameBoard } from './components/GameBoard.jsx';

function App() {
    return (
        <main>
            <div id="game-container">
                <Players player1="Player 1" player2="Player 2" player1_symbol="X" player2_symbol="O" />
                <GameBoard />
            </div>

        </main>
    );
}

export default App
