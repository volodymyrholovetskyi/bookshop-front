import React from 'react'
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const OrderInfo = ({id, customerId, status, orderDate, items}) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>STATUS</TableCell>
                        <TableCell>CUSTOMER ID</TableCell>
                        <TableCell>ORDER DATE</TableCell>
                        <TableCell>ITEMS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={id}>
                        <TableCell>{id}</TableCell>
                        <TableCell>{status}</TableCell>
                        <TableCell>{customerId}</TableCell>
                        <TableCell>{orderDate}</TableCell>
                        <TableCell>{items.map((item) => item + " | ")}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default OrderInfo;