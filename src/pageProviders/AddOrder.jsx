import PageContainer from "./components/PageContainer";
import AddOrderPage from "../pages/addOrder";
import React from "react";
import configureStore from "../misc/redux/configureStore";
import rootReducer from "../pages/addOrder/reducers/order";
import {Provider} from "react-redux";

const store = configureStore(rootReducer);

const AddOrder = (props) => {

    return (
        <PageContainer>
            <Provider store={store}>
                <AddOrderPage {...props}/>
            </Provider>
        </PageContainer>
    );
}

export default AddOrder;