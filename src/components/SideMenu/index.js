import React from "react";
import { SideMenuWrapper } from "./units";
import Item from "./Item";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
    return (
        <SideMenuWrapper>
            <div>
                <NavLink exact to={"/"}>
                    <Item icon={"card"} text={"Главная"} />
                </NavLink>
                <NavLink exact to={"/clients"}>
                    <Item icon={"user"} text={"Клиенты"} />
                </NavLink>
                <NavLink exact to={"/about"}>
                    <Item icon={"edit"} text={"О нас"} />
                </NavLink>
            </div>
            <div>
                <Item icon={"settings"} />
            </div>
        </SideMenuWrapper>
    );
};

export default SideMenu;
