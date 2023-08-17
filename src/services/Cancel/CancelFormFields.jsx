import React from "react";

const CancelFormFields = (props) => {
  const cancelbuttons = [
    {
      label: "Delete",
      type: "submit",
      style: "bg-red hover:bg-[#a00] text-gray-200",
      clicked: (e) => props.handleCancel(e),
    },
    {
      label: "Close",
      type: "button",
      style: "bg-gray-400 hover:bg-gray-500 cursor-pointer text-gray-900 ",
      clicked: () => props.toggleModal(),
    },
  ];

  return (
    <>
      <form className="-mt-2">
        {/* Content */}
        <p className="text-center text-gray-600 font-medium ">
          Are you sure you want to delete Order ID: {props.orderId}?
        </p>
        <p className="text-center text-gray-600 font-medium ">
          Your remaining {props.remaining} orders will be deleted!!!
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-around mt-5 ">
          {cancelbuttons.map((input, key) => {
            let { type, style, label, clicked } = input;
            return (
              <div key={key}>
                <button
                  type={type}
                  className={`px-2.5 sm:px-8 py-1.5  font-bold shadow-lowshade rounded hover:scale-105  min-w-fit w-2/5 cursor-pointer ${style}`}
                  onClick={clicked}
                >
                  {label}
                </button>
              </div>
            );
          })}
        </div>
      </form>
    </>
  );
};

export default CancelFormFields;
