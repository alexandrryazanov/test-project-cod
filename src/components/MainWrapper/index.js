import React from "react";
import Header from "../Header";
import SideMenu from "../SideMenu";

import { ContentWrapper, ContentWrapperWithMenu } from "./units";

const MainWrapper = (props) => {
    return (
        <>
            <Header />
            <ContentWrapperWithMenu>
                <SideMenu />
                <ContentWrapper>{props.children}</ContentWrapper>
            </ContentWrapperWithMenu>
        </>
    );
};

export default MainWrapper;
