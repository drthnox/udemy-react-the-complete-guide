import { useState } from "react";

export function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
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
        <>
            <span className="player">
                {playerField}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </>
    );
}
4
