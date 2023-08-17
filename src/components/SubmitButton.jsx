import React from "react";

const SubmitButton = ({ label, style, type, toggleModal }) => {
  return (
    <div className={`flex ${style}`}>
      <button
        type={type}
        className="text-lg cursor-pointer px-10 py-1.5 font-bold shadow-xl bg-yellow-400 rounded hover:scale-105 hover:bg-yellow-4 min-w-fit text-gray-900 my-2  whitespace-nowrap"
        onClick={() => toggleModal &&  toggleModal()}
      >
        {label}
      </button>
    </div>
  );
};

export default SubmitButton;
