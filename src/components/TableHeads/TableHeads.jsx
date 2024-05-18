import React from 'react'
import {TableCell, TableRow, TableHead} from "@mui/material";

const TableHeads = ({columns}) => {

    return (
        <TableHead>
            <TableRow>
                {columns.map((column) => (
                    <TableCell style={{background: 'black', color: 'white'}} key={column.id}>{column.name}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default TableHeads;
