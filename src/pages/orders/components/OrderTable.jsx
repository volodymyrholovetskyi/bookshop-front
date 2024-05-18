import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'
import Loading from "../../../components/Loading";
import TableHeads from "../../../components/TableHeads";
import OrderFilterForm from "./OrderFilterForm";
import pagesURLs from "../../../constants/pagesURLs";
import * as pages from "../../../constants/pages";
import AddIcon from "@mui/icons-material/Add";

const columns = [
    {id: 'id', name: 'Id'},
    {id: 'status', name: 'Status'},
    {id: 'totalProduct', name: 'Total product'},
    {id: 'orderDate', name: 'Order date'},
    {id: 'action', name: 'Action'},
]
const OrderTable =
    ({
         orders,
         title,
         errors,
         handleDeleteOrder,
         handleClickNavigation,
         isLoading,
         page,
         rowsPerPage,
         handleChangePage,
         handleChangeRowsPerPage,
         totalOrders,
         handleChangeSearch,
         customerId,
         status,
         from,
         to,
     }) => {
        const [open, setOpen] = useState(false);
        const handleCloseDialog = () => setOpen(false)

        const handleClickDeleteOrder = (id) => {
            handleDeleteOrder(id)
            setOpen(false)
        }
        const handleClickOpenDialog = () => setOpen(true)

        const handleClickOrderDetails = (pagePath) => handleClickNavigation(pagePath);

        return (
            <div>
                <h2>{title}</h2>
                <div style={
                    {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                    <div>
                        <OrderFilterForm
                            handleChangeSearch={handleChangeSearch}
                            customerId={customerId}
                            status={status}
                            from={from}
                            to={to}/>
                    </div>
                    <div><Button
                        onClick={(() => {
                            handleClickNavigation(`${pagesURLs[pages.addOrderPage]}`)
                        })}
                        variant="outlined"
                        startIcon={<AddIcon/>}>
                        ADD ORDER</Button></div>
                </div>
                {isLoading && <Loading/>}
                {!isLoading && <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                        <TableHeads columns={columns}></TableHeads>
                        <TableBody>
                            {orders && orders.map((order) => (
                                <TableRow style={{cursor: 'pointer'}} hover key={order.id} onClick={(() => {
                                    handleClickOrderDetails(`/orders/${order.id}`)
                                })}
                                          sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                    <TableCell>{order.id}</TableCell>
                                    <TableCell>{order.status}</TableCell>
                                    <TableCell>{order.totalProduct}</TableCell>
                                    <TableCell>{order.orderDate}</TableCell>
                                    <TableCell><IconButton
                                        onClick={handleClickOpenDialog}><DeleteIcon/></IconButton></TableCell>
                                    <Dialog
                                        open={open}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                            {"Do you want to delete the order?"}
                                        </DialogTitle>
                                        {errors.length > 0 && <DialogTitle>{errors}</DialogTitle>}
                                        <DialogActions>
                                            <Button onClick={handleCloseDialog}>No</Button>
                                            <Button onClick={(() => handleClickDeleteOrder(order.id))}
                                                    autoFocus>Yes</Button>
                                        </DialogActions>
                                    </Dialog>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                    <TablePagination
                        component="div"
                        count={totalOrders}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>
                }
            </div>
        )
    }

export default OrderTable;