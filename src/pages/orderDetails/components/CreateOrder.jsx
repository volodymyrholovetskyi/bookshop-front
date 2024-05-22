import React from "react";
import styles from '../styles/CreateOrder.module.css'
import Typography from "../../../components/Typography";
import OrderInput from "./OrderInput";

const CreateOrder =
    ({
         onSubmit,
         isLoading,
         title,
         handleCancel,
     }) => {

        return (
            <Typography>
                <div className={styles.container}>
                    <h2 className={styles.title}>{title}</h2>
                    <OrderInput
                        isLoading={isLoading}
                        onSubmit={onSubmit}
                        customerId={0}
                        grossValue={0}
                        handleCancel={handleCancel}
                    />
                </div>
            </Typography>
        );
    }

export default CreateOrder;