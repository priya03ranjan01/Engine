import React from "react";
import CustomInput from "./CustomInput";

/* Volume and Price Inputs for New Order and Modify Forms with Validation Messages*/
const FormInputs = ({ errors, register, watch, trigger, display, element }) => {
  const inputs = [
    {
      label: "Quantity",
      name: "quantity",
      title: "Enter an integer only.",
      type: "text",
      style: {
        modify: `${
          watch("modifytype") === "Quantity"
            ? ` bg-gray-100  focus:border-2 focus:bg-white  
                        ${
                          errors.quantity
                            ? "border-red"
                            : "border-gray-400 focus:border-blue-400"
                        }`
            : "border-none bg-gray-300"
        }`,

        neworder: `bg-gray-100  focus:border-2 focus:bg-white 
                        ${
                          errors.quantity
                            ? "border-red"
                            : "border-gray-400 focus:border-blue-400 "
                        }`,
      },

      validation: {
        modify: {
          disabled: watch("modifytype") !== "Quantity",
          required: "Quantity is required.",
          min: element && { value: element.executed, message: `Minimum quantity is ${element.executed}` },
        },

        neworder: {
          required: "Quantity is required.",
          min: { value: 1, message: "Minimum quantity is 1" },
        },

        all: {
          validate: (value) => {
            if (/[0-9]*\.[0-9]{0,}$/.test(value))
              return "No decimals are allowed";
            else if (!/^[0-9]*$/.test(value)) return "Only digits are allowed";
          },
        },
      },
    },
    {
      label: "Price",
      name: "price",
      title: "Enter a multiple of 0.05 up to two decimal places only.",
      type: "text",
      style: {
        modify: `${
          watch("modifytype") === "Price"
            ? ` bg-gray-100  focus:border-2 focus:bg-white 
                        ${
                          errors.price
                            ? "border-red"
                            : "border-gray-400 focus:border-blue-400"
                        }`
            : "border-none bg-gray-300"
        }`,

        neworder: ` ${
          watch("ordertype") === "Market"
            ? "border-none bg-gray-300 "
            : `bg-gray-100  focus:border-2 focus:bg-white  
                        ${
                          errors.price
                            ? "border-red"
                            : "border-gray-400 focus:border-blue-400 "
                        }`
        }`,
      },

      validation: {
        modify: {
          disabled: watch("modifytype") !== "Price",
          required: "Price is required",
        },

        neworder: {
          disabled: watch("ordertype") === "Market",
          required: "Price is required",
        },

        all: {
          min: { value: 1, message: "Minimum price is 1" },
          validate: {
            validatePrice(value) {
              if (!/^[0-9.]*$/.test(value)) return "Only digits are allowed";

              if (!/^[0-9]*$|^[0-9]*\.[0-9]{0,2}$/.test(value))
                return "Number upto two decimals are allowed.";

              if (
                !/^[0-9]+\.[0-9][05]$|^[0-9]+\.[0-9]{0,1}$|^[0-9]*$/.test(value)
              )
                return "Only multiples of 0.05 are allowed";
            },
          },
        },
      },
    },
  ];

  return (
    <>
      {inputs.map((input, key) => {
        let { type, style, label, name, title, validation } = input;
        return (
          <div
            className={`${
              display === "neworder" && "w-full md:w-1/3 px-3 mb-2.5 sm:mb-6"
            }`}
            key={key}
          >
            <CustomInput
              name={name}
              label={label}
              title={title}
              type={type}
              style={
                display === "neworder" ? `${style.neworder}` : `${style.modify}`
              }
              register={register}
              trigger={trigger}
              error={errors[name]}
              validation={
                display === "neworder"
                  ? { ...validation.neworder, ...validation.all }
                  : { ...validation.modify, ...validation.all }
              }
            />
          </div>
        );
      })}
    </>
  );
};
export default FormInputs;
