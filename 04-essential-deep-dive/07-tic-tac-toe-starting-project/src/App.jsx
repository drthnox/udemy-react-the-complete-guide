import { Player } from './components/Player.jsx'
import { GameBoard } from './components/GameBoard.jsx';
import { useState } from 'react';

function App() {

    const player1_symbol = 'X';
    const player2_symbol = 'O';

    const [activePlayer, setActivePlayer] = useState(player1_symbol);

    let player1_active = activePlayer === player1_symbol;
    let player2_active = activePlayer === player2_symbol;

    function handleSelectSquare() {
        setActivePlayer((currentActivePlayer) => currentActivePlayer === player1_symbol ? player2_symbol : player1_symbol);
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <li className={player1_active ? 'active' : ''}>
                        <Player initialName="Player 1" symbol={player1_symbol} isActive={player1_active} />
                    </li>
                    <li className={player2_active ? 'active' : ''}>
                        <Player initialName="Player 2" symbol={player2_symbol} isActive={player2_active} />
                    </li>
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
            </div>
        </main>
    );
}

export default App
