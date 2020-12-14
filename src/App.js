import React from "react";
import "./App.css";

import Person from "./Person";
import MainWrapper from "./MainWrapper";

function App() {
    const name = "Petya";
    const age = 22;

    console.log("Имя мальчика: " + name + ", а его возраст: " + age);
    console.log(`Имя мальчика: ${name}, а его возраст: ${age}`);

    return (
        <>
            <MainWrapper>
                <Person name={"Vasily"} age={32} bgColor={"red"} />
                <Person name={"Petr"} age={66} bgColor={"blue"} alarm />
                <Person name={"Katya"} age={33} bgColor={"yellow"} alarm />
                <Person name={"Vladimir"} age={13} />
            </MainWrapper>
        </>
    );
}

export default App;
