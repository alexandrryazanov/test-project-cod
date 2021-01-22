import React from "react";
import Header from "../Header";
import SideMenu from "../SideMenu";

import { ContentWrapper, ContentWrapperWithMenu } from "./units";

const MainWrapper = ({ children }) => {
    return (
        <>
            <Header />
            <ContentWrapperWithMenu>
                <SideMenu />
                <ContentWrapper>{children}</ContentWrapper>
            </ContentWrapperWithMenu>
        </>
    );
};

export default MainWrapper;
