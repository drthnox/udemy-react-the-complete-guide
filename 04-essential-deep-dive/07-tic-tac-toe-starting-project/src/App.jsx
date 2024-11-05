import { Player } from './components/Player.jsx'
import { GameBoard } from './components/GameBoard.jsx';
import { useState } from 'react';
import { Log } from './components/Log.jsx';

function App() {

    const player1_symbol = 'X';
    const player2_symbol = 'O';

    const [activePlayer, setActivePlayer] = useState(player1_symbol);
    const [gameTurns, setGameTurns] = useState([]);

    let player1_active = activePlayer === player1_symbol;
    let player2_active = activePlayer === player2_symbol;

    function handleSelectSquare(rowIndex, colIndex) {
        console.log("handleSelectSquare:rowIndex = " + rowIndex + ", colIndex = " + colIndex);
        setActivePlayer((currentActivePlayer) => currentActivePlayer === player1_symbol ? player2_symbol : player1_symbol);
        setGameTurns(prevTurns => {
            let currentPlayer = getCurrentPlayer(prevTurns);
            const currentTurn = { square: { row: rowIndex, col: colIndex }, player: currentPlayer };
            return [currentTurn, ...prevTurns];
        });

        function getCurrentPlayer(prevTurns) {
            const lastTurn = prevTurns.length > 0 ? prevTurns[0].player : player1_symbol;
            let currentPlayer = player1_symbol;
            if (lastTurn === player1_symbol) {
                currentPlayer = player2_symbol;
            }
            return currentPlayer;
        }
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
                <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App
