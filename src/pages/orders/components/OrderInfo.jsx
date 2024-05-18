import React from 'react'
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Loading from "../../../components/Loading";
import TableHeads from "../../../components/TableHeads";

const columns = [
    {id: 'id', name: 'Id'},
    {id: 'status', name: 'Status'},
    {id: 'totalProduct', name: 'Customer ID'},
    {id: 'orderDate', name: 'Order date'},
    {id: 'action', name: 'Items'},
]
const OrderInfo = ({id, customerId, status, orderDate, items, isLoading}) => {

    return (
        <div>
            {isLoading && <Loading/>}
            {!isLoading && <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                    <TableHeads columns={columns}></TableHeads>
                    <TableBody>
                        <TableRow key={id}>
                            <TableCell>{id}</TableCell>
                            <TableCell>{status}</TableCell>
                            <TableCell>{customerId}</TableCell>
                            <TableCell>{orderDate}</TableCell>
                            <TableCell>{items && items.map((item) => item + " | ")}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            }
        </div>
    );
}
export default OrderInfo;