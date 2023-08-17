import React from "react";
import BorderHeading from "../components/BorderHeading";
import NewOrderForm from "../services/NewOrder/NewOrderForm";

export default function NewOrder(props) {
  return (
    <>
      <div className="flex items-center justify-center min-h-[85%] bg-[#f1f1f1] ">
        <div className=" max-w-xl sm:border-4 p-6 mx-auto sm:border-gray-300 rounded sm:shadow-lowshade">
          <BorderHeading
            heading="Place New Order"
            bg="text-gray-700 text-2xl md:text-3xl mb-6"
            borderbg="border-gray-700 border-t-[3.5px] "
          />

          <NewOrderForm id={props.id} />
        </div>
      </div>
    </>
  );
}
