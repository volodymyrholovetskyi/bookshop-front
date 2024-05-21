import React, {useState} from 'react'
import {IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import Loading from "../../../components/Loading";
import TableHeads from "../../../components/TableHeads";
import Button from "../../../components/Button";
import styles from '../styles/OrderDetails.module.css'
import Error from "../../../components/icons/Error";
import EditIcon from '@mui/icons-material/Edit'
import UpdateOrder from "./UpdateOrder";


const columns = [
    {id: 'id', name: 'Id'},
    {id: 'status', name: 'Status'},
    {id: 'totalProduct', name: 'Customer ID'},
    {id: 'orderDate', name: 'Order date'},
    {id: 'action', name: 'Items'},
]
const OrderInfo =
    ({
         id,
         customerId,
         status,
         orderDate,
         items,
         isLoading,
         errors,
         title,
         handleClickGoBack,
         handleUpdateOrder,
     }) => {
        const [open, setOpen] = useState(false);

        const handleClickEditMode = () => {
            setOpen(!open)
        }

        const handelCancel = () => {
            setOpen(false)
        }

        const handleSubmit = (order) => handleUpdateOrder(id, order)

        if (errors.length > 0) {
            return (
                <div>
                    {errors.map((error) => (
                        <Error color="warning">{error}</Error>
                    ))}
                </div>)
        }

        return (
            <div>
                {open && <UpdateOrder
                    isLoading={isLoading}
                    handleCancel={handelCancel}
                    fetchErrors={errors}
                    onSubmit={handleSubmit}
                    customerId={customerId}
                    status={status}
                    items={items}
                    orderDate={orderDate}
                    title={title}
                ></UpdateOrder>}
                {!open && <div className={styles.buttonBox}>
                    <Button
                        className={styles.buttonGoBack}
                        variant="contained"
                        onClick={handleClickGoBack}>
                        GO BACK
                    </Button>
                    <IconButton onClick={handleClickEditMode}><EditIcon/></IconButton>
                </div>}
                {isLoading && <Loading/>}
                {!isLoading && !open && <TableContainer component={Paper}>
                    <h2>{title}</h2>
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