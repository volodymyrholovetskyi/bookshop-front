import {
    REQUEST_ORDER_LIST,
    RECEIVE_ORDER_LIST,
    ERROR_RECEIVE_ORDER_LIST,
} from '../constans/actionType';
import axios from "axios";
import config from "../../../config";

const requestOrderList = () => ({
    type: REQUEST_ORDER_LIST,
});
const receiveOrderList = (res) => ({
    payload: res,
    type: RECEIVE_ORDER_LIST,
});
const errorReceiveOrderList = (errors) => ({
    payload: errors,
    type: ERROR_RECEIVE_ORDER_LIST,
});

const fetchAll = (search) => {
    const {
        ORDER_API_URL,
    } = config;
    return axios.post(`${ORDER_API_URL}/_list`, search);
};

export const fetchOrderList = (orderFilter) => {
    return dispatch => {
        dispatch(requestOrderList());
        return fetchAll(orderFilter)
            .then((res) => dispatch(receiveOrderList(res)))
            .catch((errors) => dispatch(errorReceiveOrderList(errors)))
    };
}

const exportFunctions = {
    fetchOrderList,
};

export default exportFunctions;
