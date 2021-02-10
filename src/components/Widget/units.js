import styled from "@emotion/styled";
import React from "react";

export const WidgetWrapper = styled.div`
    width: 300px;
    height: 300px;
    background-color: white;
    box-shadow: 0 0 5px lightgray;
    padding: 20px;
`;

export const Header = styled.h2`
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 22px;
    margin-top: 0;
    margin-bottom: 15px;
`;

export const NoChart = () => {
    return <div>Нет такого графика или нет данных</div>;
};
