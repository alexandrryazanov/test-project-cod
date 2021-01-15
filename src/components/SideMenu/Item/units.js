import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
    user-select: none;
`;

export const ItemText = styled.div`
    font-size: 12px;
`;
