import React from "react";
import styles from '../styles/CreateOrder.module.css'
import Typography from "../../../components/Typography";
import OrderInput from "./OrderInput";

const UpdateOrder =
    ({
         isLoading,
         onSubmit,
         customerId,
         status,
         orderDate,
         grossValue,
         title,
         handleCancel
     }) => {

        return (
            <Typography>
                <div className={styles.container}>
                    <h2>{title}</h2>
                    <OrderInput
                    isLoading={isLoading}
                    onSubmit={onSubmit}
                    customerId={customerId}
                    staus={status}
                    orderDate={orderDate}
                    grossValue={grossValue}
                    handleCancel={handleCancel}
                    />
                </div>
            </Typography>
        );
    }

export default UpdateOrder;