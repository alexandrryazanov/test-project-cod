import React, { useState } from "react";
import { Light, TrafficLightWrapper } from "./units";
import MyButton from "../MyButton";

const TrafficLight = () => {
    const [activeLight, setActiveLight] = useState(0);

    return (
        <>
            <MyButton
                color={"red"}
                onClick={() =>
                    setActiveLight(activeLight < 2 ? activeLight + 1 : 0)
                }
            >
                Переключить
            </MyButton>
            <TrafficLightWrapper>
                <Light color={"red"} isActive={activeLight === 0} />
                <Light color={"yellow"} isActive={activeLight === 1} />
                <Light color={"green"} isActive={activeLight === 2} />
            </TrafficLightWrapper>
        </>
    );
};

export default TrafficLight;
