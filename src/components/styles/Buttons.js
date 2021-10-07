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
    background-color: lightblue;
    border: bold;;
    color: brown;

    &:hover {
    background-color: orange;
}
`;

export default PrimaryButton;