import React, {useEffect, useState} from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import Typography from "../../../components/Typography";
import Error from "../../../components/icons/Error";
import {useDispatch, useSelector} from "react-redux";
import OrderDetails from "../components/OrderDetails";
import actionsOrders from "../actions/orderDetails"
import {useIntl} from "react-intl";
import actionsUpdateOrder from "../actions/updateOrder";
import actionsAddOrder from "../actions/addOrder";
import addOrder from "../actions/addOrder";
import CreateOrder from "../components/CreateOrder";
import UpdateOrder from "../components/UpdateOrder";
import styles from "../styles/Order.module.css"

const Order = () => {
    const {formatMessage} = useIntl();
    const {order, isLoading, errors} = useSelector(orderDetails => orderDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {customerId, status, orderDate, grossValue} = order;
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const id = getId(location.pathname)

    const handleGoBack = () => navigate(-1)

    const handleUpdateOrder = (order) => {
        dispatch(actionsUpdateOrder.updateOrder(id, order))
        handleGoBack()
    }

    const handleCreateOrder = (order) => {
        dispatch(actionsAddOrder.createOrder(order))
        handleGoBack()
    }

    const handleChangeMode = () => {
        setOpen(!open)
    }

    const handelCancel = () => {
        setOpen(false)
    }

    useEffect(() => {
        if (id !== "addOrder") {
            dispatch(actionsOrders.fetchOrder(id))
        }
    }, []);

    if (errors.length) {
        return (
            <div className={styles.errorContainer}>
                {errors.map((error) => (
                    <div className={styles.errorBox}>
                        <Error color="warning"></Error>
                        <p className={styles.errorMessage}>{error.code}</p>
                        <p className={styles.errorMessage}>{error.description}</p>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <Typography>
            {id === "addOrder" ? <CreateOrder
                    onSubmit={handleCreateOrder}
                    isLoading={isLoading}
                    fetchErrors={errors}
                    title={formatMessage({id: 'titleNewOrder'})}
                    handleCancel={handleGoBack}
                />
                : <>
                    {!open && <OrderDetails
                        id={id}
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
        </Typography>
    );
}

const getId = (pathname) => pathname.split('/').pop()

export default Order;