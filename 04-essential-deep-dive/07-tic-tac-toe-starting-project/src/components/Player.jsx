import { useState } from "react";

export function Player({ initialName, symbol, isActive, onPlayerNameChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            console.log('setting new name for Player:playerName = ' + playerName);
            onPlayerNameChange(symbol, playerName);
        }
    }

    function handlePlayerNameChange(event) {
        setPlayerName(event.target.value);
    }

    let playerField = <span className="player-name">{playerName}</span>

    if (isEditing) {
        playerField = (
            <input
                type="text"
                required
                value={playerName}
                onChange={handlePlayerNameChange}
            />
        );
    }

    return (
        <div className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerField}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </div>
    );
}
4
