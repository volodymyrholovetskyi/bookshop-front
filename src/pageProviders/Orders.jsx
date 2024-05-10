import * as authorities from 'constants/authorities';
import OrdersPage from 'pages/orders';
import React from 'react';

import PageAccessValidator from './components/PageAccessValidator';
import PageContainer from './components/PageContainer';

const Orders = (props) => {
    return (
        <PageAccessValidator
            neededAuthorities={[authorities.ENABLE_SEE_SECRET_PAGE]}
        >
            <PageContainer>
                <SecretePage {...props} />
            </PageContainer>
        </PageAccessValidator>
    );
};

export default Orders;