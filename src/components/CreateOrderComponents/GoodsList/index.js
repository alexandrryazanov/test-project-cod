import React, { useState } from "react";
import { ListWrapper } from "./units";
import Item from "./Item";
import Select from "../../Select";
import { modelFullName } from "./utils";

const GoodsList = ({ goods }) => {
    const [list, setList] = useState([]);

    const options = goods
        .filter(({ count }) => count > 0)
        .map(({ id, ...rest }) => ({ id, title: modelFullName(rest) }));

    const preparedList = list.map(({ id, title, count }) => (
        <Item {...{ title, count, key: title + count }} />
    ));

    const addGood = (selectedId) => {
        const { id, ...rest } = goods.find(({ id }) => id === selectedId);
        const foundGood = list.findIndex((good) => good.id === id);

        if (foundGood >= 0) {
            //меняем товар в списке
            setList(
                list.map((good, i) =>
                    i !== foundGood ? good : { ...good, count: good.count + 1 }
                )
            );
        } else {
            //Добавляем товар в список
            setList([
                ...list,
                {
                    id,
                    title: modelFullName(rest),
                    count: 1,
                },
            ]);
        }
    };

    return (
        <ListWrapper>
            <h2>Список товаров</h2>
            {preparedList}
            <Select
                placeholder={"Добавить товар"}
                onClickItem={addGood}
                {...{ options }}
            />
        </ListWrapper>
    );
};

export default GoodsList;
