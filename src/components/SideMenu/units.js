import styled from "@emotion/styled";

export const SideMenuWrapper = styled.div`
    width: 80px;
    height: calc(100vh - 70px);
    box-shadow: 0 5px 10px lightgray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5px;
    box-sizing: border-box;

    & a {
        text-decoration: none;
        color: black;
    }

    & .active {
        color: orange;
        font-weight: bold;
    }
`;
