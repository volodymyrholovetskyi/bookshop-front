import React from "react";
import styles from '../styles/OrderInput.module.css'
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
                    <OrderInput
                        title={title}
                        isLoading={isLoading}
                        onSubmit={onSubmit}
                        customerId={customerId}
                        staus={status}
                        orderDate={orderDate}
                        grossValue={grossValue}
                        handleCancel={handleCancel}
                    />
            </Typography>
        );
    }

export default UpdateOrder;