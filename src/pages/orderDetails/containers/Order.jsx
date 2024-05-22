import React, {useEffect, useState} from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import Typography from "../../../components/Typography";
import {useDispatch, useSelector} from "react-redux";
import OrderDetails from "../components/OrderDetails";
import actionsOrders from "../actions/orderDetails"
import {useIntl} from "react-intl";
import actionsUpdateOrder from "../actions/updateOrder";
import actionsAddOrder from "../actions/addOrder";
import addOrder from "../actions/addOrder";
import CreateOrder from "../components/CreateOrder";
import UpdateOrder from "../components/UpdateOrder";
import {Snackbar} from "@mui/material";

const CREATE_ACTION = 'CREATE';
const UPDATE_ACTION = 'UPDATE';
const SUCCESS_MESSAGE = 'Success!'
const FAILED_MESSAGE = 'Failed!'
const DURATION = 5000;
const Order = () => {
    const {formatMessage} = useIntl();
    const {order, isLoading, errors} = useSelector(orderDetails => orderDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {customerId, status, orderDate, grossValue, id} = order;
    const [open, setOpen] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [success, setSuccess] = useState(false);
    const [action, setAction] = useState('');
    const location = useLocation();

    const orderId = getId(location.pathname)

    const handleGoBack = () => navigate(-1)

    const handleCreateOrder = (order) => {
        dispatch(actionsAddOrder.createOrder(order))
        responseProcessing(CREATE_ACTION, DURATION)
    }
    const handleUpdateOrder = (order) => {
        dispatch(actionsUpdateOrder.updateOrder(orderId, order))
        responseProcessing(UPDATE_ACTION, DURATION)
        handleChangeMode()
    }

    const responseProcessing = (action, duration) => {
        if (!errors.length){
            setSuccess(true)
            setOpenSnackbar(true)
            setAction(action)
            snackbarDelay(setOpenSnackbar, duration)
        } else {
            setOpenSnackbar(true)
            setAction(action)
            snackbarDelay(setOpenSnackbar, duration)
        }
    }

    const handleChangeMode = () => {
        setOpen(!open)
    }

    const handelCancel = () => {
        setOpen(false)
    }

    useEffect(() => {
        if (orderId !== "addOrder") {
            dispatch(actionsOrders.fetchOrder(orderId))
        }
    }, []);

    return (
        <Typography>
            {orderId === "addOrder" ? <CreateOrder
                    onSubmit={handleCreateOrder}
                    isLoading={isLoading}
                    errors
                    id={id}
                    fetchErrors={errors}
                    title={formatMessage({id: 'titleNewOrder'})}
                    handleCancel={handleGoBack}
                />
                : <>
                    {!open && <OrderDetails
                        id={orderId}
                        customerId={customerId}
                        status={status}
                        grossValue={grossValue}
                        orderDate={orderDate}
                        isLoading={isLoading}
                        title={formatMessage({id: 'title'})}
                        handleGoBack={handleGoBack}
                        handleChangeMode={handleChangeMode}
                    />
                    }
                    {open && <UpdateOrder
                        isLoading={isLoading}
                        onSubmit={handleUpdateOrder}
                        customerId={customerId}
                        status={status}
                        orderDate={orderDate}
                        grossValue={grossValue}
                        title={formatMessage({id: 'titleUpdateOrder'})}
                        handleCancel={handelCancel}
                    />
                    }
                </>
            }
            {success ? <Snackbar
                open={openSnackbar}
                message={SUCCESS_MESSAGE}
                action={action}/>
                : <Snackbar open={openSnackbar}
                message={FAILED_MESSAGE}
                action={action}/>
            }
        </Typography>
    );
}

const getId = (pathname) => pathname.split('/').pop()

const snackbarDelay = (setShowModal, duration) => {
    const delay = setTimeout(() => {
        setShowModal(false);
    }, duration);

    return () => clearTimeout(delay);
}


export default Order;