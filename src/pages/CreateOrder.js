import React from "react";
import {
    fieldWrapper,
    Header,
    OrderWrapper,
} from "../components/CreateOrderComponents/units";
import Field from "../components/Field";
import GoodsList from "../components/CreateOrderComponents/GoodsList";
import { goodsStore } from "../tempData/goods";

const CreateOrder = () => {
    return (
        <OrderWrapper>
            <Header>Создание нового заказа</Header>
            <Field
                placeholder={"Введите ФИО заказчика"}
                wrapperStyle={fieldWrapper}
            />
            <GoodsList goods={goodsStore} />
        </OrderWrapper>
    );
};

export default CreateOrder;
