import React from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import IconButton from "../IconButton";

const Tables = ({columns, rows}) => {

    return (
        <div style={{textAlign: 'center'}}>
            <Paper sx={{width: '90%', marginLeft: '5%'}}>
                <TableContainer>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell style={{backgroundColor: "#2d2d2b", color: "white"}}
                                               key={column.id}>{column.name}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows && rows.map((row) => {
                                return (
                                    <TableRow hover root key={row.id}>
                                        {columns && columns.map((column) => {
                                            let value = row[column.id];
                                            return (
                                                <TableCell key={value}>
                                                    {value}
                                                </TableCell>
                                            )
                                        })}
                                        <TableCell><IconButton></IconButton></TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}

    export default Tables;