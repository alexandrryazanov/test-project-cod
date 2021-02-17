import React from "react";
import { DropdownItem, DropdownWrapper } from "./units";

const Dropdown = ({ options }) => {
    return (
        <DropdownWrapper>
            {options.map((option, i) => (
                <DropdownItem key={i}>{option}</DropdownItem>
            ))}
        </DropdownWrapper>
    );
};

export default Dropdown;
