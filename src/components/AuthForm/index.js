import React from "react";
import { Button, Error, Field, FormWrapper, Header } from "./units";

const AuthForm = () => {
    return (
        <FormWrapper>
            <Header>Authorization</Header>

            <Error>login is not valid</Error>
            <Field placeholder={"Your login"} error />
            <Field placeholder={"Your password"} type={"password"} />
            <Button>Login</Button>
        </FormWrapper>
    );
};

export default AuthForm;
