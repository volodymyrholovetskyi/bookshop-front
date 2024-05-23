import React, {useEffect, useState} from 'react';
import Typography from 'components/Typography';
import OrderList from "../components/OrderList";
import actionsOrders from "../actions/orderList"
import actionsDeleteOrder from "../actions/deleteOrder"
import {useDispatch, useSelector} from "react-redux";
import useLocalStorage from "../../../misc/hooks/useLocalStorage";
import {useIntl} from "react-intl";
import {useNavigate} from "react-router-dom"
import OrderFilter from "../components/OrderFilter";

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
    const [open, setOpen] = useState(false);
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

    const handleDeleteOrder = (id) => {
        dispatch(actionsDeleteOrder.deleteOrder(id, filterOrder))
    }

    const handleOpenForm = () => {
        setOpen(!open)
    }

    useEffect(() => {
        const delay = setTimeout(() => {
            dispatch(actionsOrders.fetchOrderList(filterOrder));
        }, 300);

        return () => clearTimeout(delay);
    }, [filterOrder]);

    return (
        <Typography>
            <OrderFilter
                onChangeSearch={handleChangeSearch}
                handleOpenForm={handleOpenForm}
                customerId={customerId}
                status={status}
                from={from}
                to={to}
                open={open}
            />
            <OrderList
                title={formatMessage({id: 'title'})}
                orders={list}
                errors={errors}
                isLoading={isLoading}
                handleDeleteOrder={handleDeleteOrder}
                handleClickNavigation={handleClickNavigation}
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