import React, { useState } from "react";
import { Button, Error, FormWrapper, Header } from "./units";
import Field from "../Field";

const AuthForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    return (
        <FormWrapper>
            <Header>Authorization</Header>
            <Error>login is not valid</Error>
            <Field
                type={"text"}
                placeholder={"Your login"}
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                error
            />
            <Field
                type={"password"}
                placeholder={"Your password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button>Login</Button>
        </FormWrapper>
    );
};

export default AuthForm;
