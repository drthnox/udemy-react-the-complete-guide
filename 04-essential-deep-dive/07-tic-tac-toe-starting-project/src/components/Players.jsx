import { Player } from './Player.jsx';

export function Players({ player1, player2, player1_symbol, player2_symbol, activePlayer }) {

    console.log('Players:activePlayer = ' + activePlayer);

    let player1_active = activePlayer === player1_symbol;
    let player2_active = activePlayer === player2_symbol;
    console.log('Players:player1_active = ' + player1_active);
    console.log('Players:player2_active = ' + player2_active);

    return (
        <ol id="players" className="highlight-player">
            <li className={player1_active ? 'active' : ''}>
                <Player initialName={player1} symbol={player1_symbol} isActive={player1_active} />
            </li>
            <li className={player2_active ? 'active' : ''}>
                <Player initialName={player2} symbol={player2_symbol} isActive={player2_active} />
            </li>
        </ol>
    );
}
