import React from "react";
import Header from "../Header";

const MainWrapper = (props) => {
    return (
        <>
            <Header />
            {props.children}
        </>
    );
};

export default MainWrapper;
