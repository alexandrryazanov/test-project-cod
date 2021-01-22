import React, { useState } from "react";
import Counter from "../components/Counter";
import News from "../components/News";

const MainPage = () => {
    const [value, setValue] = useState(0);

    return (
        <>
            <News {...{ value, setValue }} />
            <Counter value={name} />
        </>
    );
};

export default MainPage;
