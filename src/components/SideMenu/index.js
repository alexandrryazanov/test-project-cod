import React from "react";
import { SideMenuWrapper } from "./units";
import Item from "./Item";
import { Link } from "react-router-dom";

const SideMenu = () => {
    return (
        <SideMenuWrapper>
            <div>
                <Link exact to={"/"}>
                    <Item icon={"card"} text={"Главная"} />
                </Link>
                <Link exact to={"/clients"}>
                    <Item icon={"user"} text={"Клиенты"} />
                </Link>
                <Link exact to={"/about"}>
                    <Item icon={"edit"} text={"О нас"} />
                </Link>
            </div>
            <div>
                <Item icon={"settings"} />
            </div>
        </SideMenuWrapper>
    );
};

export default SideMenu;
