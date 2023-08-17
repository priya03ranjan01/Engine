import React from "react";
import BorderHeading from "./BorderHeading";

/*Wrapper Design for New Order, Modify and Delete Modals*/
const ModalWrapper = ({ children, ...props }) => {
  return (
    <div
      className={`flex items-center justify-center w-full right-0 left-0 inset-0 fixed  ${
        props.id === "new" ? "top-5" : "top-20"
      }
      } `}
    >
      <div
        onClick={() => props.toggleModal()}
        className="bg-[rgba(49,49,49,0.8)] absolute w-full h-full inset-0"
      ></div>

      <div
        className={`relative rounded bg-[#f1f1f1] min-h-fit sm:px-8  py-6 w-full z-50 ${props.style}
        }`}
      >
        <button
          className="absolute right-5 top-2"
          onClick={() => props.toggleModal()}
        >
          <i className="fa fa-times text-2xl text-gray-700"></i>
        </button>
        <BorderHeading
          heading={props.title}
          bg="text-gray-700 text-2xl mb-4 sm:mb-6"
          borderbg="border-gray-700 border-t-[3.5px] "
        />{" "}
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
