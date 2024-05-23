import React from "react";
import {TablePagination} from "@mui/material";

const Pagination =
    ({
         totalElements,
         page,
         handleChangePage,
         rowsPerPage,
         handleChangeRowsPerPage,
    }) => {
    return (
        <TablePagination
            component="div"
            count={totalElements}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
}
export default Pagination;