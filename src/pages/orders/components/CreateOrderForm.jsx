import React, {useState} from 'react';
import Button from "../../../components/Button";
import {Box, MenuItem, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         "& > *": {
//             margin: theme.spacing(1),
//             width: "45ch"
//         },
//     },
// }));

const initOrder = {
    status: "",
    items: [],
    orderDate: "",
}

const statuses = [
    {status: "NEW"},
    {status: "PAID"},
    {status: "CANCELED"}

]
const CreateOrderForm = ({handleCreateOrder}) => {
    // const classes = useStyles();
    const [order, setOrder] = useState(initOrder);
    const navigate = useNavigate()
    const [error, setError] = useState();

    const handleInputChange = (event) => {
        setOrder({...order, [event.target.name]: event.target.value});
    }

const handleClickGoBack = () => navigate(-1)
    const handleClickSubmit = (e) => {
        e.preventDefault();
        if (!order.status || !order.items || !order.orderDate) {
            setError("Please input all field");
        } else {
            dispath(createOrder)
        }
    }

    return (
        <Box component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off">
            <div>
                <Button
                    style={{width: "100px", marginTop: "20px"}}
                    variant="contained"
                onClick={handleClickGoBack}>
                    GO BACK
                </Button>
                <h2>Create Order</h2>
                <form noValidate autoComplete="off" onSubmit={handleClickSubmit}>
                    <TextField
                        id="standard-basic"
                        select
                        label="STATUS"
                        defaultValue="NEW"
                        onChange={handleInputChange}
                    >
                        {statuses.map((option) => (
                            <MenuItem key={option.status} value={option.status}>
                                {option.status}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField type="text" id="standard-basic" value={order.items} label="items" onChange={handleInputChange}></TextField>
                    <TextField type="date" id="standard-basic" value={order.orderDate} onChange={handleInputChange}></TextField>
                    <Button
                        style={{width: "100px"}}
                        variant="contained"
                        type="submit"
                        onChange={handleInputChange}
                    >
                        SUBMIT
                    </Button>
                </form>
            </div>
        </Box>
    );
}

export default CreateOrderForm;