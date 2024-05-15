import React, {useEffect} from 'react';
import Typography from 'components/Typography';
import OrderList from "../components/OrderList";
import actionsOrders from "../actions/orders"
import {useDispatch, useSelector} from "react-redux";
import OrderFilterForm from "../components/OrderFilterForm";
import OrderPagination from "../components/OrderPagination";
import useLocalStorage from "../../../misc/hooks/useLocalStorage";
import Loading from "../../../components/Loading";
import Error from "../../../components/icons/Error"
import AddOrder from "../components/AddOrder";
import Card from "../../../components/Card";
import {useIntl} from "react-intl";

const initFilterData = {
    search: {
        customerId: 1,
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
    const {list, totalPage, isLoading, errors} = useSelector(orders => orders);
    const [filterData, setFilterData] = useLocalStorage("filterData", initFilterData);
    const {customerId, status, from, to} = filterData.search;

    const handleChangeRowsPerPage = (event) => {
        setFilterData({
            ...filterData, size: event.target.value
        })
    };

    const handleChangeSearch = (event) => {
        setFilterData({
            ...filterData,
            search: {
                ...filterData.search,
                [event.target.name]: event.target.value
            }
        });
    }

    const handleClickNextPage = () => {
        if (list.length !== 0) {
            setFilterData({
                ...filterData, pageNumber: filterData.pageNumber + 1
            });
        }
    }

    const handleClickPrevPage = () => {
        if (filterData.pageNumber !== 0) {
            setFilterData({
                ...filterData, pageNumber: filterData.pageNumber - 1
            });
        }
    }

    const handleDeleteOrder = (id) => {
        dispatch(actionsOrders.deleteOrder(id, filterData))
    }

    const handleCreateOrder = (order) => {
        // dispatch(actionsOrders.createOrder(order))
    }

    const handleClickDetailsOrder = (id) => {
        dispatch(actionsOrders.fetchOrder(id))
    }

    useEffect(() => {
        dispatch(actionsOrders.fetchOrders(filterData));
    }, [filterData]);

    if (errors.length > 0) {
        return <Error/>
    }

    return (
        <Typography>
            <h2>{formatMessage({ id: 'title' })}</h2>
            <Card variant="outline">
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
                    <div><AddOrder handleCreateOrder={handleCreateOrder}/></div>
                </div>
                {isLoading ? <Loading/> : <OrderList
                    orders={list}
                    isLoading={isLoading}
                    errors={errors}
                    handleDeleteOrder={handleDeleteOrder}
                />}
            <OrderPagination
                    totalPage={totalPage}
                    handleClickNextPage={handleClickNextPage}
                    handleClickPrevPage={handleClickPrevPage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    rowsPerPage={filterData.size}
                />
                </Card>
        </Typography>
    );
}

export default Orders;