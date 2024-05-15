import * as authorities from 'constants/authorities';
import OrderDetailsPage from 'pages/orderDetails';
import React from 'react';

import PageAccessValidator from './components/PageAccessValidator';
import PageContainer from './components/PageContainer';

const OrderDetails = (props) => {
    return (
        <PageAccessValidator
            neededAuthorities={[authorities.ENABLE_SEE_ORDER_DETAILS_PAGE]}
        >
            <PageContainer>
                <OrderDetailsPage {...props} />
            </PageContainer>
        </PageAccessValidator>
    );
};

export default OrderDetails;