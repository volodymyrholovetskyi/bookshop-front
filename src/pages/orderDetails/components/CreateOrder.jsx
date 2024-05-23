import React from "react";
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
                    <OrderInput
                        title={title}
                        isLoading={isLoading}
                        onSubmit={onSubmit}
                        customerId={0}
                        grossValue={0}
                        handleCancel={handleCancel}
                    />
            </Typography>
        );
    }

export default CreateOrder;