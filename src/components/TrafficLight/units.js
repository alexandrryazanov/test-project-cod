import styled from "@emotion/styled";

export const TrafficLightWrapper = styled.div`
    width: 150px;
    height: 450px;
    box-shadow: 0 5px 10px gray;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: gray;
`;

export const Light = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 100%;
    border: 2px solid lightgray;
    box-shadow: 0 0 10px black;
    background-color: ${({ isActive, color }) => (isActive ? color : "black")};

    transition: background-color ease-in-out 0.3s;
`;
