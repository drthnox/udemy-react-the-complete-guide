import { Header } from "./components/Header.jsx";
import { UserInput } from "./components/UserInput.jsx";
import { Results } from "./components/Results.jsx";
import { useState } from "react";

function App() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0
    });

    function handleUserInputChange(inputIdentifier, newValue) {
        console.log('handleUserInputChange:inputIdentifier = ' + inputIdentifier + ', newValue = ' + newValue);
        setUserInput((prevUserInput) => {
            return ({
                ...prevUserInput,
                [inputIdentifier]: newValue
            });
        });
    }

    return (
        <>
            <Header />
            <UserInput onInputChange={handleUserInputChange} userInput={userInput} />
            <Results userInput={userInput} />
        </>
    );
}

export default App
