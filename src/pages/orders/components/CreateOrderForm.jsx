import React from "react";
import Button from "../../../components/Button";
import {useForm} from "react-hook-form";
import Loading from "../../../components/Loading";
import styles from '../styles/CreateOrderForm.module.css'
import Typography from "../../../components/Typography";
import Error from "../../../components/icons/Error";

const CreateOrderForm =
    ({
         onSubmit,
         isLoading,
         fetchErrors,
         title,
         handleClickGoBack,
     }) => {

        const {register, handleSubmit, formState: {errors}} = useForm();

        if (fetchErrors.length > 0) {
            return (
                <div>
                    {errors.map((error) => (
                        <Error color="warning">{error}</Error>
                    ))}
                </div>)}

        return (
            <Typography>
                <Button
                    variant="contained"
                    onClick={handleClickGoBack}>
                    GO BACK
                </Button>
                <div className={styles.container}>
                    <h2 className={styles.title}>{title}</h2>
                    {isLoading && <Loading/>}
                    {!isLoading &&
                        <form className={styles.createForm} onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.createFormBox}>
                                <label>Customer ID: </label>
                                <input type="number" defaultValue={0} {...register("customerId", {
                                    required: true,
                                    min: 1
                                })} />
                                {errors.customerId && errors.customerId.type === "required" && (
                                    <p className={styles.errorMsg}>Customer ID is required.</p>)}
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
                                <label>Items: </label>
                                <input type="text" name="items" {...register('items', {
                                    required: true,
                                    minLength: 2
                                })} />
                                {errors.items && errors.items.type === "required" && (
                                    <p className={styles.errorMsg}>Item is required.</p>)}
                                {errors.items && errors.items.type === "minLength" && (
                                    <p className={styles.errorMsg}>Item should be at-least 2 characters.</p>)}
                            </div>
                            <div className={styles.createFormBox}>
                                <label>Order date: </label>
                                <input type="date" name="orderDate" {...register('orderDate', {required: true})} />
                                {errors.orderDate && errors.orderDate.type === "required" && (
                                    <p className={styles.errorMsg}>Order date is required.</p>)}
                            </div>
                            <button
                                className={styles.buttonSubmit}
                                type="submit">
                                SUBMIT
                            </button>
                        </form>
                    }
                </div>
            </Typography>
        );
    }

export default CreateOrderForm;