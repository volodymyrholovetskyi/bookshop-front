import React, {useState} from "react";
import CreateOrderForm from "../components/CreateOrderForm";
import Button from "../../../components/Button";
import {useNavigate} from "react-router-dom";
import {Typography} from "@mui/material";
import {useIntl} from "react-intl";
import {useDispatch} from "react-redux";
import actionOrder from "../actions/order"

// const useStyles = makeStyles((theme) => ({
//     root: {
//         "& > *": {
//             margin: theme.spacing(1),
//             width: "45ch"
//         },
//     },
// }));

const initOrder = {
    status: "NEW",
    items: [],
    dateOrder: new Date(),
}
const AddOrder = () => {
    // const classes = useStyles();
    const { formatMessage } = useIntl();
    const navigate = useNavigate()
    const [error, setError] = useState();
    const [order, setOrder] = useState(initOrder);
    const {status, items, dateOrder} = order;
    const dispatch = useDispatch();
    const handleClickGoBack = () => navigate(-1)
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!order.status || !order.items || !order.orderDate) {
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
            <h2>{formatMessage({ id: 'title' })}</h2>
        <CreateOrderForm
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        status={status}
        items={items}
        dateOrder={dateOrder}
        />
        </Typography>
    )
}

export default AddOrder;