import { Player } from './components/Player.jsx'
import { GameBoard } from './components/GameBoard.jsx';
import { useState } from 'react';
import { Log } from './components/Log.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';

const player1_symbol = 'X';
const player2_symbol = 'O';


const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


function getCurrentPlayer(gameTurns) {
    let currentPlayer = player1_symbol
    if (gameTurns.length > 0 && gameTurns[0].player == player1_symbol) {
        currentPlayer = player2_symbol;
    }
    return currentPlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = getCurrentPlayer(gameTurns);

    const gameBoard = initialGameBoard;

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }

    let player1_active = activePlayer === player1_symbol;
    let player2_active = activePlayer === player2_symbol;

    if (gameTurns.length > 2) {
        for (const combination of WINNING_COMBINATIONS) {
            const firstSquare = combination[0];
            const secondSquare = combination[1];
            const thirdSquare = combination[2];
        }
    }
    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns(prevTurns => {
            let currentPlayer = getCurrentPlayer(prevTurns);
            const currentTurn = { square: { row: rowIndex, col: colIndex }, player: currentPlayer };
            return [currentTurn, ...prevTurns];
        });
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
                <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App
