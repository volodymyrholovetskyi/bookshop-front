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

const initFilterData = {
    search: {
        customerId: 0,
    },
    pageNumber: 0,
    size: 10
}

function Orders() {
    const dispatch = useDispatch();
    const {list, totalPage, isLoading, errors} = useSelector(orders => orders);
    const [filterData, setFilterData] = useLocalStorage("filterData", initFilterData);

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

    const handleClickDeleteOrder = (id) => {
        dispatch(actionsOrders.deleteOrder(id, filterData))
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
                <OrderFilterForm
                    handleChangeSearch={handleChangeSearch}
                    customerId={filterData.search.customerId}
                    status={filterData.search.status}
                    from={filterData.search.from}
                    to={filterData.search.to}
                />
                {isLoading ? <Loading/> : <OrderList
                    orders={list}
                    isLoading={isLoading}
                    errors={errors}
                    handleDeleteOrder={handleClickDeleteOrder}
                />}
                <OrderPagination
                    totalPage={totalPage}
                    handleClickNextPage={handleClickNextPage}
                    handleClickPrevPage={handleClickPrevPage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    rowsPerPage={filterData.size}
                />
            </Typography>
    );
}

export default Orders;