import React from "react";
import { ResponsivePie } from "@nivo/pie";

const data = [
    {
        id: "hack",
        label: "hack",
        value: 307,
        color: "hsl(255, 70%, 50%)",
    },
    {
        id: "make",
        label: "make",
        value: 172,
        color: "hsl(265, 70%, 50%)",
    },
    {
        id: "scala",
        label: "scala",
        value: 131,
        color: "hsl(219, 70%, 50%)",
    },
    {
        id: "stylus",
        label: "stylus",
        value: 177,
        color: "hsl(350, 70%, 50%)",
    },
    {
        id: "java",
        label: "java",
        value: 371,
        color: "hsl(111, 70%, 50%)",
    },
];

const Pie = () => {
    return (
        <ResponsivePie
            data={data} // данные
            margin={{ top: 0, right: 40, bottom: 70, left: 40 }} // отступы
            innerRadius={0.5} // радиус дырки бублика
            padAngle={3} // пробелы между секторами
            cornerRadius={1} //Закругление рамки каждого сектора
            colors={{ scheme: "nivo" }} // цветовая схема
            radialLabelsTextColor="#333333" //цвет подписей
            radialLabelsLinkDiagonalLength={19} // отступ подписей от бублика
            radialLabelsLinkHorizontalLength={5} // отступ подписей по горизонтали
        />
    );
};

export default Pie;
