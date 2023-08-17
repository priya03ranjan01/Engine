import React, { useState, useEffect } from "react";
import { OrderModal } from "../../services/NewOrder/OrderModal";
import HistoryTable from "./HistoryTable";

function OrderHistory(props) {
  console.log("userorder", props.userdata);
  useEffect(() => {
    return () => {
      console.log("props.userdata changed!");
    };
  }, [props.userdata]);

  return (
    <div className="bg-[#f1f1f1]">
      {/* For New Order Display on Button Click */}
      <OrderModal id={props.id} />

      {/* Previous Pending and Completed Transactions with Modify and Delete*/}
      <HistoryTable setUserOrder={props.setUserOrder} data={props.userdata} id={props.id} name="prevorders" />

      {/* Completed Executions Display */}
      <HistoryTable data={props.executions} id={props.id} name="executions" />
    </div>
  );
}
export default OrderHistory;
