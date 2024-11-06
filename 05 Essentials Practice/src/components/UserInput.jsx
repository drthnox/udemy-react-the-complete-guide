import { useState } from "react";

export function UserInput() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0
    });

    function handleUserInputChange({ inputIdentifier, newValue }) {
        setUserInput((prevUserInput) => {
            return ({
                ...prevUserInput,
                [inputIdentifier]: newValue
            });
        });
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={userInput.initialInvestment} onChange={(event) => handleUserInputChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={userInput.annualInvestment} onChange={(event) => handleUserInputChange('annualInvestment', event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={userInput.expectedReturn} onChange={(event) => handleUserInputChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={userInput.duration} onChange={(event) => handleUserInputChange('duration', event.target.value)} />
                </p>
            </div>
        </section>
    );
}
