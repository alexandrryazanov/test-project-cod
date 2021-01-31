import React from "react";
import { ItemText, ItemWrapper } from "./units";

const Item = ({ icon, text }) => {
    return (
        <ItemWrapper>
            {icon}
            <ItemText>{text}</ItemText>
        </ItemWrapper>
    );
};

export default Item;
