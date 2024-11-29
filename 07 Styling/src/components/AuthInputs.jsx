import { useState } from 'react';
import { styled } from 'styled-components';
import LabelledInput from './LabelledInput.jsx';


const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`;

const Button = styled.button`
    padding: 1rem 2rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 0.25rem;
    color: #1f2937;
    background-color: #f0b322;
    border-radius: 6px;
    border: none;

    &:hover {
        background-color: #f0920e;
    }
`;

const TextButton = styled.button`
    color: #f0b322;
    border: none;
    type: button;

    &:hover {
         color: #f0920e;
    }
`;

export default function AuthInputs() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleInputChange(identifier, value) {
        if (identifier === 'email') {
            setEnteredEmail(value);
        } else {
            setEnteredPassword(value);
        }
    }

    function handleLogin() {
        setSubmitted(true);
    }

    const emailNotValid = submitted && !enteredEmail.includes('@');
    const passwordNotValid = submitted && enteredPassword.trim().length < 6;

    return (
        <div id="auth-inputs">
            <ControlContainer>
                <LabelledInput
                    label="Email"
                    invalid={emailNotValid}
                    onChange={(event) => handleInputChange('email', event.target.value)}
                />
                <LabelledInput
                    label="Password"
                    invalid={passwordNotValid}
                    onChange={(event) => handleInputChange('password', event.target.value)}
                />
            </ControlContainer>
            <div className="actions">
                <TextButton>
                    Create a new account
                </TextButton>
                <Button onClick={handleLogin}>Sign In</Button>
            </div>
        </div>
    );
}
