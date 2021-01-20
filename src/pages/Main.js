import React, { useState } from "react";
import MyButton from "../components/MyButton";

const MainPage = () => {
    const [value, setValue] = useState(1);
    const [switcher, setSwitcher] = useState(false);
    const [buttonColor, setButtonColor] = useState(0);

    return (
        <div>
            <h1>
                {switcher ? "Значение" : "Счетчик"}: {value}
            </h1>
            <MyButton onClick={() => setValue(value + 1)}>
                Увеличить (+1)
            </MyButton>
            <MyButton onClick={() => setValue(value - 1)}>
                Уменьшить (-1)
            </MyButton>
            <MyButton onClick={() => setSwitcher(!switcher)}>
                Сменить заголовок
            </MyButton>
            <MyButton
                onClick={() => setButtonColor(buttonColor + 1)}
                color={
                    buttonColor === 0
                        ? "green"
                        : buttonColor === 1
                        ? "red"
                        : buttonColor === 2
                        ? "blue"
                        : setButtonColor(0)
                }
            >
                change button color
            </MyButton>
        </div>
    );
};

export default MainPage;
