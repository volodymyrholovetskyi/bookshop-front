import {
    ERROR_ADD_ORDER,
    REQUEST_ADD_ORDER,
    RESPONSE_ADD_ORDER
} from '../constans/actionType';
import axios from "axios";
import config from "../../../config";

const requestAddOrder = () => ({
    type: REQUEST_ADD_ORDER,
});
const responseAddOrder = (res) => ({
    payload: res,
    type: RESPONSE_ADD_ORDER,
});

const errorAddOrder = (errors) => ({
    payload: errors,
    type: ERROR_ADD_ORDER,
});

const addOrder = (order) => {
    const {
        ORDER_API_URL,
    } = config;
    return axios.post(`${ORDER_API_URL}`, order);
}

export const createOrder = (order) => {
    return dispatch => {
        dispatch(requestAddOrder())
        return addOrder(order)
            .then((res) => {
                dispatch(responseAddOrder(res));
            })
            .catch((errors) => dispatch(errorAddOrder(errors)))
    }
}

const exportFunctions = {
    createOrder,
};

export default exportFunctions;
