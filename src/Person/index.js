import React from "react";
import { PersonWrapper, Header } from "./units";

function Person(props) {
    const clickHandler = () => console.log("This is click");

    return (
        <PersonWrapper bgColor={props.bgColor}>
            <Header>Имя человека: {props.name}</Header>
            <h2>Возраст человека: {props.age}</h2>
            <button onClick={clickHandler}>Показать инфо</button>
        </PersonWrapper>
    );
}

export default Person;
