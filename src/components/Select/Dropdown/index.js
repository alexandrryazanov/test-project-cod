import React from "react";
import { DropdownItem, DropdownWrapper } from "./units";

const Dropdown = ({ options, onClickItem }) => {
    return (
        <DropdownWrapper>
            {options.map((option) => (
                <DropdownItem
                    onClick={() => onClickItem(option.id)}
                    key={option.id}
                >
                    {option.title}
                </DropdownItem>
            ))}
        </DropdownWrapper>
    );
};

export default Dropdown;
