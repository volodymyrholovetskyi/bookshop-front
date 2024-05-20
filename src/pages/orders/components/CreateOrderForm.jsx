import React from "react";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";
import Loading from "../../../components/Loading";

const CreateOrderForm =
    ({
         onSubmit,
         isLoading,
         title,
         handleClickGoBack,
     }) => {

        const {register, handleSubmit, formState: {errors}} = useForm();

        return (
            <div>
                <Button
                    style={{width: "100px", marginTop: "20px"}}
                    variant="contained"
                    onClick={handleClickGoBack}>
                    GO BACK
                </Button>
                <h2>{title}</h2>
                {isLoading && <Loading/>}
                {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Customer ID: </label>
                        <input type="number" defaultValue={0} {...register("customerId", {required: true, min: 1})} />
                        {errors.customerId && errors.customerId.type === "required" && (
                            <p>Customer ID is required.</p>)}
                        {errors.customerId && errors.customerId.type === "min" && (
                            <p>Customer ID cannot be less than 1.</p>)}
                    </div>
                    <div>
                        <label>Select a Status: </label>
                        <select name="status"{...register('status')}>
                            <option value={"NEW"}>NEW</option>
                            <option value={"PAID"}>PAID</option>
                            <option value={"SHIPPED"}>SHIPPED</option>
                            <option value={"CANCELED"}>CANCELED</option>
                        </select>
                    </div>
                    <div>
                        <label>Items: </label>
                        <input type="text" name="items" {...register('items', {required: true, minLength: 2})} />
                        {errors.items && errors.items.type === "required" && (
                            <p>Item is required.</p>)}
                        {errors.items && errors.items.type === "minLength" && (
                            <p>Item should be at-least 2 characters.</p>)}
                    </div>
                    <div>
                        <label>Order date: </label>
                        <input type="date" name="orderDate" {...register('orderDate', {required: true})} />
                        {errors.orderDate && errors.orderDate.type === "required" && (
                            <p>Order date is required.</p>)}
                    </div>
                    <button
                        style={{width: "100px"}}
                        type="submit">
                        SUBMIT
                    </button>
                </form>
                }
            </div>
        );
    }

export default CreateOrderForm;