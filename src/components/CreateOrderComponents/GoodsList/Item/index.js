import React, { useState } from "react";
import {
    ControlsWrapper,
    Count,
    DeleteIcon,
    GoodTitle,
    ItemWrapper,
} from "./units";

const Item = ({ title }) => {
    return (
        <ItemWrapper>
            <GoodTitle>{title}</GoodTitle>
            <ControlsWrapper>
                <Count value={0} />
                <DeleteIcon />
            </ControlsWrapper>
        </ItemWrapper>
    );
};

export default Item;
