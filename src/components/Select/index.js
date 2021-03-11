import React, { useState } from "react";
import { Arrow, Input, SelectWithDropdown, SelectWrapper } from "./units";
import Dropdown from "./Dropdown";

const Select = ({ options, onClickItem, placeholder }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    return (
        <SelectWithDropdown>
            <SelectWrapper onClick={() => setDropdownVisible(!dropdownVisible)}>
                <Input placeholder={placeholder || "Выберите элемент"} />
                <Arrow rotate={dropdownVisible ? 180 : 0} />
            </SelectWrapper>
            {dropdownVisible && <Dropdown {...{ options, onClickItem }} />}
        </SelectWithDropdown>
    );
};

export default Select;
