import { TabButton } from "./TabButton";

export function Tabs({ children, ButtonsContainer = 'menu', buttons }) {
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    );
}
