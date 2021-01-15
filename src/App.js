import React from "react";
import "./App.css";
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
    withRouter,
} from "react-router-dom";

import Person from "./components/Person";
import MainWrapper from "./components/MainWrapper";

import MainPage from "./pages/Main";
import Clients from "./pages/Clients";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <MainWrapper>
                <Switch>
                    <Route exact path={"/"}>
                        <MainPage />
                    </Route>
                    <Route exact path={"/clients"}>
                        <Clients />
                    </Route>
                    <Route exact path={"/about"}>
                        <About />
                    </Route>
                    <Redirect to={"/"} />
                </Switch>
            </MainWrapper>
        </BrowserRouter>
    );
}

export default App;
