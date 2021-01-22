import React from "react";
import { PersonWrapper, Header } from "./units";

function Person({ bgColor, name, age }) {
    const clickHandler = () => console.log("This is click");

    return (
        <PersonWrapper {...{ bgColor, age }}>
            <Header>Имя человека: {name}</Header>
            <h2>Возраст человека: {age}</h2>
            <button onClick={clickHandler}>Показать инфо</button>
        </PersonWrapper>
    );
}

export default Person;
