import * as authorities from 'constants/authorities';
import React from 'react';

import PageAccessValidator from './components/PageAccessValidator';
import PageContainer from './components/PageContainer';
import {Provider} from "react-redux";
import rootReducer from '../pages/orders/reducers/orders'
import configureStore from "../misc/redux/configureStore";
import {Outlet} from "react-router-dom";

const store = configureStore(rootReducer);

const Order = (props) => {

    return (
        <PageAccessValidator
            neededAuthorities={[
                authorities.ENABLE_SEE_ORDER_PAGE,
                authorities.ENABLE_SEE_ADD_ORDER_PAGE,
                authorities.ENABLE_SEE_ORDER_DETAILS_PAGE]}>
            <PageContainer>
                <Provider store={store}>
                    <Outlet {...props}></Outlet>
                </Provider>
            </PageContainer>
        </PageAccessValidator>
    );
};

export default Order;