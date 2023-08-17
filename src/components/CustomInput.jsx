import React from "react";
import CustomLabel from "./CustomLabel";

/* Customized Input with Validation Messages */
const CustomInput = ({
  name,
  label,
  style,
  register,
  error,
  validation,
  title,
  type,
  trigger,
}) => {
  return (
    <div className="flex flex-col">
      <CustomLabel name={name} label={label} />

      <input
        className={`text-gray-600 px-3.5 py-1 sm:py-2 text-md w-full rounded sm:mb-1 shadow-md  border  outline-none ${style}`}
        placeholder={`Enter ${label}`}
        id={name}
        title={title}
        autoComplete="off"
        ref={register}
        onKeyUp={() => {
          trigger(`${name}`);
        }}
        type={type}
        {...register(`${name}`, validation)}
      />

      {error && (
        <small className="text-red text-left">{error["message"]}</small>
      )}
    </div>
  );
};

export default CustomInput;
