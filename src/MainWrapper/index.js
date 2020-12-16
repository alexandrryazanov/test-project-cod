import React from "react";
import Header from "../Header";
import SideMenu from "../SideMenu";

const MainWrapper = (props) => {
    return (
        <>
            <Header />
            <SideMenu />
            {/*{props.children}*/}
        </>
    );
};

export default MainWrapper;
