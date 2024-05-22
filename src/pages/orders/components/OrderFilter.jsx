import React from "react";
import FilterListIcon from '@mui/icons-material/FilterList';
import styles from '../styles/OrderFilter.module.css'
import {IconButton} from "@mui/material";

const OrderFilter =
    ({
         onChangeSearch,
         handleOpenForm,
         customerId,
         status,
         from,
         to,
         open,
     }) => {

        return (
            <div>
                <IconButton onClick={handleOpenForm}><FilterListIcon></FilterListIcon></IconButton>
                {open && <div className={styles.container}>
                    <h2>Search by:</h2>
                    <div className={styles.formBox}>
                        <label>Customer ID: </label>
                        <input type="number"
                               name={'customerId'}
                               value={customerId}
                               onChange={onChangeSearch}/>
                    </div>
                    <div className={styles.formBox}>
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
                    <div className={styles.formBox}>
                        <label>Date from: </label>
                        <input type="date"
                               value={from}
                               name={'from'}
                               onChange={onChangeSearch}/>
                    </div>
                    <div className={styles.formBox}>
                        <label>Date to: </label>
                        <input type="date"
                               value={to}
                               name={'to'}
                               onChange={onChangeSearch}/>
                    </div>
                </div>
                }
            </div>
        );
    }

export default OrderFilter;