import React from "react";
import { ResponsivePie } from "@nivo/pie";

const Pie = ({ data }) => {
    return (
        <ResponsivePie
            data={data} // данные
            margin={{ top: 0, right: 70, bottom: 70, left: 70 }} // отступы
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
