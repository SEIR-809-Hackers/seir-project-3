import styled from 'styled-components';

export const Button = styled.button`
    background-color: lightblue;
    padding: 10px 12px;
    font-size: 1rem;
    border-radius: 2px;
    min-width: 70px;
    cursor: pointer;
    font-family: 'Menlo', monospace;

`;

export const PrimaryButton = styled(Button)`
    background-color: white;
    opacity: 0.8;
    border: bold;
    color: brown;
    border-radius: 10%10px;

    &:hover {
    background-color: orange;
}
`;

export default PrimaryButton;