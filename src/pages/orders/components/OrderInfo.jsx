import React, {useState} from 'react'
import {IconButton} from "@mui/material";
import Loading from "../../../components/Loading";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import styles from '../styles/OrderDetails.module.css'
import Error from "../../../components/icons/Error";
import EditIcon from '@mui/icons-material/Edit'
import UpdateOrder from "./UpdateOrder";
import Typography from "../../../components/Typography";

const OrderInfo =
    ({
         id,
         customerId,
         status,
         orderDate,
         grossValue,
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
                    grossValue={grossValue}
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
                {!isLoading && !open &&
                    <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
                        <div>
                            <Card>
                                <Typography>
                                    <div style={{padding:"20px 40px", fontSize:"20px"}}>
                                        <h2>{title}</h2>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }}>
                                            <label style={{fontWeight: "bold"}}>Order ID:</label>
                                            <p>{id}</p>
                                        </div>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }}>
                                            <label style={{fontWeight: "bold"}}>Customer ID:</label>
                                            <p>{customerId}</p>
                                        </div>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }}>
                                            <label style={{fontWeight: "bold"}}>Status:</label>
                                            <p>{status}</p>
                                        </div>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }}>
                                            <label style={{fontWeight: "bold"}}>Gross Value:</label>
                                            <p>{grossValue}</p>
                                        </div>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }}>
                                            <label style={{fontWeight: "bold"}}>Order Date:</label>
                                            <p>{orderDate}</p>
                                        </div>
                                    </div>
                                </Typography>
                            </Card>
                        </div>
                    </div>
                }
            </div>
        );
    }
export default OrderInfo;