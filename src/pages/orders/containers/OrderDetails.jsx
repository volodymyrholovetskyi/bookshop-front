import React, {useEffect} from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import Typography from "../../../components/Typography";
import {useDispatch, useSelector} from "react-redux";
import OrderInfo from "../components/OrderInfo";
import actionsOrders from "../actions/orderDetails"
import {useIntl} from "react-intl";
import actionsUpdateOrder from "../actions/updateOrder";

const OrderDetails = () => {
    const {formatMessage} = useIntl();
    const {order, isLoading, errors} = useSelector(orders => orders);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {customerId, status, orderDate, grossValue} = order;
    const location = useLocation();

    const id = getId(location.pathname)

    const handleClickGoBack = () => navigate(-1)

    const handleUpdateOrder = (id, order) => {
        dispatch(actionsUpdateOrder.updateOrder(id, order))
    }

    useEffect(() => {
        dispatch(actionsOrders.fetchOrder(id))
    }, [])

    return (
        <Typography>
            <OrderInfo
                    id={id}
                    customerId={customerId}
                    status={status}
                    grossValue={grossValue}
                    orderDate={orderDate}
                    isLoading={isLoading}
                    errors={errors}
                    title={formatMessage({id: 'titleOrderDetails'})}
                    handleClickGoBack={handleClickGoBack}
                    handleUpdateOrder={handleUpdateOrder}
                />
        </Typography>
    );
}

const getId = (pathname) => pathname.split('/').pop()

export default OrderDetails;