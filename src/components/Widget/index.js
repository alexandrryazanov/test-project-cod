import React from "react";
import { Header, WidgetWrapper } from "./units";
import Pie from "../Charts/Pie";

const Widget = () => {
    return (
        <WidgetWrapper>
            <Header>Widget</Header>
            <Pie />
        </WidgetWrapper>
    );
};

export default Widget;
