import React, { useState } from "react";
import {
    ControlsWrapper,
    Count,
    DeleteIcon,
    GoodTitle,
    ItemWrapper,
} from "./units";

const Item = ({ title, count }) => {
    return (
        <ItemWrapper>
            <GoodTitle>{title}</GoodTitle>
            <ControlsWrapper>
                <Count defaultValue={count} />
                <DeleteIcon />
            </ControlsWrapper>
        </ItemWrapper>
    );
};

export default Item;
