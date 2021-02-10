import React from "react";
import ButtonMUI from "@material-ui/core/Button";

//Объяснить rest и зачем мы его написали
const Button = ({ children, ...rest }) => {
    return (
        <ButtonMUI
            variant="contained"
            color="primary"
            style={{ margin: "5px 0" }}
            {...rest}
        >
            {children}
        </ButtonMUI>
    );
};

export default Button;
