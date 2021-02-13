import React, { useState } from "react";
import { ItemWrapper } from "./units";

const Item = ({ title, count: countItem }) => {
    const [count, setCount] = useState(countItem);

    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <ItemWrapper>
            <div>{title}</div>
            <input
                value={count}
                onChange={(e) => {
                    const val = e.target.value;
                    const last = Number(val[val.length - 1]);
                    if (nums.includes(last)) setCount(String(count) + last);
                }}
            />
            <button>Х</button>
        </ItemWrapper>
    );
};

export default Item;
