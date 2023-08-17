import React, { useState, useEffect } from "react";
import CancelOrder from "../../services/Cancel/CancelOrder";
import ModifyOrder from "../../services/ModifyOrder";

export default function PrevOrdersData({ element, ...props }) {
  // console.log("Element in Data.js ", element);
  // console.log("Element.executed in Data.js ", element.executed);
  console.log("Inside PrevOrdersData: ", props.userOrder[props.index].executed);
  const [executed, setexecuted] = useState(props.executed);
  useEffect(() => {
    setexecuted(props.executed)
  }, [props.userOrder[props.index].executed]);

  // console.log("Executed in Data.js ", props.executed);
  const [isCancelled, setisCancelled] = useState(element.isCancelled);
  const [volume, setVolume] = useState(element.volume);
  const [remaining, setRemaining] = useState(
    element.volume - props.userOrder[props.index].executed
  );
  const [price, setPrice] = useState(element.price);
  return (
    <>
      <td className="whitespace-nowrap px-4 sm:px-5">{element.id}</td>
      <td className="whitespace-nowrap px-4 sm:px-5">{element.timestamp}</td>
      <td className="whitespace-nowrap px-4 sm:px-5">{element.symbol}</td>
      <td className="whitespace-nowrap px-4 sm:px-5">{element.orderType}</td>
      <td className="whitespace-nowrap px-4 sm:px-5">
        {element.orderType.toLowerCase() === "market" ? "MKT" : `${price}`}
      </td>
      <td
        className={`px-4 sm:px-5 marker:font-bold border-2 inline-block  my-2 rounded-full whitespace-nowrap ${
          element.side.toUpperCase().startsWith("BUY")
            ? "text-buy  border-buy  "
            : "text-sell  border-sell "
        }`}
      >
        {element.side.toUpperCase()}
      </td>
      <td className="whitespace-nowrap px-4 sm:px-5">{volume}</td>
      <td className="whitespace-nowrap px-4 sm:px-5">{executed}</td>
      <td className="whitespace-nowrap px-4 sm:px-5">{volume - executed}</td>

      {element.isCancelled === true ? (
        <td className="bg-red w-fit  inline-block px-3  my-2 rounded-full border border-red">
          Cancelled
        </td>
      ) : volume - executed !== 0 ? (
        <td className="bg-yellow-500 w-fit  inline-block my-2 rounded-full px-5 border border-yellow-500">
          Pending
        </td>
      ) : (
        <td className="bg-green-500 w-fit  inline-block px-3  my-2 rounded-full border border-green-500">
          Completed
        </td>
      )}

      <td className="whitespace-nowrap px-5">
        <ModifyOrder
          element={element}
          index={props.index}
          setPrice={setPrice}
          userOrder={props.userOrder}
          setVolume={setVolume}
          setRemaining={setRemaining}
          setUserOrder={props.setUserOrder}
          remaining={volume - executed}
          symbol={element.symbol}
          orderId={element.id}
          userId={element.userId}
        />
        &nbsp;&nbsp;
        <CancelOrder
          element={element}
          isCancelled={isCancelled}
          setisCancelled={setisCancelled}
          index={props.index}
          userOrder={props.userOrder}
          setUserOrder={props.setUserOrder}
          remaining={volume - props.executed}
          symbol={element.symbol}
          orderType={element.orderType}
          orderId={element.id}
          userId={element.userId}
        />
      </td>
    </>
  );
}
