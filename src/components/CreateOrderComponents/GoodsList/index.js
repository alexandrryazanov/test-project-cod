import React from "react";
import { ListWrapper } from "./units";
import Item from "./Item";
import Select from "../../Select";

const GoodsList = ({ goods }) => {
    const preparedGoods = goods
        .filter((good) => good.count > 0)
        .map((good) => `${good.brand} ${good.title} ${good.model}`);

    return (
        <ListWrapper>
            <h2>Список товаров</h2>
            <Item title={"Товар1"} count={1} />
            <Item title={"Товар2"} count={2} />
            <Item title={"Товар3"} count={15} />
            <Item title={"Товар4"} count={4} />
            <Select options={preparedGoods} />
        </ListWrapper>
    );
};

export default GoodsList;
