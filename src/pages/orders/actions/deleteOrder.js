import {
    REQUEST_DELETE_ORDER,
    RECEIVE_DELETE_ORDER,
    ERROR_DELETE_ORDER,
} from '../constans/actionType';
import axios from "axios";
import config from "../../../config";
import {fetchOrderList} from "./orderList";

const requestDeleteOrder = () => ({
    type: REQUEST_DELETE_ORDER,
});
const receiveOrderDelete = (res) => ({
    payload: res,
    type: RECEIVE_DELETE_ORDER,
});

const errorDeleteOrder = (errors) => ({
    payload: errors,
    type: ERROR_DELETE_ORDER,
});

const deleteById = (id) => {
    const {
        ORDER_API_URL,
    } = config;
    return axios.delete(`${ORDER_API_URL}/${id}`);
}

export const deleteOrder = (id, filter) => {
    return dispatch => {
        dispatch(requestDeleteOrder())
        return deleteById(id)
            .then((res) => {
                dispatch(receiveOrderDelete(res));
                dispatch(fetchOrderList(filter))
            })
            .catch((errors) => dispatch(errorDeleteOrder(errors)))
    }
}

const exportFunctions = {
    deleteOrder,
};

export default exportFunctions;