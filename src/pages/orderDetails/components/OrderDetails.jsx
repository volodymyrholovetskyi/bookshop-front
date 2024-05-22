import React from 'react'
import {IconButton} from "@mui/material";
import Loading from "../../../components/Loading";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import styles from '../styles/OrderDetails.module.css'
import EditIcon from '@mui/icons-material/Edit'
import Typography from "../../../components/Typography";

const OrderDetails =
    ({
         id,
         customerId,
         status,
         orderDate,
         grossValue,
         isLoading,
         title,
         handleGoBack,
         handleChangeMode,
     }) => {

        const handleClickChangeMode = () => {
            handleChangeMode(!open)
        }

        return (
            <div>
                <div className={styles.buttonBox}>
                    <Button
                        className={styles.buttonGoBack}
                        variant="contained"
                        onClick={handleGoBack}>
                        GO BACK
                    </Button>
                    <IconButton onClick={handleClickChangeMode}><EditIcon/></IconButton>
                </div>
                {isLoading && <Loading/>}
                {!isLoading &&
                    <div className={styles.container}>
                        <div>
                            <Card>
                                <Typography>
                                    <div className={styles.box}>
                                        <h2>{title}</h2>
                                        <div className={styles.inputBox}>
                                            <label>Order ID:</label>
                                            <p>{id}</p>
                                        </div>
                                        <div className={styles.inputBox}>
                                            <label>Customer ID:</label>
                                            <p>{customerId}</p>
                                        </div>
                                        <div className={styles.inputBox}>
                                            <label>Status:</label>
                                            <p>{status}</p>
                                        </div>
                                        <div className={styles.inputBox}>
                                            <label>Gross Value:</label>
                                            <p>{grossValue}</p>
                                        </div>
                                        <div className={styles.inputBox}>
                                            <label>Order Date:</label>
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

export default OrderDetails;