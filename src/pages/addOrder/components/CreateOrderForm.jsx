import React, {useState} from 'react';
import Button from "../../../components/Button";
import {Box, MenuItem, TextField} from "@mui/material";

const statuses = [
    {status: "NEW"},
    {status: "PAID"},
    {status: "CANCELED"}

]
const CreateOrderForm = ({handleSubmit, handleInput, status, items, dateOrder}) => {

    const handleInputChange = (event) => handleInput(event)

    const handleClickSubmit = (event) => handleSubmit(event)

    return (
        <Box component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off">
            <div>
                <form noValidate autoComplete="off" onSubmit={handleClickSubmit}>
                    <TextField
                        id="standard-basic"
                        select
                        label="STATUS"
                        name="status"
                        defaultValue={status}
                        onChange={handleInputChange}
                    >
                        {statuses.map((option) => (
                            <MenuItem key={option.status} value={option.status}>
                                {option.status}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField type="text" name="items" id="standard-basic" value={items} label="items" onChange={handleInputChange}></TextField>
                    <TextField type="date" name="dateOrder" id="standard-basic" value={dateOrder} onChange={handleInputChange}></TextField>
                    <Button
                        style={{width: "100px"}}
                        variant="contained"
                        type="submit"
                        onChange={handleInputChange}>
                        SUBMIT
                    </Button>
                </form>
            </div>
        </Box>
    );
}

export default CreateOrderForm;