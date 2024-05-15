import React, {useState} from "react";
import FilterListIcon from '@mui/icons-material/FilterList';
import Card from "../../../components/Card";
import {IconButton, outlinedInputClasses} from "@mui/material";

const OrderFilterForm = ({handleChangeSearch, customerId, status, from, to}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpenForm = () => {
        setOpen(!open)
    }
    const onChangeSearch = (event) => {
        handleChangeSearch(event)
    }

    return (
        <div>
            <IconButton onClick={handleClickOpenForm}><FilterListIcon></FilterListIcon></IconButton>
            {open && <Card>
                <input type="text"
                       placeholder="Search by customerId..."
                       name={'customerId'}
                       value={customerId}
                       onChange={onChangeSearch}/>
                <input type="text"
                       placeholder="Search by status..."
                       value={status}
                       name={'status'}
                       onChange={onChangeSearch}/>
                <input type="date"
                       placeholder="Select data start..."
                       value={from}
                       name={'from'}
                       onChange={onChangeSearch}/>
                <input type="date"
                       placeholder="Select data end..."
                       value={to}
                       name={'to'}
                       onChange={onChangeSearch}/>
            </Card>}
        </div>
    );
}

export default OrderFilterForm;