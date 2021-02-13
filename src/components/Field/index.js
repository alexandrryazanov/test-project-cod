import React, { useState } from "react";
import { Wrapper, OpenedEye, ClosedEye, Input } from "./units";

// ...rest - так указываются остальные пропсы
// т.е. достаем из пропсов пропс type, а все пропсы кроме type попадут в rest
const Field = ({ type = "text", wrapperStyle, ...rest }) => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(!visible);
    };

    return (
        <Wrapper {...{ wrapperStyle }}>
            <Input
                {...rest}
                type={visible || type === "text" ? "text" : type}
            />
            {type === "password" &&
                (!visible ? (
                    <ClosedEye onClick={toggleVisible} />
                ) : (
                    <OpenedEye onClick={toggleVisible} />
                ))}
        </Wrapper>
    );
};

export default Field;
