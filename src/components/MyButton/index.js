import styled from "@emotion/styled";

const MyButton = styled.button`
    height: 40px;
    border-radius: 10px;
    background-color: ${(props) => props.color || "orange"};
    outline: none;
    cursor: pointer;
    margin: 5px;

    &:hover {
        opacity: 0.5;
    }

    &:active {
        box-shadow: 0 0 10px lightgray;
    }
`;

export default MyButton;
