import React from "react";
import {Button, MenuItem, Stack, TextField} from "@mui/material";
import Loading from "../../../components/Loading";

const statuses = [
    {status: "NEW"},
    {status: "PAID"},
    {status: "CANCELED"}

]
const AddOrderForm = ({handleSubmit, handleInput, status, items, orderDate, customerId, isLoading, error}) => {

    const handleInputChange = (event) => handleInput(event)
    const handleClickSubmit = (event) => handleSubmit(event)

    return (
        <div>
            {isLoading && <Loading/>}
            {!isLoading && <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <form noValidate autoComplete="off" onSubmit={handleClickSubmit}>
                    <Stack spacing={2} direction="column" sx={{marginBottom: 4}}>
                        <Stack spacing={4} direction="row" sx={{marginBottom: 4}}>
                            <TextField
                                id="customerId"
                                type="number"
                                name="customerId"
                                label="Customer ID"
                                fullWidth
                                value={customerId}
                                variant="outlined"
                                onChange={handleInputChange}>
                            </TextField>
                            <TextField
                                id="status"
                                select
                                label="Select a Status"
                                name="status"
                                fullWidth
                                defaultValue={status}
                                variant="outlined"
                                onChange={handleInputChange}>
                                {statuses.map((option) => (
                                    <MenuItem key={option.status} value={option.status}>
                                        {option.status}
                                    </MenuItem>))}>
                            </TextField>
                        </Stack>
                        <TextField
                            id="items"
                            type="text"
                            name="items"
                            value={items}
                            variant="outlined"
                            label="ITEMS"
                            onChange={handleInputChange}>
                        </TextField>
                        <TextField
                            id="orderDate"
                            type="date"
                            name="orderDate"
                            fullWidth
                            value={orderDate}
                            variant="outlined"
                            onChange={handleInputChange}>
                        </TextField>
                        <Button
                            style={{width: "100px"}}
                            variant="contained"
                            type="submit">
                            SUBMIT
                        </Button>
                    </Stack>
                </form>
            </div>}
        </div>
    );
}

export default AddOrderForm;