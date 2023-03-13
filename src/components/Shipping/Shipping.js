import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import "./Shipping.css";

const Shipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const { user } = useAuth();
  return (
    <div>
      <h3 style={{ textAlign: "center" }}> Shipping Address</h3>
      <form className="shipping-from" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("Name")} />
        <input defaultValue={user.email} {...register("Email")} />
        {errors.email && (
          <span className="error-co">This field is required</span>
        )}
        <input
          placeholder="House-Information"
          defaultValue=""
          {...register("House-Information")}
        />
        <input placeholder="City" defaultValue="" {...register("City")} />
        <input placeholder="Phone" defaultValue="" {...register("Phone")} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
