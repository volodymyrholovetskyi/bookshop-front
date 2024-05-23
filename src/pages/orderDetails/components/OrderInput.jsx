import React from "react";
import {useForm} from "react-hook-form";
import Loading from "../../../components/Loading";
import styles from '../styles/OrderInput.module.css'
import Typography from "../../../components/Typography";
import {statuses} from "../../../constants/ statuses";
const OrderInput =
    ({
         onSubmit,
         isLoading,
         title,
         customerId,
         grossValue,
         orderDate,
         handleCancel,
        status,
     }) => {

        const {register, handleSubmit, formState: {errors}} = useForm();

        return (
            <Typography>
                <div className={styles.container}>
                    <h2 className={styles.title}>{title}</h2>
                    {isLoading && <Loading/>}
                    {!isLoading &&
                        <form onSubmit={handleSubmit(onSubmit)} onReset={handleCancel}>
                            <div className={styles.formBox}>
                                <label>Customer ID: </label>
                                <input type="number" defaultValue={customerId} {...register("customerId", {
                                    required: true,
                                    min: 1
                                })} />
                                {errors.customerId && errors.customerId.type === "required" && (
                                    <p className={styles.errorMsg}>Please Enter Customer ID!</p>)}
                                {errors.customerId && errors.customerId.type === "min" && (
                                    <p className={styles.errorMsg}>Customer ID cannot be less than 1.</p>)}
                            </div>
                            <div className={styles.formBox}>
                                <label>Select a Status: </label>
                                <select value={status} name="status"{...register('status')}>
                                    {statuses.map(status =>
                                        <option key={status.key} value={status.value}>{status.value}</option>
                                    )};
                                </select>
                            </div>
                            <div className={styles.formBox}>
                                <label>Gross value: </label>
                                <input defaultValue={grossValue} type="text"
                                       name="grossValue" {...register('grossValue', {
                                    required: true,
                                    pattern: /^\d+(\.\d{1,2})?$/,
                                })} />
                                {errors.grossValue && errors.grossValue.type === "required" && (
                                    <p className={styles.errorMsg}>Please Enter Gross Value!</p>)}
                                {errors.grossValue && errors.grossValue.type === "pattern" && (
                                    <p className={styles.errorMsg}>Gross Value Format Is Not Correct!</p>)}
                            </div>
                            <div className={styles.formBox}>
                                <label>Order date: </label>
                                <input type="date" defaultValue={orderDate}
                                       name="orderDate" {...register('orderDate', {required: true})} />
                                {errors.orderDate && errors.orderDate.type === "required" && (
                                    <p className={styles.errorMsg}>Please Enter Order Date!</p>)}
                            </div>
                            <div className={styles.buttonAction}>
                                <button
                                    className={`${styles.btn} ${styles.createButton}`}
                                    type="submit">
                                    create
                                </button>
                                <button
                                    className={`${styles.btn} ${styles.cancelButton}`}
                                    type="reset">
                                    cancel
                                </button>
                            </div>
                        </form>
                    }
                </div>
            </Typography>
        );
    }

export default OrderInput;