import React from "react";
import { ListWrapper } from "./units";
import Item from "./Item";

const GoodsList = () => {
    return (
        <ListWrapper>
            <h2>Список товаров</h2>
            <Item title={"Товар1"} count={1} />
            <Item title={"Товар2"} count={2} />
            <Item title={"Товар3"} count={15} />
            <Item title={"Товар4"} count={4} />
        </ListWrapper>
    );
};

export default GoodsList;
