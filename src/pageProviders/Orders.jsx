import * as authorities from 'constants/authorities';
import React from 'react';

import PageAccessValidator from './components/PageAccessValidator';
import PageContainer from './components/PageContainer';
import {Provider} from "react-redux";
import rootReducer from '../pages/orders/reducers/orders'
import configureStore from "../misc/redux/configureStore";
import OrderListPage from "../pages/orders";

const store = configureStore(rootReducer);

const Orders = (props) => {

    return (
        <PageAccessValidator
            neededAuthorities={[
                authorities.ENABLE_SEE_ORDER_PAGE]}>
            <PageContainer>
                <Provider store={store}>
                    <OrderListPage {...props}></OrderListPage>
                </Provider>
            </PageContainer>
        </PageAccessValidator>
    );
};

export default Orders;