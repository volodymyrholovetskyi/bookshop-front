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
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
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
    {id: 'details', name: 'Details'},
    {id: 'action', name: 'Actions'},
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
        const [id, setId] = useState(0);
        const handleClickCancelDelete = () => setOpen(false)
        const handleClickOpenDialog = () => setOpen(true)

        const handleClickConfirmDelete = () => {
            handleDeleteOrder(id)
            setOpen(false)
        }

        const handleClickOrderDetails = (pagePath) => {
            handleClickNavigation(pagePath)
        };

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
                                <TableRow
                                    hover
                                    key={order.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                    <TableCell>{order.id}</TableCell>
                                    <TableCell>{order.status}</TableCell>
                                    <TableCell>{order.totalProduct}</TableCell>
                                    <TableCell>{order.orderDate}</TableCell>
                                    <TableCell>
                                        <IconButton
                                            onClick={(() => {
                                                handleClickOrderDetails(`/orders/${order.id}`)
                                            })}>
                                            <PlagiarismOutlinedIcon/>
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => {
                                            handleClickOpenDialog()
                                            setId(order.id)
                                        }}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </TableCell>
                                    <Dialog open={open}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description">
                                        <DialogTitle id="alert-dialog-title">
                                            {"Do you want to delete the order?"}
                                        </DialogTitle>
                                        <DialogTitle>{errors}</DialogTitle>
                                        <DialogActions>
                                            <Button onClick={handleClickCancelDelete}>No</Button>
                                            <Button onClick={handleClickConfirmDelete} autoFocus>Yes</Button>
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