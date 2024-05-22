import React from "react";
import {useForm} from "react-hook-form";
import Loading from "../../../components/Loading";
import styles from '../styles/CreateOrder.module.css'
import Typography from "../../../components/Typography";
import Error from "../../../components/icons/Error";

const AddOrder =
    ({
         onSubmit,
         isLoading,
         fetchErrors,
         title,
         handleCancel,
     }) => {

        const {register, handleSubmit, formState: {errors}} = useForm();

        if (fetchErrors.length > 0) {
            return (
                <div>
                    {errors.map((error) => (
                        <Error color="warning">{error}</Error>
                    ))}
                </div>)
        }

        return (
            <Typography>
                <div className={styles.container}>
                    <h2 className={styles.title}>{title}</h2>
                    {isLoading && <Loading/>}
                    {!isLoading &&
                        <form className={styles.createForm} onSubmit={handleSubmit(onSubmit)} onReset={handleCancel}>
                            <div className={styles.createFormBox}>
                                <label>Customer ID: </label>
                                <input type="number" defaultValue={0} {...register("customerId", {
                                    required: true,
                                    min: 1
                                })} />
                                {errors.customerId && errors.customerId.type === "required" && (
                                    <p className={styles.errorMsg}>Please Enter Customer ID!</p>)}
                                {errors.customerId && errors.customerId.type === "min" && (
                                    <p className={styles.errorMsg}>Customer ID cannot be less than 1.</p>)}
                            </div>
                            <div className={styles.createFormBox}>
                                <label>Select a Status: </label>
                                <select name="status"{...register('status')}>
                                    <option value={"NEW"}>NEW</option>
                                    <option value={"PAID"}>PAID</option>
                                    <option value={"SHIPPED"}>SHIPPED</option>
                                    <option value={"CANCELED"}>CANCELED</option>
                                </select>
                            </div>
                            <div className={styles.createFormBox}>
                                <label>Gross value: </label>
                                <input defaultValue={0} type="text" name="grossValue" {...register('grossValue', {
                                    required: true,
                                    pattern: /^\d+(\.\d{1,2})?$/,
                                })} />
                                {errors.grossValue && errors.grossValue.type === "required" && (
                                    <p className={styles.errorMsg}>Please Enter Gross Value!</p>)}
                                {errors.grossValue && errors.grossValue.type === "pattern" && (
                                    <p className={styles.errorMsg}>Gross Value Format Is Not Correct!</p>)}
                            </div>
                            <div className={styles.createFormBox}>
                                <label>Order date: </label>
                                <input type="date" name="orderDate" {...register('orderDate', {required: true})} />
                                {errors.orderDate && errors.orderDate.type === "required" && (
                                    <p className={styles.errorMsg}>Please Enter Order Date!</p>)}
                            </div>
                            <div className={styles.buttonBox}>
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

export default AddOrder;