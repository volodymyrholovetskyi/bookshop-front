import * as React from 'react';

export default function OrderPagination
    ({
         totalPage,
         handleClickNextPage,
         handleChangeRowsPerPage,
         handleClickPrevPage,
         rowsPerPage
     }) {

    const onClickNextPage = () => {
        handleClickNextPage()
    }

    const onClickPrevPage = () => {
        handleClickPrevPage();
    }

    const onChangeRowsPerPage = (event) => {
        handleChangeRowsPerPage(event);
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "right",
            alignContent: "center",
        }}>
            <label>Rows per page: </label>
            <select
                name={'rowsPerPage'} onChange={onChangeRowsPerPage} value={rowsPerPage}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
            <p>Total page: {totalPage}</p>
            <button onClick={onClickPrevPage}>Prev</button>
            <button onClick={onClickNextPage}>Next</button>
        </div>
    );
}