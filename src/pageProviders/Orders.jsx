import * as authorities from 'constants/authorities';
import OrderPage from 'pages/orders';
import React from 'react';

import PageAccessValidator from './components/PageAccessValidator';
import PageContainer from './components/PageContainer';
import {Provider} from "react-redux";
import rootReducer from '../pages/orders/reducers/orders'
import configureStore from "../misc/redux/configureStore";

const store = configureStore(rootReducer);

const Orders = () => {

    return (
        <PageAccessValidator
            neededAuthorities={[authorities.ENABLE_SEE_ORDER_PAGE]}
        >
            <PageContainer>
                <Provider store={store}>
                    <OrderPage/>
                </Provider>
            </PageContainer>
        </PageAccessValidator>
    );
};

export default Orders;