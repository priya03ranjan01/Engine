import React, { useState } from "react";
import ModalWrapper from "../../components/ModalWrapper";
import SubmitButton from "../../components/SubmitButton";
import NewOrderForm from "./NewOrderForm";

export const OrderModal = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <SubmitButton
        label="Place New Order"
        toggleModal={toggleModal}
        style={`justify-center sm:justify-start my-4 mx-4 md:mx-8`}
      />

      {modal && (
        <div>
          <ModalWrapper
            toggleModal={toggleModal}
            title="Place New Order"
            id="new"
            style={`w-[30rem] mx-8 mt-16 px-4`}
          >
            <NewOrderForm toggleModal={toggleModal} id={props.id} />
          </ModalWrapper>
        </div>
      )}
    </>
  );
};
