import React, { useState, useEffect } from "react";
import TopSymbol from "./TopSymbol";
import OrderDisplay from "./OrderDisplay";
import axios from "axios";

function OrderBook({ userdata }) {
  // const data = userdata;
  const [symbol, setSymbol] = useState("");
  // const [data,setdata] = useState([{id: 1,request: "ADD",symbol: "GOOG",userId: 500,volume: 50,price: 250,side: "BUY",orderType: "LIMIT"}])
  // const [data, setdata] = useState([{}]);

  useEffect(() => {
    fetchData();
    // let a = stompClient.subscribe('/orderbook/' + symbol.value, (ob => {
    //   const obJson = JSON.parse(ob.body);
    //   console.log("orderbook = ", obJson);
    //   // setorderBookData([...obJson.buyOrders, ...obJson.sellOrders]);
    //   // console.log("orderBookData=", orderBookData);
    // }))
    // stompClient.unsubscribe(a.id);
    // console.log("Showing second subscription");
    // stompClient.subscribe('/orderbook/' + symbol.value, (ob => {
    //   const obJson = JSON.parse(ob.body);
    //   console.log("orderbook = ", obJson);
    //   // setorderBookData([...obJson.buyOrders, ...obJson.sellOrders]);
    //   // console.log("orderBookData=", orderBookData);
    // }))
    //setstompClient(stompClient);
  }, [symbol])

  async function fetchData () {

    console.log("Symbol changed to ", symbol.value)
    axios
      .post("http://localhost:8081/query-order", {
        symbol: symbol.value,
        request: "QUERY",
        queryType: "ALL-ORDERS",
      })
      .then((res) => {
        console.log("res = ", res);
      })

      .catch((err) => {
        console.log(err);
        // window.alert(err.response.data);
      });
  }

  return (
    <div className="flex items-center flex-col bg-[#f1f1f1]">
      {/* Symbol Block Display at the Top */}
      <TopSymbol symbol={symbol} setSymbol={setSymbol} />

      {/* Buy and Sell  Order Book Display */}
      <div className=" my-10 shadow-shade grid grid-cols-1 md:grid-cols-2 w-11/12 gap-y-[3px] md:gap-x-[3px] ">
        <OrderDisplay
          data={userdata}
          symbol={symbol}
          side="Buy"
          content="Buy Book"
        />
        <OrderDisplay
          data={userdata}
          symbol={symbol}
          side="Sell"
          content="Sell Book"
        />
      </div>
    </div>
  );
}

export default OrderBook;
