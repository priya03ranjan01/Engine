import React, { useState } from "react";
import axios from "axios";
import ModalWrapper from "../../components/ModalWrapper";
import CancelFormFields from "./CancelFormFields";

export default function CancelOrder(element,...props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  let handleCancel = (e) => {
    e.preventDefault();
    axios
      // .post("http://localhost:8081/update-order",
      .post("http://localhost:8081/delete-order", {
        userId: props.userId,
        orderId: props.orderId,
        request: "CANCEL",
        orderType: props.orderType,
        symbol: props.symbol,
      })
      .then((res) => {
        console.log(res.data);
        window.alert(`Order ID: ${props.orderId} has been deleted.`);
        let arr = props.userOrder;
        arr[props.index].isCancelled = true;
        props.setUserOrder(arr);
        props.setisCancelled(true);
        toggleModal();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <>
      {/* <button
        type="submit"
        className={`fa fa-trash text-[1.4rem] ${
          props.remaining !== 0 && element.isCancelled === false ? " text-red hover:text-[#f44]"
            : " text-gray-400 cursor-not-allowed"
        }`}
        onClick={
          props.remaining !== 0 && element.isCancelled === false ? toggleModal : (e) => e.preventDefault()
        }
      ></button> */}
      {props.remaining !== 0 && element.isCancelled === false ? (
        <button
          title="Delete Order"
          className="fa fa-trash text-[1.4rem]  text-red hover:text-[#f44]"
          onClick={toggleModal}
        ></button>
      ) : (
        <button
          className="fa fa-trash text-[1.4rem] text-gray-400 cursor-not-allowed"
          onClick={(e) => e.preventDefault()}
        ></button>
      )}

      {modal && (
        <ModalWrapper
          toggleModal={toggleModal}
          title="Delete Order"
          style={`w-[15rem] sm:w-[25em] px-3`}
        >
          <CancelFormFields
            handleCancel={handleCancel}
            toggleModal={toggleModal}
            remaining={props.remaining}
            orderId={props.orderId}
          />
        </ModalWrapper>
      )}
    </>
  );
}
