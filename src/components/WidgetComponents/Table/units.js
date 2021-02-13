import styled from "@emotion/styled";

export const StyledTable = styled.table`
    font-size: 14px;
    border-collapse: collapse;
    width: 100%;
    box-shadow: 0 0 5px lightgray;
    background-color: rgb(255, 255, 255);
`;
export const StyledThead = styled.thead`
    font-weight: bold;
`;

export const StyledHeadRow = styled.tr`
    box-shadow: 0 0 1px lightgray;
`;

export const StyledRow = styled.tr`
    box-shadow: 0 0 1px lightgray;
    cursor: pointer;
    &:hover {
        background-color: rgb(240, 240, 240);
    }
`;

export const StyledColumn = styled.td`
    padding: 10px;
`;

export const StyledTbody = styled.tbody``;
