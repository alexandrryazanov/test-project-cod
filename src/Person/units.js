import styled from "@emotion/styled";

export const PersonWrapper = styled.div`
    background-color: ${(props) =>
        props.bgColor !== undefined ? props.bgColor : "lightgray"};
    border-radius: 20px;
    width: 500px;
    padding: 20px;
    margin: 20px;
`;

export const Header = styled.h1`
    color: blue;
    font-size: 28px;
`;
