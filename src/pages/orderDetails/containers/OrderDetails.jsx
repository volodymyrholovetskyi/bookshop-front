import {useIntl} from "react-intl";
import {Typography} from "@mui/material";
import React from "react";
import Order from "../components/Order";

function OrderDetails() {
    const {formatMessage} = useIntl();

    return <Typography>
        {formatMessage({id: 'title'})}
        <Order />
    </Typography>
}

export default OrderDetails;