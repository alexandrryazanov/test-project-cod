import styled from "@emotion/styled";
import { ArrowDropDown } from "@material-ui/icons";
import { css } from "@emotion/react";

export const SelectWithDropdown = styled.div`
    position: relative;
`;
export const SelectWrapper = styled.div`
    width: 100%;
    height: 50px;
    max-width: 250px;
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 15px;
    align-items: center;
`;

export const Arrow = styled(ArrowDropDown)`
    margin-left: -40px;
    cursor: pointer;
    &:hover {
        color: orange;
    }
    &:active {
        transform: scale(0.9);
    }
    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(-90deg);
        }
        100% {
            transform: rotate(-180deg);
        }
    }

    ${({ rotate }) =>
        rotate &&
        css`
            animation: rotation 0.3s linear;
            transform: rotate(-180deg);
        `}
`;
