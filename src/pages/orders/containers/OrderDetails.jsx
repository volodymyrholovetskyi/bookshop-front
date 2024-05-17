import React, {useEffect} from 'react'
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Typography from "../../../components/Typography";
import {useDispatch, useSelector} from "react-redux";
import OrderInfo from "../components/OrderInfo";
import Loading from "../../../components/Loading";
import actionsOrders from "../actions/orderDetails"
import {useIntl} from "react-intl";
import Button from "../../../components/Button";

const OrderDetails = () => {
    const {formatMessage} = useIntl();
    const {order, isLoading} = useSelector(orders => orders);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {customerId, status, orderDate, items} = order;
    const location = useLocation();

    const id = getId(location.pathname)

    const handleClickGoBack = () => navigate(-1)

    useEffect(() => {
        dispatch(actionsOrders.fetchOrder(id))
    }, [])

    return (
        <Typography>
            <Button
                style={{width: "100px", marginTop: "20px"}}
                variant="contained"
                onClick={handleClickGoBack}>
                GO BACK
            </Button>
            <h2>{formatMessage({id: 'title'})}</h2>
            {isLoading && <Loading/>}
            {!isLoading &&
                <OrderInfo
                    id={id}
                    customerId={customerId}
                    status={status}
                    items={items}
                    orderDate={orderDate}
                />
            }
        </Typography>
    );
}

const getId = (pathname) => pathname.split('/').pop()

export default OrderDetails;