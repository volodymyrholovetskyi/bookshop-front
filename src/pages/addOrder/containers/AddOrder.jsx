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
    customerId: 0,
    status: "NEW",
    items: [],
    orderDate: "",
}
const AddOrder = () => {
    // const classes = useStyles();
    const {formatMessage} = useIntl();
    const navigate = useNavigate()
    const [error, setError] = useState();
    const [order, setOrder] = useState(initOrder);
    const {status, items, orderDate, customerId} = order;
    const dispatch = useDispatch();
    const handleClickGoBack = () => navigate(-1)
    const handleSubmit = (event) => {
        console.log("Click SUBMIT: " + order.items)
        console.log("Click SUBMIT: " + order.orderDate)
        console.log("Click SUBMIT: " + order.status)
        console.log("Click SUBMIT: " + order.customerId)
        event.preventDefault();
        if (!status || !items || !orderDate) {
            setError("Please input all field");
        } else {
            console.log("Order: " + order)
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
                {error && <h3>{error}</h3>}
                <CreateOrderForm
                    handleSubmit={handleSubmit}
                    handleInput={handleInput}
                    status={status}
                    items={items}
                    orderDate={orderDate}
                    customerId={customerId}
                />
            </Typography>
        )
    }

    export default AddOrder;