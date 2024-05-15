import React, {useState} from 'react';
import Button from "../../../components/Button";
import AddIcon from "@mui/icons-material/Add";
const initOrder = {
    status: '',
    items: [],
    orderDate: ''
}
const AddOrder = ({handleCreateOrder}) => {
    const [order, setOrder] = useState(initOrder);

    const handleClickSubmitOrder = (order) => {
        handleCreateOrder(order)
    }

    return (
        <Button variant="outlined" startIcon={<AddIcon/>}>ADD ORDER</Button>
    );
}

export default AddOrder;