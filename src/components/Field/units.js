import styled from "@emotion/styled";
import { Visibility, VisibilityOff } from "@material-ui/icons";

export const Input = styled.input`
    width: 100%;
    height: 100%;
    padding: 0 50px 0 15px;
    font-size: 1.2rem;
    border-radius: 5px;
    border: 2px solid lightgray;
    &::placeholder {
        color: lightgray;
        font-weight: 600;
    }

    &:focus {
        border-color: rgb(180, 180, 240);
    }

    border-color: ${({ error }) => (error ? "red" : "lightgray")};
    border-bottom-width: ${({ error }) => (error ? "2px" : "4px")};
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    height: 4rem;
    margin: 20px;
`;

export const OpenedEye = styled(Visibility)`
    margin-left: -40px;
    cursor: pointer;
`;
export const ClosedEye = styled(VisibilityOff)`
    margin-left: -40px;
    cursor: pointer;
`;
