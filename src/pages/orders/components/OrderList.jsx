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
    TableHead,
    TableRow
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'
import Hover from "../../../components/Hover";

const OrderList = ({orders, handleDeleteOrder, errors, handleClickNavigation}) => {
    const [open, setOpen] = useState(false);
    const handleCloseDialog = () => setOpen(false)

    const handleClickDeleteOrder = (id) => {
        handleDeleteOrder(id)
        setOpen(false)
    }
    const handleClickOpenDialog = () => setOpen(true)

    const handleClickOrderDetails = (pagePath) => handleClickNavigation(pagePath);

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>STATUS</TableCell>
                            <TableCell>TOTAL PRODUCT</TableCell>
                            <TableCell>ORDER DATE</TableCell>
                            <TableCell>ACTION</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders && orders.map((order) => (
                            <TableRow key={order.id}
                                      sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <Hover onClick={(() => {
                                    handleClickOrderDetails(`/orders/${order.id}`)
                                })}>
                                    <TableCell>{order.id}</TableCell>
                                    <TableCell>{order.status}</TableCell>
                                    <TableCell>{order.totalProduct}</TableCell>
                                    <TableCell>{order.orderDate}</TableCell>
                                    <TableCell><IconButton
                                        onClick={handleClickOpenDialog}><DeleteIcon/></IconButton></TableCell>
                                </Hover>
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
            </TableContainer>
        </>
    )
}

export default OrderList;