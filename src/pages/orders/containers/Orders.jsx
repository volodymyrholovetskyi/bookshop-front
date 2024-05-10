import { useIntl } from 'react-intl';
import React from 'react';
import Typography from 'components/Typography';

function Orders() {
    const { formatMessage } = useIntl();

    return (
        <Typography>
            {formatMessage({ id: 'title' })}
        </Typography>
    );
}

export default Orders;