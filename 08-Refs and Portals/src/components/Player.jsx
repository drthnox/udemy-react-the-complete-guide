import { useState } from "react";

export default function Player() {
    const [name, setName] = useState('');
    const [nameSubmitted, setNameSubmitted] = useState(false);

    function handleChange(event) {
        let name = event.target.value;
        setName(name);
    }

    function handleClick() {
        setNameSubmitted(true);
    }


    return (
        <section id="player">
            <h2>Welcome {nameSubmitted ? name : 'Stranger'}</h2>
            <p>
                <input type="text" onChange={handleChange} value={name} />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}
