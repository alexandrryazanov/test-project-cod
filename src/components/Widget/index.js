import React from "react";
import { Header, NoChart, WidgetWrapper } from "./units";
import * as WidgetComponents from "../WidgetComponents";

const Widget = ({ title, type, data = [] }) => {
    const Content = WidgetComponents[type] || NoChart;

    return title ? (
        <WidgetWrapper>
            <Header>{title}</Header>
            <Content {...{ data }} />
        </WidgetWrapper>
    ) : null;
};

export default Widget;
