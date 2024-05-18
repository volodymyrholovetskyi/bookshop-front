import React from 'react'
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Loading from "../../../components/Loading";

const OrderInfo = ({id, customerId, status, orderDate, items, isLoading}) => {

    return (
        <div>
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
                    {isLoading && <Loading/>}
                    {!isLoading && <TableBody>
                        <TableRow key={id}>
                            <TableCell>{id}</TableCell>
                            <TableCell>{status}</TableCell>
                            <TableCell>{customerId}</TableCell>
                            <TableCell>{orderDate}</TableCell>
                            <TableCell>{items.map((item) => item + " | ")}</TableCell>
                        </TableRow>
                    </TableBody>}
                </Table>
            </TableContainer>
        </div>
    );
}
export default OrderInfo;