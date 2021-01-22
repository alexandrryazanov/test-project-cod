import React from "react";
import { ItemText, ItemWrapper } from "./units";

const Item = ({ icon, text }) => {
    return (
        <ItemWrapper>
            <img src={`/assets/icons/${icon}.png`} alt={""} width={24} />
            <ItemText>{text}</ItemText>
        </ItemWrapper>
    );
};

export default Item;
