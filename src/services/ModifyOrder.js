import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import ModalWrapper from "../components/ModalWrapper";
import CustomSelect from "../components/CustomSelect";
import SubmitButton from "../components/SubmitButton";
import FormInputs from "../components/FormInputs";

export default function ModifyOrder(element, ...props) {
  const [modal, setModal] = useState(false);
  // const [element, setElement] = useState(element);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    watch,
    getValues,
  } = useForm();

  const toggleModal = () => {
    setModal(!modal);
    reset();
  };

  // console.log("Error is", errors);

  const onSubmit = async (data, e) => {
    console.log("Modified Data is", data);
    e.preventDefault();
    let arr = props.userOrder;

    if (data.modifytype === "Quantity") {
      axios
        .post("http://localhost:8081/update-order", {
          request: "MODIFY",
          orderId: props.orderId,
          userId: props.userId,
          symbol: props.symbol,
          modifyType: "VOLUME",
          volume: data.quantity,
        })
        .then((res) => {
          console.log(res.data);
          window.alert(
            `Quantity for Order ID: ${props.orderId} has been modified.`
          );
          arr[props.index].volume = data.quantity;
          props.setUserOrder(arr);
          props.setVolume(data.quantity);
          props.setRemaining(element.volume - element.executed);
        })

        .catch((err) => {
          console.log(err);
          // window.alert(err.response.data);
        });
    }

    if (data.modifytype === "Price") {
      axios
        .post("http://localhost:8081/update-order", {
          request: "MODIFY",
          orderId: props.orderId,
          userId: props.userId,
          symbol: props.symbol,
          modifyType: "PRICE",
          price: data.price,
        })
        .then((res) => {
          console.log(res.data);
          window.alert(
            `Price for Order ID: ${props.orderId} has been modified.`
          );
          console.log("Array in modify price ", arr);
          //arr.splice(props.index, 1);
          arr[props.index].price = data.price;
          props.setUserOrder(arr);
          props.setPrice(data.price);
        })

        .catch((err) => {
          console.log(err.response.data);
          // window.alert(err.response.data);
        });
    }

    toggleModal();
  };
  return (
    <>
      {props.remaining !== 0 && element.isCancelled === false ? (
        <button
          title="Modify Order"
          className="fa fa-edit text-[1.4rem] font-medium  text-blue-700 hover:text-blue-400"
          onClick={toggleModal}
        ></button>
      ) : (
        <button
          className="fa fa-edit text-[1.4rem] font-medium text-gray-400  cursor-not-allowed"
          onClick={(e) => e.preventDefault()}
        ></button>
      )}

      {modal && (
        <ModalWrapper
          toggleModal={toggleModal}
          title="Modify Order"
          style={`w-[15rem] sm:w-[20rem] px-6`}
        >
          <form
            className="flex flex-col items-stretch justify-center gap-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* ModifyType Dropdown */}
            <CustomSelect
              label="Modify Type"
              name="modifytype"
              arr={["Quantity", "Price"]}
              error={errors.modifytype}
              register={register}
              defaultValue=""
            />

            {/* Input Quantity and Price Field */}
            <FormInputs
              errors={errors}
              register={register}
              watch={watch}
              getValues={getValues}
              trigger={trigger}
              display="modify"
              element={element}
            />

            <SubmitButton
              label="Modify"
              type="submit"
              style={`items-center justify-around`}
            />
          </form>
        </ModalWrapper>
      )}
    </>
  );
}
