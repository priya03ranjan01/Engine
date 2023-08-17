import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import CustomSelect from "../../components/CustomSelect";
import OrderSymbol from "./OrderSymbol";
import FormInputs from "../../components/FormInputs";
import SubmitButton from "../../components/SubmitButton";

export default function NewOrderForm({toggleModal,id}) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    trigger,
    watch,
  } = useForm();

  const defaultValues = {
    symbol: "",
    quantity: "",
    price: "",
    side: "",
    ordertype: "",
  };

  // console.log("Error is", errors);

  const onSubmit = async (data, e) => {
    console.log("New Order data is", data);
    e.preventDefault();
    axios
      .post(
        "http://localhost:8081/new-order",
        // "http://localhost:8081/new-order",
        {
          request: "ADD",
          symbol: data.symbol.value,
          userId: id,
          volume: parseInt(data.quantity),
          price: parseFloat(data.price),
          side: data.side,
          orderType: data.ordertype,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        window.alert(
          `Your order to ${data.side.toUpperCase()} ${
            data.quantity
          } quantity of ${data.symbol.value} @ ${
            data.ordertype.toUpperCase() === "LIMIT"
              ? `Rs. ${data.price}`
              : `Market price`
          } has been placed.`
        );
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data);
      });
      
      reset(defaultValues);
      toggleModal &&  toggleModal();
  };
  return (
    <>
      <form
        className="w-full px-5 sm:px-0 flex flex-col gap-y-2 mt-2 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap sm:flex-nowrap -mx-3 mb-3 sm:mb-8 gap-y-2">
          {/* Symbol DropDown */}
          <OrderSymbol control={control} error={errors.symbol} />

          {/* OrderType DropDown */}
          <div className="w-full md:w-1/2 px-3 ">
            <CustomSelect
              label="Order Type"
              name="ordertype"
              arr={["Limit", "Market"]}
              error={errors.ordertype}
              register={register}
              defaultValue="Limit"
            />
          </div>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap -mx-3 mb-4 gap-y-2">
          {/* Input Quantity and Price Field */}
          <FormInputs
            errors={errors}
            register={register}
            watch={watch}
            trigger={trigger}
            display="neworder"
          />

          {/* Buy/Sell Dropdown */}
          <div className="w-full md:w-1/3 px-3 mb-2 sm:mb-6 ">
            <CustomSelect
              label="Side"
              name="side"
              arr={["Buy", "Sell"]}
              error={errors.side}
              register={register}
              defaultValue="Buy"
            />
          </div>
        </div>

        {/*Customized Submit Button */}
        <SubmitButton
          type="submit"
          label="Place Order"
          style={`justify-center`}
        />
      </form>
    </>
  );
}
