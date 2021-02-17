import styled from "@emotion/styled";

export const DropdownWrapper = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    max-height: 200px;
    border: 1px solid lightgray;
    background-color: white;
    position: absolute;
    overflow-y: auto;
`;

export const DropdownItem = styled.div`
    padding: 15px;
    cursor: pointer;
    &:hover {
        background-color: lightgray;
    }
`;
