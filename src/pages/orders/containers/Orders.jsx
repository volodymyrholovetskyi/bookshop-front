import React, {useEffect} from 'react';
import Typography from 'components/Typography';
import OrderList from "../components/OrderList";
import actionsOrders from "../actions/orderList"
import actionsDeleteOrder from "../actions/deleteOrder"
import {useDispatch, useSelector} from "react-redux";
import useLocalStorage from "../../../misc/hooks/useLocalStorage";
import {useIntl} from "react-intl";
import {useNavigate} from "react-router-dom"

const initFilterOrder = {
    search: {
        customerId: 0,
        status: 'NEW',
        from: new Date(),
        to: new Date(),
    },
    pageNumber: 0,
    size: 10
}

function Orders() {
    const dispatch = useDispatch();
    const { formatMessage } = useIntl();
    const { list, totalOrders, isLoading, errors } = useSelector(orders => orders);
    const [ filterOrder, setFilterOrder ] = useLocalStorage("filterOrder", initFilterOrder);
    const { customerId, status, from, to } = filterOrder.search;
    const { pageNumber, size } = filterOrder;
    const navigate = useNavigate();

    const handleClickNavigation = (pagePath) => {
        navigate(pagePath)
    }

    const handleChangePage = (event, newPage) => {
        setFilterOrder({
            ...filterOrder, pageNumber: newPage,
        })
    }

    const handleChangeRowsPerPage = (event) => {
        setFilterOrder({
            ...filterOrder, size: parseInt(event.target.value)
        })
    };

    const handleChangeSearch = (event) => {
        setFilterOrder({
            ...filterOrder,
            search: {
                ...filterOrder.search,
                [event.target.name]: event.target.value
            }
        });
    }

    const handleClickDeleteOrder = (id) => {
        dispatch(actionsDeleteOrder.deleteOrder(id, filterOrder))
    }

    useEffect(() => {
        const delay = setTimeout(() => {
            dispatch(actionsOrders.fetchOrderList(filterOrder));
        }, 500);

        return () => clearTimeout(delay);
    }, [filterOrder]);

    return (
        <Typography>
            <OrderList
                title={formatMessage({id: 'title'})}
                orders={list}
                errors={errors}
                isLoading={isLoading}
                handleDeleteOrder={handleClickDeleteOrder}
                handleClickNavigation={handleClickNavigation}
                handleChangeSearch={handleChangeSearch}
                customerId={customerId}
                status={status}
                from={from}
                to={to}
                totalOrders={totalOrders}
                page={pageNumber}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                rowsPerPage={size}
                handleChangePage={handleChangePage}
            />
        </Typography>
    );
}

export default Orders;