import React from "react";
import {useNavigate} from "react-router-dom";
import {useIntl} from "react-intl";
import {useDispatch, useSelector} from "react-redux";
import actionOrder from "../actions/addOrder"
import AddOrder from "../components/AddOrder";

const CreateOrder = () => {
    const {formatMessage} = useIntl();
    const navigate = useNavigate()
    const {isLoading, errors} = useSelector(orders => orders)
    const dispatch = useDispatch();
    const handleCancel = () => navigate(-1)

    const onSubmit = (order) => {
        dispatch(actionOrder.createOrder(order))
    }

    return (
            <AddOrder
                onSubmit={onSubmit}
                isLoading={isLoading}
                fetchErrors={errors}
                title={formatMessage({id: 'titleNewOrder'})}
                handleCancel={handleCancel}
            />
    )
}

export default CreateOrder;