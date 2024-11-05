import { Player } from './components/Player.jsx'
import { GameBoard } from './components/GameBoard.jsx';
import { useState } from 'react';
import { Log } from './components/Log.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import { GameOver } from './components/GameOver.jsx';

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

function deriveWinner(gameBoard, players) {
    let winner = null;
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquare = gameBoard[combination[0].row][combination[0].col];
        const secondSquare = gameBoard[combination[1].row][combination[1].col];
        const thirdSquare = gameBoard[combination[2].row][combination[2].col];
        if (firstSquare && secondSquare && thirdSquare && firstSquare === secondSquare && secondSquare === thirdSquare) {
            winner = players[firstSquare];
        }
    }
    return winner;
}

function App() {
    const [players, setPlayers] = useState({ X: 'Player 1', O: 'Player 2' });
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = getCurrentPlayer(gameTurns);

    const gameBoard = [...initialGameBoard.map((array) => [...array])];

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }

    let player1_active = activePlayer === 'X';
    let player2_active = activePlayer === 'O';
    let winner = null;
    if (gameTurns.length > 2) {
        winner = deriveWinner(gameBoard, players);
    }

    // draw if winner is null and 9 turns have elapsed
    let hasDraw = false;
    if (!winner && gameTurns.length === 9) {
        hasDraw = true;
    }

    function handleSelectRematch() {
        setGameTurns([]);
    }

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns(prevTurns => {
            let currentPlayer = getCurrentPlayer(prevTurns);
            const currentTurn = { square: { row: rowIndex, col: colIndex }, player: currentPlayer };
            return [currentTurn, ...prevTurns];
        });
    }

    function handlePlayerNameChange(symbol, newPlayerName) {
        setPlayers(
            prevPlayers => {
                return {
                    ...prevPlayers,
                    [symbol]: newPlayerName
                };
            }
        );
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <li className={player1_active ? 'active' : ''}>
                        <Player initialName="Player 1" isActive={player1_active} onPlayerNameChange={handlePlayerNameChange} />
                    </li>
                    <li className={player2_active ? 'active' : ''}>
                        <Player initialName="Player 2" isActive={player2_active} onPlayerNameChange={handlePlayerNameChange} />
                    </li>
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
            </div>
            {(winner || hasDraw) && <GameOver winner={winner} handleRematch={handleSelectRematch} />}
            <Log turns={gameTurns} />
        </main>
    );
}

export default App
