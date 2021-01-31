import React from "react";
import { ResponsivePie } from "@nivo/pie";

const data = [
    { id: "test1", value: 307 },
    { id: "test2", value: 172 },
    { id: "test3", value: 131 },
    { id: "test4", value: 177 },
];

const Pie = () => {
    return (
        <ResponsivePie
            data={data} // данные
            margin={{ top: 0, right: 50, bottom: 70, left: 50 }} // отступы
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
