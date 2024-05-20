import React, {useState} from "react";
import FilterListIcon from '@mui/icons-material/FilterList';
import styles from '../styles/OrderList.module.css'
import {IconButton} from "@mui/material";

const OrderFilterForm = ({handleChangeSearch, customerId, status, from, to}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpenForm = () => {
        setOpen(!open)
    }
    const onChangeSearch = (event) => {
        handleChangeSearch(event)
    }

    return (
        <>
            <IconButton onClick={handleClickOpenForm}><FilterListIcon></FilterListIcon></IconButton>
            {open && <div className={styles.filterFormContainer}>
                <h2>Search by:</h2>
                <div className={styles.filterFormBox}>
                    <label>Customer ID: </label>
                    <input type="number"
                           name={'customerId'}
                           value={customerId}
                           onChange={onChangeSearch}/>
                </div>
                <div className={styles.filterFormBox}>
                    <label>Select a Status: </label>
                    <select name="status"
                            value={status}
                            onChange={onChangeSearch}>
                        <option value={"NEW"}>NEW</option>
                        <option value={"PAID"}>PAID</option>
                        <option value={"SHIPPED"}>SHIPPED</option>
                        <option value={"CANCELED"}>CANCELED</option>
                    </select>
                </div>
                <div className={styles.filterFormBox}>
                    <label>Date from: </label>
                    <input type="date"
                           value={from}
                           name={'from'}
                           onChange={onChangeSearch}/>
                </div>
                <div className={styles.filterFormBox}>
                    <label>Date to: </label>
                    <input type="date"
                           value={to}
                           name={'to'}
                           onChange={onChangeSearch}/>
                </div>
            </div>}
        </>
    );
}

export default OrderFilterForm;