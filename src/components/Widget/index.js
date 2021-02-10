import React from "react";
import { Header, NoChart, WidgetWrapper } from "./units";
import * as Charts from "../WidgetComponents";

const Widget = ({ title, type, data }) => {
    const Chart = (data && Charts[type]) || NoChart;

    return title ? (
        <WidgetWrapper>
            <Header>{title}</Header>
            <Chart {...{ data }} />
        </WidgetWrapper>
    ) : null;
};

export default Widget;
