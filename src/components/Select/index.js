import React, { useState } from "react";
import { Arrow, Input, SelectWithDropdown, SelectWrapper } from "./units";
import Dropdown from "./Dropdown";

const Select = ({ options }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    return (
        <SelectWithDropdown>
            <SelectWrapper onClick={() => setDropdownVisible(!dropdownVisible)}>
                <Input placeholder={"Добавить товар"} />
                <Arrow rotate={dropdownVisible ? 180 : 0} />
            </SelectWrapper>
            {dropdownVisible && <Dropdown {...{ options }} />}
        </SelectWithDropdown>
    );
};

export default Select;
