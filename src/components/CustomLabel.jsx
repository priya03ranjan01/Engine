import React from "react";

const CustomLabel = ({ label, name }) => {
  return (
    <label
      className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-1 text-left "
      htmlFor={name}
    >
      {label}
    </label>
  );
};

export default CustomLabel;
