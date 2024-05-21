import React, {useState} from 'react';
import {
    Box,
    DialogActions,
    DialogTitle,
    Fade,
    IconButton,
    Modal,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import DeleteIcon from '@mui/icons-material/Delete'
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import Loading from "../../../components/Loading";
import TableHeads from "../../../components/TableHeads";
import OrderFilter from "./OrderFilter";
import pagesURLs from "../../../constants/pagesURLs";
import * as pages from "../../../constants/pages";
import AddIcon from "@mui/icons-material/Add";
import Pagination from "../../../components/Pagination";
import Dialog from "../../../components/Dialog";
import styles from '../styles/OrderList.module.css'
import Button from "../../../components/Button";

const columns = [
    {id: 'id', name: 'Id'},
    {id: 'status', name: 'Status'},
    {id: 'totalProduct', name: 'Total product'},
    {id: 'orderDate', name: 'Order date'},
    {id: 'details', name: 'Details'},
    {id: 'action', name: 'Actions'},
]

const OrderList =
    ({
         orders,
         title,
         handleDeleteOrder,
         handleClickNavigation,
         isLoading,
         errors,
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
        const [showModal, setShowModal] = useState(false);
        const [id, setId] = useState(0);
        const handleClickCancelDelete = () => setOpen(false)
        const handleClickOpenDialog = () => setOpen(true)

        const handleClickConfirmDelete = () => {
            handleDeleteOrder(id)
            if (!errors.length) {
                setOpen(false);
                setShowModal(true)
            }
        }
        const handleClose = () => setShowModal(false)

        const handleClickOrderDetails = (pagePath) => {
            handleClickNavigation(pagePath)
        };

        return (
            <div>
                <h2>{title}</h2>
                <div className={styles.filterBox}>
                    <div>
                        <OrderFilter
                            handleChangeSearch={handleChangeSearch}
                            customerId={customerId}
                            status={status}
                            from={from}
                            to={to}/>
                    </div>
                    <div>
                        <Button
                            onClick={(() => {
                                handleClickNavigation(`${pagesURLs[pages.addOrderPage]}`)
                            })}
                            variant="outlined"
                            startIcon={<AddIcon/>}>
                            ADD ORDER</Button>
                    </div>
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
                                    <Dialog
                                        open={open}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description">
                                        <DialogTitle id="alert-dialog-title">
                                            {"Do you want to delete the Order?"}
                                        </DialogTitle>
                                        {errors && errors.map((error) => (
                                            <DialogTitle>{error}</DialogTitle>
                                        ))}
                                        <DialogActions>
                                            <Button onClick={handleClickCancelDelete}>No</Button>
                                            <Button onClick={handleClickConfirmDelete} autoFocus>Yes</Button>
                                        </DialogActions>
                                    </Dialog>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    {!orders.length && <p className={styles.emptyTableMsg}>Nothing found. Please use filtering...</p>}
                    <Pagination
                        totalElements={totalOrders}
                        page={page}
                        handleChangePage={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                    ></Pagination>
                </TableContainer>
                }
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={showModal}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{backdrop: Backdrop}}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}>
                    <Fade in={showModal}>
                        <Box className={styles.boxModal}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Success!
                            </Typography>
                            <Typography id="transition-modal-description" sx={{mt: 2}}>
                                Order with ID: [ {id} ] has bean deleted.
                            </Typography>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        );
    }

export default OrderList;