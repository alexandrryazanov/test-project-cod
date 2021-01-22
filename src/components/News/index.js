import React from "react";

const News = ({ value, setValue }) => {
    return <button onClick={() => setValue(value + 1)}>+1</button>;
};

export default News;
