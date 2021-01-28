import React, { useState } from "react";
import Counter from "../components/Counter";
import News from "../components/News";
import AuthForm from "../components/AuthForm";

const MainPage = () => {
    const [value, setValue] = useState(0);

    return (
        <>
            <News {...{ value, setValue }} />
            <Counter value={value} />
            <AuthForm />
        </>
    );
};

export default MainPage;
