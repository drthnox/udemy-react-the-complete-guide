import { Header } from "./components/Header.jsx";
import { UserInput } from "./components/UserInput.jsx";
import { Results } from "./components/Results.jsx";
import { useState } from "react";

function App() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1000,
        expectedReturn: 10,
        duration: 12
    });

    function handleUserInputChange(inputIdentifier, newValue) {
        console.log('handleUserInputChange:inputIdentifier = ' + inputIdentifier + ', newValue = ' + newValue);
        setUserInput((prevUserInput) => {
            return ({
                ...prevUserInput,
                [inputIdentifier]: +newValue
            });
        });
    }

    const isValidInput = userInput.duration > 0 && userInput.initialInvestment > 0 && userInput.annualInvestment > 0 && userInput.expectedReturn > 0;

    return (
        <>
            <Header />
            <UserInput onInputChange={handleUserInputChange} userInput={userInput} />
            {!isValidInput && (<p>Please enter valid values</p>)}
            {isValidInput && <Results userInput={userInput} />}
        </>
    );
}

export default App
