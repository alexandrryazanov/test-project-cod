import React from "react";
import { ItemText, ItemWrapper } from "./units";

const Item = (props) => {
    return (
        <ItemWrapper>
            <img src={`/assets/icons/${props.icon}.png`} alt={""} width={24} />
            <ItemText>{props.text}</ItemText>
        </ItemWrapper>
    );
};

export default Item;
