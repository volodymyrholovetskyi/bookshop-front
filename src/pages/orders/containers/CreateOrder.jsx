import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Typography} from "@mui/material";
import {useIntl} from "react-intl";
import {useDispatch, useSelector} from "react-redux";
import actionOrder from "../actions/addOrder"
import CreateOrderForm from "../components/CreateOrderForm";

const CreateOrder = () => {
    const {formatMessage} = useIntl();
    const navigate = useNavigate()
    const {isLoading} = useSelector(orders => orders)
    const dispatch = useDispatch();
    const handleClickGoBack = () => navigate(-1)

    const onSubmit = (order) => {
        dispatch(actionOrder.createOrder(order))
    }

    return (
        <Typography>
            <CreateOrderForm
                onSubmit={onSubmit}
                isLoading={isLoading}
                title={formatMessage({id: 'title'})}
                handleClickGoBack={handleClickGoBack}
            />
        </Typography>
    )
}

export default CreateOrder;