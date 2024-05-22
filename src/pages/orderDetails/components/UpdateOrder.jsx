import React from "react";
import {useForm} from "react-hook-form";
import Loading from "../../../components/Loading";
import styles from '../styles/CreateOrder.module.css'
import Typography from "../../../components/Typography";

const UpdateOrder =
    ({
         isLoading,
         onSubmit,
         customerId,
         status,
         orderDate,
         grossValue,
         title,
         handleCancel
     }) => {

        const {register, handleSubmit, formState: {errors}} = useForm();

        const handleClickCancel = () => {
            handleCancel(false)
        }

        return (
            <Typography>
                <div className={styles.container}>
                    <h2>{title}</h2>
                    {isLoading && <Loading/>}
                    {!isLoading &&
                        <form className={styles.createForm} onSubmit={handleSubmit(onSubmit)}
                              onReset={handleClickCancel}>
                            <div className={styles.createFormBox}>
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
                            <div className={styles.createFormBox}>
                                <label>Select a Status: </label>
                                <select defaultValue={status} name="status"{...register('status')}>
                                    <option value={"NEW"}>NEW</option>
                                    <option value={"PAID"}>PAID</option>
                                    <option value={"SHIPPED"}>SHIPPED</option>
                                    <option value={"CANCELED"}>CANCELED</option>
                                </select>
                            </div>
                            <div className={styles.createFormBox}>
                                <label>Gross value: </label>
                                <input defaultValue={grossValue} type="text"
                                       name="grossValue" {...register('grossValue', {
                                    required: true,
                                    pattern: /^\d+(\.\d{1,2})?$/,
                                })} />
                                {errors.grossValue && errors.grossValue.type === "required" && (
                                    <p className={styles.errorMsg}>Please Enter Gross Value!</p>)}
                                {errors.grossValue && errors.grossValue.type === "pattern" && (
                                    <p className={styles.errorMsg}>Please Enter A Valid Gross Value!</p>)}
                            </div>
                            <div className={styles.createFormBox}>
                                <label>Order date: </label>
                                <input type="date" defaultValue={orderDate}
                                       name="orderDate" {...register('orderDate', {required: true})} />
                                {errors.orderDate && errors.orderDate.type === "required" && (
                                    <p className={styles.errorMsg}>Please Enter Order Date!.</p>)}
                            </div>
                            <div className={styles.buttonBox}>
                                <button
                                    className={`${styles.btn} ${styles.createButton}`}
                                    type="submit">
                                    update
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

export default UpdateOrder;