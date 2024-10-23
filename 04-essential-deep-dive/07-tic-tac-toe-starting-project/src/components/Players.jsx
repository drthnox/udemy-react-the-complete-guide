import { Player } from './Player.jsx';

export function Players({ player1, player2, player1_symbol, player2_symbol }) {
    return (
        <ol id="players">
            <li>
                <Player initialName={player1} symbol={player1_symbol} />
            </li>
            <li>
                <Player initialName={player2} symbol={player2_symbol} />
            </li>
        </ol>
    );
}
