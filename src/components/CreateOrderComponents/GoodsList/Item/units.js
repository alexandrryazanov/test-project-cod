import styled from "@emotion/styled";
import { HighlightOff } from "@material-ui/icons";

export const ItemWrapper = styled.div`
    display: flex;
    margin-bottom: 5px;
    width: 250px;
    padding: 15px;
    align-items: center;
    box-shadow: 0 0 10px lightgray;
    justify-content: space-between;
`;

export const ControlsWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const GoodTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-right: 15px;
`;

export const Count = styled.input`
    width: 25px;
    margin-right: 15px;
    text-align: right;
`;

export const DeleteIcon = styled(HighlightOff)`
    cursor: pointer;
    color: red;
    &:hover {
        transform: scale(1.1);
    }
    &:active {
        transform: scale(0.9);
    }
`;
