import React from "react";
import Button from "../../Button";
import { ActionsWrapper } from "./units";
import { AddCircleOutline, AddShoppingCart } from "@material-ui/icons";

const Actions = () => {
    return (
        <ActionsWrapper>
            <Button startIcon={<AddCircleOutline />}>Создать заказ</Button>
            <Button startIcon={<AddShoppingCart />} color={"secondary"}>
                Добавить товар
            </Button>
        </ActionsWrapper>
    );
};

export default Actions;
