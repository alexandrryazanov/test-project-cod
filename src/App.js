import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MainWrapper from "./components/MainWrapper";

import MainPage from "./pages/Main";
import Clients from "./pages/Clients";
import About from "./pages/About";
import CreateOrder from "./pages/CreateOrder";

function App() {
    return (
        <BrowserRouter>
            <MainWrapper>
                <Switch>
                    <Route exact path={"/"} component={MainPage} />
                    <Route exact path={"/clients"} component={Clients} />
                    <Route exact path={"/about"} component={About} />
                    <Route
                        exact
                        path={"/create-order"}
                        component={CreateOrder}
                    />
                    <Redirect to={"/"} />
                </Switch>
            </MainWrapper>
        </BrowserRouter>
    );
}

export default App;
