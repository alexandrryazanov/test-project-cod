import React from "react";
import ButtonMUI from "@material-ui/core/Button";

//Объяснить rest и зачем мы его написали
const Button = ({ children, ...rest }) => {
    return (
        <ButtonMUI
            variant="contained"
            style={{ margin: "3px" }}
            color={"primary"}
            {...rest}
        >
            {children}
        </ButtonMUI>
    );
};

export default Button;
