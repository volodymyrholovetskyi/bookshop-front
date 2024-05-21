import {
    ERROR_UPDATE_ORDER,
    REQUEST_UPDATE_ORDER,
    RESPONSE_UPDATE_ORDER} from "../constans/actionType";
import axios from "axios";
import config from "../../../config";
import {fetchOrder} from "./orderDetails";

const requestUpdateOrder = () => ({
    type: REQUEST_UPDATE_ORDER,
});

const receiveUpdateOrder = (res) => ({
    payload: res,
    type: RESPONSE_UPDATE_ORDER,
});

const errorUpdateOrder = (errors) => ({
    payload: errors,
    type: ERROR_UPDATE_ORDER,
});

const updateOrderById = (id, order) => {
    const {
        ORDER_API_URL,
    } = config;
    return axios.put(`${ORDER_API_URL}/${id}`, order);
}

export const updateOrder = (id, order) => {
    return dispatch => {
        dispatch(requestUpdateOrder())
        return updateOrderById(id, order)
            .then((res) => {
                dispatch(receiveUpdateOrder(res));
                dispatch(fetchOrder(id))
            })
            .catch((errors) => dispatch(errorUpdateOrder(errors)))
    }
}

const exportFunctions = {
    updateOrder
};

export default exportFunctions;