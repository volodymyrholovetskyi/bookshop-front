import React, {useEffect} from 'react';
import Typography from 'components/Typography';
import OrderList from "../components/OrderList";
import actionsOrders from "../actions/orders"
import {useDispatch, useSelector} from "react-redux";
import OrderFilterForm from "../components/OrderFilterForm";
import OrderPagination from "../components/OrderPagination";
import useLocalStorage from "../../../misc/hooks/useLocalStorage";
import Error from "../../../components/icons/Error"
import Card from "../../../components/Card";
import {useIntl} from "react-intl";
import {useNavigate} from "react-router-dom"
import Button from "../../../components/Button";
import AddIcon from "@mui/icons-material/Add";
import pagesURLs from "../../../constants/pagesURLs";
import * as pages from "../../../constants/pages";
import Loading from "../../../components/Loading";

const initFilterOrder = {
    search: {
        customerId: 1,
        status: 'NEW',
        from: new Date(),
        to: new Date(),
    },
    pageNumber: 0,
    size: 10
}

// const initNewOrder

function Orders() {
    const dispatch = useDispatch();
    const {formatMessage} = useIntl();
    const {list, totalPage, isLoading, errors} = useSelector(orders => orders);
    const [filterOrder, setFilterOrder] = useLocalStorage("filterOrder", initFilterOrder);
    const {customerId, status, from, to} = filterOrder.search;
    const navigate = useNavigate();

    const handleClickNavigation = (pagePath) => {
        navigate(pagePath)
    }

    const handleChangeRowsPerPage = (event) => {
        setFilterOrder({
            ...filterOrder, size: event.target.value
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

    const handleClickNextPage = () => {
        if (list.length !== 0) {
            setFilterOrder({
                ...filterOrder, pageNumber: filterOrder.pageNumber + 1
            });
        }
    }

    const handleClickPrevPage = () => {
        if (filterOrder.pageNumber !== 0) {
            setFilterOrder({
                ...filterOrder, pageNumber: filterOrder.pageNumber - 1
            });
        }
    }

    const handleClickDeleteOrder = (id) => {
        dispatch(actionsOrders.deleteOrder(id, filterOrder))
    }

    useEffect(() => {
        dispatch(actionsOrders.fetchOrders(filterOrder));
    }, [filterOrder]);

    if (errors.length > 0) {
        return <Error/>
    }

    return (
        <Typography>
            <h2>{formatMessage({id: 'title'})}</h2>
            {isLoading && <Loading/>}
            {!isLoading && <Card variant="outline">
                <div style={
                    {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                    <div>
                        <OrderFilterForm
                            handleChangeSearch={handleChangeSearch}
                            customerId={customerId}
                            status={status}
                            from={from}
                            to={to}
                        />
                    </div>
                    <div><Button
                        onClick={(() => {handleClickNavigation(`${pagesURLs[pages.addOrderPage]}`)})}
                        variant="outlined"
                        startIcon={<AddIcon/>}>ADD
                        ORDER</Button></div>
                </div>
                <OrderList
                    orders={list}
                    isLoading={isLoading}
                    errors={errors}
                    handleDeleteOrder={handleClickDeleteOrder}
                    handleClickNavigation={handleClickNavigation}
                />
                <OrderPagination
                    totalPage={totalPage}
                    handleClickNextPage={handleClickNextPage}
                    handleClickPrevPage={handleClickPrevPage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    rowsPerPage={filterOrder.size}
                />
            </Card>}
        </Typography>
    );
}

export default Orders;