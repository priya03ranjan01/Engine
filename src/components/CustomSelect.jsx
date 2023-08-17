import React from "react";
import CustomLabel from "./CustomLabel";

/* Customized Select with Validation Messages */
const CustomSelect = ({ name, label, arr, register, error, defaultValue }) => {
  return (
    <div className="flex flex-col">
      <CustomLabel name={name} label={label} />

      <select
        className={`text-gray-600 py-1.5 sm:py-2.5 px-3 border w-full rounded bg-gray-100 focus:border-2  sm:mb-1 focus:bg-white shadow-md outline-none ${
          error ? "border-red" : "border-gray-400 focus:border-blue-400"
        }`}
        id={name}
        ref={register}
        {...register(`${name}`, {
          required: `${label} is required`,
        })}
        defaultValue={defaultValue}
      >
        <option value="" hidden disabled>
          Select {label}
        </option>
        {arr.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>

      {error && (
        <small className="text-red text-left">{error["message"]}</small>
      )}
    </div>
  );
};

export default CustomSelect;
