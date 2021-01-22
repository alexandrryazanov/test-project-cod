import React from "react";
import Comp2 from "../Comp2";

export default ({ value }) => {
    return <Comp2 {...{ value, age: 32 }} />;
};
