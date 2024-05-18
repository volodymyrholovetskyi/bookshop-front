import React, {useState} from "react";
import Button from "../../../components/Button";
import {useNavigate} from "react-router-dom";
import {Typography} from "@mui/material";
import {useIntl} from "react-intl";
import {useDispatch, useSelector} from "react-redux";
import actionOrder from "../actions/addOrder"
import AddOrderForm from "../components/AddOrderForm";

const initOrder = {
    items: [],
    customerId: 0,
    status: "",
    orderDate: "",
}
const CreateOrder = () => {
    const {formatMessage} = useIntl();
    const navigate = useNavigate()
    const {isLoading} = useSelector(orders => orders)
    const [error, setError] = useState();
    const [order, setOrder] = useState(initOrder);
    let {status, items, orderDate, customerId} = order;
    const dispatch = useDispatch();
    const handleClickGoBack = () => navigate(-1)
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!status || !items || !orderDate || !customerId) {
            setError("Please input all field");
        } else {
            dispatch(actionOrder.createOrder(order))
        }
    }

    const handleInput = (event) => {
        setOrder({...order, [event.target.name]: event.target.value});
    }

    return (
        <Typography>
            <Button
                style={{width: "100px", marginTop: "20px"}}
                variant="contained"
                onClick={handleClickGoBack}>
                GO BACK
            </Button>
            <h2>{formatMessage({id: 'title'})}</h2>
            <AddOrderForm
                handleSubmit={handleSubmit}
                handleInput={handleInput}
                status={status}
                items={items}
                orderDate={orderDate}
                customerId={customerId}
                isLoading={isLoading}
                error={error}
            />
        </Typography>
    )
}

export default CreateOrder;