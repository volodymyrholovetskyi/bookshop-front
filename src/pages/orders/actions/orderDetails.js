import {
    ERROR_RECEIVE_ORDER,
    RECEIVE_ORDER,
    REQUEST_ORDER} from "../constans/actionType";
import axios from "axios";
import config from "../../../config";
import {deleteOrder, fetchOrderList} from "./orderList";

const requestOrderDetails = () => ({
    type: REQUEST_ORDER,
});

const receiveOrderDetails = (res) => ({
    payload: res,
    type: RECEIVE_ORDER,
});

const errorReceiveOrderDetails = (errors) => ({
    payload: errors,
    type: ERROR_RECEIVE_ORDER,
});

const fetchById = (id) => {
    const {
        ORDER_API_URL,
    } = config;
    return axios.get(`${ORDER_API_URL}/${id}`);
}

export const fetchOrder = (id) => {
    return dispatch => {
        dispatch(requestOrderDetails())
        return fetchById(id)
            .then((res) => dispatch(receiveOrderDetails(res)))
            .catch((errors) => dispatch(errorReceiveOrderDetails(errors)))
    }
}

const exportFunctions = {
    fetchOrder
};

export default exportFunctions;
