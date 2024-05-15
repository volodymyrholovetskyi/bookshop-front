import React, {useState} from 'react';
import Loading from "../../../components/Loading";
import AddIcon from '@mui/icons-material/Add';
import {
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
import Button from "../../../components/Button";
import Dialog from "../../../components/Dialog";
import DeleteIcon from '@mui/icons-material/Delete';
const OrderList = ({isLoading, orders, handleDeleteOrder, errors}) => {
    const [open, setOpen] = useState(false);

    const handleCloseDialog = () => setOpen(false)

    const handleClickDeleteOrder = (id) => {
        handleDeleteOrder(id)
        setOpen(false)
    }
    const handleClickOpenDialog = () => setOpen(true)

    return (
        <>
            {isLoading && <Loading/>}
            <div className="container-table">
                <Button variant="outlined" startIcon={<AddIcon/>}>ADD</Button>
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
                        {/*<CardContent>*/}
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order.id}
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
                </TableContainer>
            </div>
        </>
    )
}

export default OrderList;