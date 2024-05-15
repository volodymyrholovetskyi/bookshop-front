import {
    ERROR_DELETE_ORDER,
    ERROR_RECEIVE_ORDERS,
    ERROR_RECEIVE_ORDER,
    RECEIVE_DELETE_ORDER,
    RECEIVE_ORDERS,
    RECEIVE_ORDER,
    REQUEST_DELETE_ORDER,
    REQUEST_ORDER,
    REQUEST_ORDERS
} from '../constans/actionType';
import axios from "axios";
import config from "../../../config";

const receiveOrders = (res) => ({
    payload: res,
    type: RECEIVE_ORDERS,
});

const requestOrders = () => ({
    type: REQUEST_ORDERS,
});

const errorReceiveOrders = (errors) => ({
    payload: errors,
    type: ERROR_RECEIVE_ORDERS,
});
const requestOrder = () => ({
    type: REQUEST_ORDER,
});

const receiveOrder = (res) => ({
    payload: res,
    type: RECEIVE_ORDER,
});

const errorReceiveOrder = (errors) => ({
    payload: errors,
    type: ERROR_RECEIVE_ORDER,
});
const receiveDeleteOrder = (res) => ({
    payload: res,
    type: RECEIVE_DELETE_ORDER,
});

const requestDeleteOrder = () => ({
    type: REQUEST_DELETE_ORDER,
});

const errorDeleteOrder = (errors) => ({
    payload: errors,
    type: ERROR_DELETE_ORDER,
});

const findOrders = (search) => {
    const {
        BASE_URL,
    } = config;
    return axios.post(`${BASE_URL}/_list`, search);
};

const deleteById = (id) => {
    const {
        BASE_URL,
    } = config;
    return axios.delete(`${BASE_URL}/${id}`);
}

const findById = (id) => {
    const {
        BASE_URL,
    } = config;
    return axios.get(`${BASE_URL}/${id}`);
}

export const fetchOrders = (search) => {
    return dispatch => {
        dispatch(requestOrders());
        return findOrders(search)
            .then((res) => dispatch(receiveOrders(res)))
            .catch((errors) => dispatch(errorReceiveOrders(errors)))
    };
}

export const fetchOrder = (id) => {
    return dispatch => {
        dispatch(requestOrder())
        return findById(id)
            .then((res) => dispatch(receiveOrder(res)))
            .catch((errors) => dispatch(errorReceiveOrder(errors)))
    }
}
export const deleteOrder = (id, search) => {
    return dispatch => {
        dispatch(requestDeleteOrder())
        return deleteById(id)
            .then((res) => {
                dispatch(receiveDeleteOrder(res));
                dispatch(fetchOrders(search))
            })
            .catch((errors) => dispatch(errorDeleteOrder(errors)))
    }
}

const exportFunctions = {
    fetchOrders,
    deleteOrder,
    fetchOrder
};

export default exportFunctions;
