import React from "react";
import {
    StyledColumn,
    StyledHeadRow,
    StyledRow,
    StyledTable,
    StyledTbody,
    StyledThead,
} from "./units";

const Table = ({ data }) => {
    const tableHeaders = (
        <StyledHeadRow>
            <StyledColumn>№</StyledColumn>
            <StyledColumn>Клиент</StyledColumn>
            <StyledColumn>Телефон</StyledColumn>
            <StyledColumn>Сумма</StyledColumn>
        </StyledHeadRow>
    );

    const tableBody = data
        .filter((_, index) => index < 5)
        .map(({ id, client, phone, cost }) => (
            <StyledRow key={id} onClick={() => alert(`Переход на заказ ${id}`)}>
                <StyledColumn>{id}</StyledColumn>
                <StyledColumn>{client}</StyledColumn>
                <StyledColumn>{phone}</StyledColumn>
                <StyledColumn>{cost}$</StyledColumn>
            </StyledRow>
        ));

    return (
        <StyledTable>
            <StyledThead>{tableHeaders}</StyledThead>
            <StyledTbody>{tableBody}</StyledTbody>
        </StyledTable>
    );
};

export default Table;
