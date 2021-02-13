import React from "react";
import Widget from "../components/Widget";
import { MainPageWrapper } from "../components/MainPageComponents/units";
import {
    comeFrom,
    expensesInDay,
    lastOrders,
    ordersCount,
} from "../tempData/charts";

const MainPage = () => {
    return (
        <MainPageWrapper>
            <Widget type={"Line"} title={"Кол-во заказов"} data={ordersCount} />
            <Widget type={"Pie"} title={"Откуда пришли"} data={comeFrom} />
            <Widget type={"Line"} title={"По дням"} data={expensesInDay} />
            <Widget type={"Table"} title={"Послед. заказы"} data={lastOrders} />
            <Widget />
            <Widget type={"Actions"} title={"Быстрые действия"} />
            <Widget />
            <Widget />
            <Widget />
        </MainPageWrapper>
    );
};

export default MainPage;
