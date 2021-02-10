import React from "react";

const Table = () => {
    return (
        <table border={1} width={"100%"}>
            <thead style={{ fontWeight: "bold" }}>
                <tr>
                    <td>title 1</td>
                    <td>title 2</td>
                    <td>title 3</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>val 1</td>
                    <td>val 2</td>
                    <td>val 3</td>
                </tr>
                <tr>
                    <td>val 1</td>
                    <td>val 2</td>
                    <td>val 3</td>
                </tr>
                <tr>
                    <td>val 1</td>
                    <td>val 2</td>
                    <td>val 3</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
