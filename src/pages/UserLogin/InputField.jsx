import React from "react";

function InputField(props) {
  return (
    <input
      required
      value={props.val }
      onChange={(e) => props.setval(e.target.value)}
      type={props.type}
      min="1"
      autoComplete="off"
      className="py-1.5 md:py-2.5 px-2 sm:px-4 border border-gray-400 rounded hover:scale-105 bg-gray-100 focus:bg-white outline-none shadow-lowshade text-lg md:text-xl w-full"
      placeholder={props.placeholder}
    />
  );
}

export default InputField;
