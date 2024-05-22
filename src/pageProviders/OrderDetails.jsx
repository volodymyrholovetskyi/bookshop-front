import PageContainer from './components/PageContainer';
import {Provider} from "react-redux";
import rootReducer from '../pages/orderDetails/reducers/order'
import configureStore from "../misc/redux/configureStore";
import OrderDetailsPage from "../pages/orderDetails"
import * as authorities from "../constants/authorities";
import PageAccessValidator from "./components/PageAccessValidator";

const store = configureStore(rootReducer);

const Order = (props) => {

    return (
        <PageAccessValidator
            neededAuthorities={[
                authorities.ENABLE_SEE_ORDER_DETAILS_PAGE]}>
            <PageContainer>
                <Provider store={store}>
                    <OrderDetailsPage {...props}></OrderDetailsPage>
                </Provider>
            </PageContainer>
        </PageAccessValidator>
    );
};

export default Order;