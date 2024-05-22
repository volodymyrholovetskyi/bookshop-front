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
                    <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
                        <div>
                            <Card>
                                <Typography>
                                    <div style={{padding: "20px 40px", fontSize: "20px"}}>
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

export default OrderDetails;