import React from "react";
import { SideMenuWrapper } from "./units";
import Item from "./Item";

const SideMenu = () => {
    return (
        <SideMenuWrapper>
            <div>
                <Item icon={"card"} text={"Карта"} />
                <Item icon={"chat"} text={"Чат"} />
                <Item icon={"edit"} text={"Редакт."} />
                <Item icon={"user"} text={"Юзер"} />
            </div>
            <div>
                <Item icon={"settings"} />
            </div>
        </SideMenuWrapper>
    );
};

export default SideMenu;
